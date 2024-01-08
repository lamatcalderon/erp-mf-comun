interface IListaItemFavorito {
  IdItemListaPrecio: number;
  IdItem: number;
  TipoItem: number;
  IdAlmacen: number;
  Stock: number;
  ControlarStock: number;
  NombreItem: string;
  CodigoBarras: string;
  NombreMarca: string;
  CodigoItem: string;
  UnidadItem: string;
  UnidadISO: string;
  PrecioBase: number;
  PrecioLista: number;
  Estado: number;
  EstadoItem: number;
  UrlImg: string;
  MostrarDetallado: number;
  IdTipoPrecioVentaUnitario: number;
  IdTipoAfectacionIGV: number;
  EsFavorito: number;
  IdListaPrecio: number;
  NombreLista: string;
  CodigosAlternativos: [string];
  PosicionAlmacen: string;
}
