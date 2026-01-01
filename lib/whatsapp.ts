// lib/whatsapp.ts
import { Movie, Product } from './types';

export const buildWhatsAppLink = (phone: string, message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export const buildMovieMessage = (m: Movie) =>
  `Hola, me interesa la película "${m.title}"${m.description ? ` — ${m.description}` : ''}`;

export const buildProductMessage = (p: Product) =>
  `Hola, quiero info sobre "${p.title}".${p.price ? ` Precio: ${p.price}` : ''}`;
