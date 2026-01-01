// lib/types.ts
export type Availability = 'disponible' | 'pendiente' | 'agotado';

export interface BaseItem {
  id: string;
  title: string;
  image?: string;
  status?: Availability;
  description?: string;
}

export interface Movie extends BaseItem {
  duration?: string;
  year?: number;
}

export interface Product extends BaseItem {
  price?: number;
  stock?: number;
}
