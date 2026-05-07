/** Contratos alineados con src/api/*.py del backend FastAPI. */

export interface UsuarioRead {
  id_usuario: string;
  nombre_completo: string;
  nombre_usuario: string;
  email: string;
  rol: string;
  activo: boolean;
}

export interface UsuarioCreate {
  nombre_usuario: string;
  email: string;
  contrasena: string;
  rol: string;
  activo?: boolean;
}

export interface UsuarioUpdate {
  nombre_usuario?: string;
  email?: string;
  contrasena?: string;
  rol?: string;
  activo?: boolean;
}

export interface CategoriaRead {
  id_categoria: string;
  nombre_categoria: string; // <-- Corregido para Python
  descripcion: string | null;
  estado: boolean;
  fecha_creacion: string | null;
  fecha_edicion: string | null;
  id_usuario_creacion: string;
  id_usuario_edita: string | null;
}

export interface CategoriaCreate {
  nombre_categoria: string; // <-- Corregido
  descripcion?: string | null;
  estado?: boolean;
  id_usuario_creacion: string;
}

export interface CategoriaUpdate {
  nombre_categoria?: string; // <-- Corregido
  descripcion?: string | null;
  estado?: boolean;
  id_usuario_edita: string;
}

export interface ProductoRead {
  id_producto: string;
  id_categoria: string;
  nombre_producto: string; // <-- Corregido
  descripcion_producto: string | null; // <-- Corregido
  precio: number; // <-- ¡Faltaba y es obligatorio en DB!
  stock: number;  // <-- ¡Faltaba y es obligatorio en DB!
  fecha_creacion: string | null;
  fecha_edicion: string | null;
  id_usuario_creacion: string;
  id_usuario_edita: string | null;
}

export interface ProductoCreate {
  id_categoria: string;
  nombre_producto: string; // <-- Corregido
  descripcion_producto?: string | null; // <-- Corregido
  precio: number; // <-- Obligatorio
  stock: number;  // <-- Obligatorio
  id_usuario_creacion: string;
}

export interface ProductoUpdate {
  id_categoria?: string;
  nombre_producto?: string; // <-- Corregido
  descripcion_producto?: string | null; // <-- Corregido
  precio?: number;
  stock?: number;
  id_usuario_edita: string;
}

export interface PedidoRead {
  id_pedido: string;
  id_usuario: string;
  total_pagado: number; // <-- Corregido (no existe 'nombre' en Pedido backend)
  fecha_creacion: string | null;
  fecha_edicion: string | null;
  id_usuario_creacion: string;
  id_usuario_edita: string | null;
}

export interface PedidoCreate {
  id_usuario: string;
  total_pagado: number; // <-- Corregido
  id_usuario_creacion: string;
}

export interface PedidoUpdate {
  id_usuario?: string;
  total_pagado?: number; // <-- Corregido
  id_usuario_edita: string;
}

export interface DetallePedidoRead {
  id_detalle_pedido: string;
  id_pedido: string;
  id_producto: string;
  cantidad: number; // <-- Faltaba en el front, pero suele ser vital
  precio_unitario: number; // <-- Faltaba
}

export interface DetallePedidoCreate {
  id_pedido: string;
  id_producto: string;
  cantidad: number;
  precio_unitario: number;
}

export interface DetallePedidoUpdate {
  id_pedido?: string;
  id_producto?: string;
  cantidad?: number;
  precio_unitario?: number;
}

export interface PagoRead {
  id_pago: string;
  id_pedido: string;
  metodo_pago: string; // <-- Corregido (era tipo_pago)
  monto_pagado: number; // <-- Corregido (era referencia)
  fecha_creacion: string | null;
  fecha_edicion: string | null;
  id_usuario_creacion: string;
  id_usuario_edita: string | null;
}

export interface PagoCreate {
  id_pedido: string;
  metodo_pago: string;
  monto_pagado: number;
  id_usuario_creacion: string;
}

export interface PagoUpdate {
  id_pedido?: string;
  metodo_pago?: string;
  monto_pagado?: number;
  id_usuario_edita: string;
}