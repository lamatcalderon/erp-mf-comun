import { defineComponent } from "vue";

import { PATH_RESOURCES_IMAGES } from "../../../constants/hostserver.constant";

export default defineComponent({
    props: {
        light: {
          type: Boolean,
          default: false,
        },
        width: {
          type: Number,
          default: 38
        },
        height: {
          type: Number,
          default: 38
        }
    },
    setup() {
      return {
        PATH_RESOURCES_IMAGES
      }
    }
});