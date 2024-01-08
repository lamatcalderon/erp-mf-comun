import { useStorage } from "@vueuse/core";

type DocumentoState =
  | "none"
  | "Factura"
  | "Boleta"
  | "nota-venta"
  | "nota-credito"
  | "nota-debito"
  | "Cotizacion"
  | "pedido"
  | "guia-remision"
  | "notaCreditoCortina"
  | "notaItemCreditoCortina"
  | "notaDevolucionItemCreditoCortina";

type ViewState = 'punto_venta' | 'facturacion' | 'none';

type LangState = 'es' | 'en-US' | 'pt';

type ActivePanelId =
  | 'none'
  | 'search'
  | 'languages'
  | 'activity'
  | 'task'
  | 'ventas'
  | 'finalventa'
  | 'egreso-caja'
  | 'ingreso-caja'
  | 'cotizaciones'
  | 'comunicacion-baja'
  | 'bitacora'
  | 'tutorial'
  | 'filtro-busqueda'
  | 'producto-servicio-manual'
  | 'tutoriales'
  | 'registro-clientes'
  | 'info-item'
  | 'filtro-categorias'
  | 'invitar-usuario'
  | 'reenviar-invitacion'
  | 'usuarios-por-rol'
  | 'editar-usuario'
  | 'agregar-moneda'
  

export const stateDocumento = useStorage<DocumentoState>("documento", "Factura");
export const stateVista = useStorage<ViewState>('view', 'punto_venta');
export const stateVistaPrev = useStorage<ViewState>('prev_view', 'none');
export const stateLenguaje = useStorage<LangState>('lang', 'es');
export const statePanel = useStorage<ActivePanelId>('active-panel', 'none');
