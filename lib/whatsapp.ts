export function buildWhatsAppLink(phone: string, message: string) {
  const normalized = (phone || '').replace(/[^0-9]/g, '');
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}

export function buildProductMessage(p: { id: string; nombre: string; precio?: string }) {
  return `Hola, quiero comprar:\nProducto: ${p.nombre}\nCódigo: ${p.id}\nPrecio: ${p.precio || ''}\nPor favor indicar disponibilidad y forma de pago.`;
}

export function buildMovieMessage(m: { id: string; titulo: string; estado?: string }) {
  return `Hola, quiero consultar por la película:\nTítulo: ${m.titulo}\nCódigo: ${m.id}\nEstado: ${m.estado || ''}`;
}

export function buildServiceMessage(s: { id: string; titulo: string; precio_base?: string; detalle?: string }) {
  return `Hola, solicito información sobre:\nServicio: ${s.titulo}\nPrecio base: ${s.precio_base || ''}\nDetalle: ${s.detalle || ''}`;
}

