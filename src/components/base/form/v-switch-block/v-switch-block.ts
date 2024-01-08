import {defineComponent, ref} from "vue";
import type { PropType } from "vue";
type TypeSwitch =
    | "Normal"
    | "Block"
type SwitchBlockColor =
  | undefined
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger";

export default defineComponent({
  props: {
    typeSwitch: {
      type: String as PropType<TypeSwitch>,
      default: "Block",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: undefined,
    },
    color: {
      type: String as PropType<SwitchBlockColor>,
      default: undefined,
      validator: (value: SwitchBlockColor) => {
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
            `V-SwitchBlock: invalid "${value}" color. Should be primary, info, success, warning, danger or undefined`
          );
          return false;
        }

        return true;
      },
    },
    thin: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, {emit}) {
    let instances = 0;
    const blockSwitchId = ref(``);
    if(props.typeSwitch == "Block"){
      blockSwitchId.value = `block-switch-${++instances}`;
    }
    else if (props.typeSwitch == "Normal"){
      // @ts-ignore
      blockSwitchId.value = null
    }
    return {
        blockSwitchId,
        emit
    }
  }
});
