import { defineComponent } from "vue";

const EVT_TEXTO_INGRESADO = "evt-texto-ingresado";

export default defineComponent({
    props: {
        etiqueta: {
            type: String,
            required: false
        },
        placeholder: {
            type: String,
            required: false,
            default: ""
        }
    },
    setup(props, { emit }) {
        const textoIngresado = (value: String) => {
            emit(EVT_TEXTO_INGRESADO, value);
          };

          return {
            textoIngresado
          }
    }
})