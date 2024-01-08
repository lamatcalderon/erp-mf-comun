import { CONTEXT_MSPLANILLAS } from "../constants/app.constant";
//@ts-ignore
import { get } from "../sreasons-erp-mf-comun";

import { EntidadDependiente } from "../models/erp-cmn-ms-planillas/entidad-dependiente.models";

export const entidadesAutocompletar = (
  parametrobusqueda: string,
  regxpag: number,
  tipo: number,
  tipoConsulta: number
) => {
  return get<EntidadDependiente>(
    `${CONTEXT_MSPLANILLAS}/api/v1/entidades/relacionados/autocompletado`,
    {
      parametrobusqueda: parametrobusqueda,
      Regxpag: regxpag,
      tipo: tipo,
      tipoConsulta: tipoConsulta,
    }
  );
};
