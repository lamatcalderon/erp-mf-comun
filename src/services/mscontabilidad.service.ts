import { CONTEXT_MSCONTABILIDAD } from "../constants/app.constant";
import { TipoComprobante } from "../models/erp-cmn-ms-facturacion/tipo-comprobante.models";
import { get } from "../util/rest-request.util";

class ServiceMsContabilidad {
  private static classInstance?: ServiceMsContabilidad;

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new ServiceMsContabilidad();
    }
    return this.classInstance;
  }

  getTipoDocumento = (estados: string, idEntidad: number) => {
    return get<[TipoComprobante]>(
      `${CONTEXT_MSCONTABILIDAD}/api/dominio/tipocomprobante`,
      {
        estados: estados,
        identidad: idEntidad,
      }, {}, "erp-url"
    );
  };
}

export default ServiceMsContabilidad.getInstance();
