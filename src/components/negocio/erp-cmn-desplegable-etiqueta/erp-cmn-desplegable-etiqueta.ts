import { defineComponent } from "vue";
import { PATH_RESOURCES_IMAGES } from "../../../constants/hostserver.constant";

const EVT_ENVIAR_OBJETO_SELECCIONADO = "evt-enviar-objeto-seleccionado";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    etiqueta: {
      type: String,
      required: false,
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
  },
  setup(props, { emit }) {
    const icono =
      PATH_RESOURCES_IMAGES + "/src/assets/erp-mf-comun/icons/select-icon.svg";

    const seleccionar = (evt: any) => {
      const desplegable = evt.target;
      const valor = desplegable.value;
      emit(EVT_ENVIAR_OBJETO_SELECCIONADO, valor);
    };

    onMountedNative(props.id).then((elm: any) => {
      crearOpciones(props);
      crearEtiqueta(props);
    });

    return {
      icono,
      seleccionar,
    };
  },
});

const crearOpciones = (props) => {
  const desplegable = document.getElementById(props.id);
  for (let item in props.lista) {
    const elemento: any = props.lista[item];

    const opcion = document.createElement("option");
    opcion.value = elemento[props.clave];
    opcion.innerHTML = elemento[props.valor];

    desplegable?.appendChild(opcion);
  }
};

const crearEtiqueta = (props) => {
  if (props.etiqueta) {
    let label = document.createElement("label");
    label.setAttribute("class", "select-form__label");
    label.innerHTML = props.etiqueta;
    const principal = document.querySelector(".select-form");
    principal?.appendChild(label);
  }
};

const onMountedNative = (selector) => {
  return new Promise((resolve) => {
    if (document.getElementById(selector)) {
      return resolve(document.getElementById(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.getElementById(selector)) {
        resolve(document.getElementById(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
};
