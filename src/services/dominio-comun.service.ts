import { DOMINIO_TIPO_DOC_KEY } from "../constants/app.constant";
import { TipoComprobante } from "../models/erp-cmn-ms-facturacion/tipo-comprobante.models";
import { getItem, saveItem } from "../util/local-storage.util";
import mscontabilidadService from "./mscontabilidad.service";
import seguridadComunService from "./seguridad-comun.service";

class ServiceDominioComun {
    private static classInstance?: ServiceDominioComun;

    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new ServiceDominioComun();
        }
        return this.classInstance;
    }

   async getTipoDocumentos() {
    if (!getItem(DOMINIO_TIPO_DOC_KEY)) {
        const idEntidad = seguridadComunService.getPayloadFromToken().scopes?.IdEntidadEmpresa;
        return mscontabilidadService.getTipoDocumento("1", idEntidad!)
            .then((list: [TipoComprobante]) => {
                saveItem(DOMINIO_TIPO_DOC_KEY, JSON.stringify(list));
                return list;
            })
    }
    return eval(getItem(DOMINIO_TIPO_DOC_KEY));
   }
}

export default ServiceDominioComun.getInstance();