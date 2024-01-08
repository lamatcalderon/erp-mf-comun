import { defineComponent, PropType } from "vue";

type TagColor =
  | undefined
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'orange'
  | 'blue'
  | 'green'
  | 'purple'
  | 'white'
  | 'light'
  | 'solid';

export default defineComponent({
  props: {
    label: {
      type: [String, Number],
      default: undefined,
    },
    color: {
      type: String as PropType<TagColor>,
      default: undefined,
      validator: (value: TagColor) => {
        // The value must match one of these strings
        if (
          [
            undefined,
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "danger",
            "orange",
            "blue",
            "green",
            "purple",
            "white",
            "light",
            "solid",
          ].indexOf(value) === -1
        ) {
          console.warn(
            `V-Tag: invalid "${value}" color. Should be primary, secondary, info, success, ` +
              `warning, danger, orange, blue, green, purple, white, light, solid or undefined`
          );
          return false;
        }

        return true;
      },
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    curved: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    elevated: {
      type: Boolean,
      default: false,
    },
    remove: {
      type: Boolean,
      default: false,
    },
  },
});