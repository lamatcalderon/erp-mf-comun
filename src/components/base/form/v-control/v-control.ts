import {defineComponent, computed} from 'vue';

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: undefined,
    },
    isValid: {
      type: Boolean,
      default: false,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    textaddon: {
      type: Boolean,
      default: false,
    },
    nogrow: {
      type: Boolean,
      default: false,
    },
    subcontrol: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const isIconify = computed(() => {
      return props.icon && props.icon.indexOf(":") !== -1;
    });

    return {isIconify}
  },
});
