import { defineComponent } from "vue";
import { PATH_RESOURCES_IMAGES } from "../../../constants/hostserver.constant";

const prefijo = "erp-page-not-found";
export default defineComponent({
  setup() {
    const icono =
      PATH_RESOURCES_IMAGES +
      "/src/assets/erp-mf-seguridad/images/logo-robot.svg";
    const goBack = () => {
    //   history.back();
        window.location.href = '/home';
    };
    return {
      prefijo,
      icono,
      goBack,
    };
  },
});