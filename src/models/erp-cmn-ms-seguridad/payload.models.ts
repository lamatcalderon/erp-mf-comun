export class PayLoadToken {
  sub?: string;
  aud?: string;
  exp?: number;
  iss?: string;
  nbf?: number;
  scopes?: Scopes;
}

export class Scopes {
  IdCuenta?: number;
  Usuario?: string;
  Servicios?: number[];
  //
  DocumentoEmpresa?: string;
  DocumentoPersona?: string;
  IdEntidadEmpresa?: number;
  IdEntidadPersona?: number;
  IdUsuario?: number;
  Sucursales?: Array<number>;
  TipoToken?: number;

}
