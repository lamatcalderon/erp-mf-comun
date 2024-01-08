export class EntidadDependiente {
  IdEntidad?: number;
  RazonSocialEntidad?: string;
  DocumentoEntidad?: string;
  IdTipoDocumentoEntidad?: number;
  IdRelacionado?: number;
  RazonSocialRelacionado?: string;
  DocumentoRelacionado?: string;
  IdTipoDocumentoRelacionado?: number;
  TipoDocumentoRelacionadoDesc?: string;
  Tipo?: number;
  Descripcion?: string;
  Codigo?: string;
  Nombre?: string;
  ApePat?: string;
  ApeMat?: string;
  Telefono?: string;
  Direccion?: string;
  Correo?: string;
  Orden?: number;
  TipoConsulta?: number;
  Parametros?: IParametros[];
  Id?: number;
}

export interface IParametros extends ILogExt {
  IdParametro: number;
  IdRelacionado: number;
  Valor: string;
  Dato1: string;
  Dato2: string;
  Dato3: string;
  Id: number;
}

interface ILogExt {
  LogUsuariocrea: string;
  LogFechacrea: string;
  LogUsuariomodif: string;
  LogFechamodif: string;
  LogEstado: number;
}
