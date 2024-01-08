import { REFRESH_TOKEN_KEY, USUARIO_CUENTA_KEY } from "../constants/app.constant";
import { PayLoadToken } from "../models/erp-cmn-ms-seguridad/payload.models";
import { TokenCredentials } from "../models/erp-cmn-ms-seguridad/token-credentials.models";
import jwtServiceUtil, { destroyToken } from "../util/jwt-service.util";
import { getItem, saveItem } from "../util/local-storage.util";
import jwtDecode from "jwt-decode";
import { UsuarioUniversal } from "../models/erp-cmn-ms-seguridad/usuario-universal.models";
import msseguridadService from "./msseguridad.service";
import { RefreshToken } from "../models/erp-cmn-ms-seguridad/refresh-token.models";

class ServiceSeguridadComun {
    private static classInstance?: ServiceSeguridadComun;

    public static getInstance(){
        if (!this.classInstance) {
            this.classInstance = new ServiceSeguridadComun();
        }
        return this.classInstance;
    }

    getPayloadFromToken(): PayLoadToken {
        return jwtDecode(jwtServiceUtil.getToken()? jwtServiceUtil.getToken()! : '');
    }

    guardarToken(token: TokenCredentials) {
        jwtServiceUtil.saveToken(token.AccessToken? token.AccessToken : '' );
        saveItem(REFRESH_TOKEN_KEY, token.RefreshToken ? token.RefreshToken :'');
    }

    saveDataUsuario(user: UsuarioUniversal) {
        saveItem(USUARIO_CUENTA_KEY, btoa(JSON.stringify(user)));
    }

    getDataUsuario(): UsuarioUniversal {
        let x = atob(getItem(USUARIO_CUENTA_KEY));
        return JSON.parse(x) as UsuarioUniversal;
    }

    // Logic   
    async refreshToken() {
        const refresh = Object.assign( new RefreshToken(), {
            AccessToken: jwtServiceUtil.getToken(), 
            RefreshToken: getItem(REFRESH_TOKEN_KEY)
        });
        // destroyToken();
        return msseguridadService.refreshToken(refresh)
            .then((ref: RefreshToken) => {
                this.guardarToken(ref);
            })
    }

    ObtnerIdPayload() {
        let payLoad: PayLoadToken = this.getPayloadFromToken();
        return payLoad;
      }
    


}

export default ServiceSeguridadComun.getInstance();