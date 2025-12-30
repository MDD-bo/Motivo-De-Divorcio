import React from 'react';
import { notFound } from 'next/navigation';
import products from '../../../data/productos.json';
import WhatsAppButton from '../../../components/WhatsAppButton';
import { buildProductMessage } from '../../../lib/whatsapp';
import productos from '../../../data/productos.json';

export function generateStaticParams() {
  return productos.map((producto) => ({
    slug: producto.slug
  }))
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const p: any = products.find((x:any) => x.slug === params.slug);
  if (!p) return notFound();
  const PHONE_NUMBER = process.env.PHONE_NUMBER || '59171234567';
  const message = buildProductMessage({ id: p.id, nombre: p.nombre, precio: p.precio });
  return (
    <article>
      <h1>{p.nombre}</h1>
      <img src={p.imagenes?.[0] || '/img/placeholder.png'} alt={p.nombre} style={{width:320,height:200,objectFit:'cover'}} />
      <p>{p.descripcion}</p>
      <p>Estado: {p.estado}</p>
      <WhatsAppButton phone={PHONE_NUMBER} message={message} label={p.estado === 'disponible' ? 'Pedir por WhatsApp' : 'Consultar por WhatsApp'} />
    </article>
  );
}
