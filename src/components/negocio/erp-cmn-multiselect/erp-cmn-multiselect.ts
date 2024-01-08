import { defineComponent, ref } from "vue";

import { PATH_RESOURCES_IMAGES } from "../../../constants/hostserver.constant";

const PREFIJO = "erp-cmn-multiselect";
const EVT_ENVIAR_OBJETOS_SELECCIONADOS = "evt-enviar-objetos-seleccionados";

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      default: "large",
    },
    lista: {
      type: Array,
      required: true,
    },
    clave: {
      type: String,
      required: true,
    },
    valor: {
      type: String,
      required: true,
    },
    mensaje: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const seleccionados: any = ref([]);

    const abrir = (event) => {
      if (event.target.getAttribute("cls-ele")) return;
      const element: any = document.querySelector(`#${props.id} .${PREFIJO}-elementos`);
      element?.classList.add("is-active");
    };

    const limpiar = (evt) => {
      seleccionados.value = [];
      const display: any = document.querySelector(`#${props.id} .${PREFIJO}-display`);
      display.textContent = props.mensaje;
      const cerrar: any = document.querySelector(`#${props.id} .${PREFIJO}-opciones .${PREFIJO}-cerrar`);
      cerrar.classList.add('is-hide')
      const elementos: any = document.querySelector(`#${props.id} .${PREFIJO}-elementos`);
      elementos?.classList.remove("is-active");
      const lis = document.querySelectorAll(`#${props.id} .${PREFIJO}-item-imagen`);
      lis.forEach((ele) => {
        ele.classList.remove("is-active");
      });
      
      emit(
        EVT_ENVIAR_OBJETOS_SELECCIONADOS,
        seleccionados.value.map((x) => x[props.clave])
      );
    };

    window.addEventListener("evt-erp-cmn-multiselect-limpiar", (evt: any) => {
      if (evt.origin != '') {
        return;
      }
      if(evt?.detail['id'] === props.id) {
        limpiar(null);
      }
    });

    window.addEventListener("click", function (e: any) {
      if (e.origin != '') {
        return;
      }
      const elementContenido: any = document.querySelector(
        `#${props.id} .${PREFIJO}-contenido`
      );
      const elementLista: any = document.querySelector(`#${props.id} .${PREFIJO}-elementos`);
      if (
        !(
          elementContenido.contains(e.target) || elementLista.contains(e.target)
        )
      ) {
        elementLista.classList.remove("is-active");
      }
    });

    onMountedNative(`#${props.id} .${PREFIJO}-lista`).then(() => {
      crearOpciones(props);
      crearEventoOpciones(props, emit, seleccionados);
      verificarElementosSeleccionados(props, seleccionados);
    });

    return {
      PATH_RESOURCES_IMAGES,
      PREFIJO,
      seleccionados,
      abrir,
      limpiar,
    };
  },
});

const verificarElementosSeleccionados = (props, seleccionados) => {
  seleccionados.value.length > 0 
  ? document.querySelector(`#${props.id} .${PREFIJO}-cerrar`)?.classList.remove('is-hide') 
  : document.querySelector(`#${props.id} .${PREFIJO}-cerrar`)?.classList.add('is-hide');
}

const crearOpciones = (props) => {
  const lista: any = document.querySelector(`#${props.id} .${PREFIJO}-lista`);
  props.lista.forEach((x: any) => {
    let li = document.createElement("li");
    li.setAttribute("class", `${PREFIJO}-item flex-between`);
    li.setAttribute("id-ele", x[props.clave]);
    li.innerHTML = `<span id-ele=${
      x[props.clave]
    } class="${PREFIJO}-item-texto is-${props.size}">${
      x[props.valor]
    }</span><img id-ele=${
      x[props.clave]
    } class="${PREFIJO}-item-imagen" src="${PATH_RESOURCES_IMAGES}/src/assets/erp-mf-punto-venta/icons/green_check.svg" alt="check"/>`;
    lista.appendChild(li);
  });
};

const crearEventoOpciones = (props, emit, seleccionados) => {
  const display: any = document.querySelector(`#${props.id} .${PREFIJO}-display`);
  display.textContent = props.mensaje;

  const divs = document.querySelectorAll(`#${props.id} .${PREFIJO}-item`);

  divs.forEach((el) =>
    el.addEventListener("click", (event: any) => {
      const id = event.target.getAttribute("id-ele");
      if (!seleccionados.value.find((x) => +x[props.clave] === +id)) {
        const item = props.lista.find((x: any) => +x[props.clave] === +id);
        seleccionados.value.push(item);
        el.getElementsByTagName("img")[0].classList.add("is-active");
      } else {
        seleccionados.value = seleccionados.value.filter(
          (x: any) => +x[props.clave] !== +id
        );
        el.getElementsByTagName("img")[0].classList.remove("is-active");
      }
      display.textContent =
        seleccionados.value.length > 0
          ? `${seleccionados.value.length} elemento(s) seleccionado(s)`
          : props.mensaje;

      verificarElementosSeleccionados(props, seleccionados);

      emit(
        EVT_ENVIAR_OBJETOS_SELECCIONADOS,
        seleccionados.value.map((x) => x[props.clave])
      );
    })
  );
};

const onMountedNative = (selector) => {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
};
