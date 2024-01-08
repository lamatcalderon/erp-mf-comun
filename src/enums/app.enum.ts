export enum EnumEstadoPanel {
  NONE = "none",
  COMUNICACION_BAJA = "comunicacion-baja",
  INFO_ITEM = "info-item",
  INGRESO_CAJA = "ingreso-caja",
  EGRESO_CAJA = "egreso-caja",
  FILTRO_CATEGORIAS = "filtro-categorias",
  PRODUCTO_SERVICIO_MANUAL = "producto-servicio-manual",
  REGISTRO_CLIENTES = "registro-clientes",
  BITACORA = "bitacora",
  TUTORIAL = "tutorial",
  SELECCION_ITEMS = "seleccion-item",
  VENTAS = "ventas",
  VENTAS_FINAL = "finalventa",
  FILTROS_BUSCADOR_DOCUMENTOS = 'filtros-buscador-documentos',
  TUTORIALES = 'tutoriales',
  INVITAR_USUARIO='invitar-usuario',
  REENVIAR_INVITACION='reenviar-invitacion',
  USUARIOS_POR_ROL='usuarios-por-rol',
  CREAR_NUEVO_ROL='crear-nuevo-rol',
  EDITAR_USUARIO = "editar-usuario",
  AGREGAR_MONEDA = "agregar-moneda",
  NUEVO_METODO_PAGO = "nuevo-metodo-pago",
  EDITAR_METODO_PAGO="editar-metodo-pago",
  NUEVA_CAJA = "nueva-caja",
  AGREGAR_USUARIO = "agregar-usuario"
}

export enum EnumEstadoVista {
  NONE = "none",
  PUNTO_VENTA = "punto_venta",
  FACTURACION = "facturacion",
}

export enum EnumEstadoDocumento {
  NONE = "none",
  FACTURA = "factura",
  BOLETA = "boleta",
  NOTA_VENTA = "nota-venta",
  COTIZACION = "cotizacion",
  PEDIDO = "pedido",
  NOTA_DEBITO = "nota-debito",
  NOTA_CREDITO = "nota-credito",
  GUIA_REMISION = "guia-remision",
}

export enum EnumIdTipoDocumento {
  NONE = 0,
  FACTURA = 1003,
  BOLETA = 1004,
  COTIZACION = 3007,
  PEDIDO = 2011,
  NOTA_DEBITO = 1006,
  NOTA_CREDITO = 1005,
  GUIA_REMISION = 3005,
}
