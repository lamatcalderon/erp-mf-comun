import { defineComponent, PropType, computed } from "vue";

type RadioColor =
  | undefined
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger";

export default defineComponent({
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: undefined,
    },
    modelValue: {
      type: [String, Number],
      default: undefined,
    },
    color: {
      type: String as PropType<RadioColor>,
      default: undefined,
      validator: (value: RadioColor) => {
        // The value must match one of these strings
        if (
          [
            undefined,
            "primary",
            "info",
            "success",
            "warning",
            "danger",
          ].indexOf(value) === -1
        ) {
          console.warn(
            `V-Radio: invalid "${value}" color. Should be primary, info, success, warning, danger or undefined`
          );
          return false;
        }

        return true;
      },
    },
    square: {
      type: Boolean,
      default: false,
    },
    solid: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, {emit}) {
    const checked = computed(() => props.value === props.modelValue)

    const change = () => {
      emit('update:modelValue', props.value)
    }

    return {
        checked,
        change
    }
  }
});