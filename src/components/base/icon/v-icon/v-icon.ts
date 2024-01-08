import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isIconify = computed(() => {
      return props.icon && props.icon.indexOf(":") !== -1;
    });

    return {
      isIconify
    };
  },
});
