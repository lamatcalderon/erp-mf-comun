import { useStorage } from "@vueuse/core";

type ActivePanelId =
  | "none"
  | "search"
  | "languages"
  | "activity"
  | "task"
  | "ventas"
  | "finalventa"
  | "egreso-caja"
  | "ingreso-caja"
  | "cotizaciones"
  | "comunicacion-baja"
  | "filtro-busqueda"
  | "producto-servicio-manual"
  | "tutoriales"
  | "registro-clientes"
  | "info-item"
  | 'invitar-usuario'
  | 'reenviar-invitacion'
  | 'usuarios-por-rol'
  | 'agregar-moneda';

export const activePanel = useStorage<ActivePanelId>("active-panel", "none");
