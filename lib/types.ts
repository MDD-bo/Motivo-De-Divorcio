export interface Product {
  id: string;
  slug: string;
  nombre: string;
  precio: string;
  moneda?: string;
  imagenes?: string[];
  stock?: number;
  estado?: 'disponible' | 'agotado' | string;
  descripcion?: string;
}

export interface Movie {
  id: string;
  slug: string;
  titulo: string;
  imagen?: string;
  precio?: string;
  estado?: 'disponible' | 'pendiente' | string;
  resumen?: string;
  nota?: string;
}

export interface CalendarWeek {
  weekStart: string; // ISO
  weekEnd: string; // ISO
  titulo: string;
  slug?: string;
  enlace?: string;
}

export interface Service {
  id: string;
  titulo: string;
  precio_base?: string;
  descripcion?: string;
}
export interface IProduct {
  id: string;
  slug: string;
  nombre: string;
  precio: string;
  moneda: string;
  imagenes: string[];
  stock: number;
  estado: "disponible" | "agotado";
  descripcion: string;
}

export interface IMovie {
  id: string;
  slug: string;
  titulo: string;
  imagen: string;
  precio: string;
  estado: "disponible" | "pendiente";
  resumen: string;
  nota: string;
}

export interface ICalendarWeek {
  weekStart: string;
  weekEnd: string;
  titulo: string;
  slug: string;
  enlace?: string;
}

export interface IService {
  id: string;
  titulo: string;
  precio_base: string;
  descripcion: string;
}
