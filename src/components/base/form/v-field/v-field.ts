import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
      default: undefined,
    },
    addons: {
      type: Boolean,
      default: false,
    },
    textaddon: {
      type: Boolean,
      default: false,
    },
    grouped: {
      type: Boolean,
      default: false,
    },
    multiline: {
      type: Boolean,
      default: false,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
});
