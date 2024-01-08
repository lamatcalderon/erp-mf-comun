import { CONTEXT_MSSEGURIDAD } from "../constants/app.constant";
//@ts-ignore
import { post } from "../sreasons-erp-mf-comun";

import { RefreshToken } from "../models/erp-cmn-ms-seguridad/refresh-token.models";

class ServiceMsSeguridad {
    private static classInstance?: ServiceMsSeguridad;

    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new ServiceMsSeguridad();
        }
        return this.classInstance;
    }

    refreshToken = ( refresh: RefreshToken ) => {
        return post<RefreshToken>(
          `${CONTEXT_MSSEGURIDAD}/api/v1/usuarios/refrestoken`,
          refresh
        );
      };
}

export default ServiceMsSeguridad.getInstance();


