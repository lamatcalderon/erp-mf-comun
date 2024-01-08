export class UsuarioUniversal {
    IdEntidad?: number;
    IdEmpresa?: number;
    IdCuenta?: number;
    IdRelacionEntidad?: number;
    Usuario?: string;
    Datos?: string;
    Iniciovigencia?: string;
    Finvigencia?: string;
    EstadoUsuario?: number;
    Dato2?: string;
    Dato3?: string;
    Empresa?: {};
    Contactos?: EntidadPlanillas[];
    Sucursales?: Sucursal[];
    Roles?: Rol[];
    DatosJson?: {};
    Id?: number;
}

export class Rol {
    IdModulo?: number;
    Nombre?: string;
    DescModulo?: string;
    Id?: number;
}

export class Sucursal {
    IdEntidad?: number;
    RazonSocial?: string;
    Descripcion?: string;
    Direccion?: string;
    Correo?: string;
    Defecto?: number;
    Ubigeo?: string;
    Telefono?: string;
    EstadoSucursal?: number;
    CodSunat?: string;
    Entidad?: {};
    Id?: number;

}

export class EntidadPlanillas {
    IdTipoDocumento?: number;
    IdUbigeo?: string;
    Documento?: string;
    RazonSocial?: string;
    Nombre?: string;
    ApePat?: string;
    ApeMat?: string;
    Correo?: string;
    Telefono?: string;
    Direccion?: string;
    TipoActualizacion?: number;
    ModoIngreso?: string;
    TipoDocumentoDesc?: string;
    Parametros?: [];
    Id?: number;

}

