import { defineComponent} from "vue";

const prefijo='v-loading-spinner';
export default defineComponent({
    name: prefijo,
    props: {
        active: Boolean,
        text: String
    },
    setup(props, ctx) {
        return {
            prefijo
        }
    },
});