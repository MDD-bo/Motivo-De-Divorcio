import React from 'react';
import { notFound } from 'next/navigation';
import movies from '../../../data/peliculas.json';
import WhatsAppButton from '../../../components/WhatsAppButton';
import { buildMovieMessage } from '../../../lib/whatsapp';
import peliculas from '../../../data/peliculas.json';

export function generateStaticParams() {
  return peliculas.map((pelicula) => ({
    slug: pelicula.slug
  }))
}

export default function MovieDetail({ params }: { params: { slug: string } }) {
  const m: any = movies.find((x:any) => x.slug === params.slug);
  if (!m) return notFound();
  const PHONE_NUMBER = process.env.PHONE_NUMBER || '59171234567';
  const message = buildMovieMessage({ id: m.id, titulo: m.titulo, estado: m.estado });
  return (
    <article>
      <h1>{m.titulo}</h1>
      <img src={m.imagen || '/img/placeholder.png'} alt={m.titulo} style={{width:320,height:200,objectFit:'cover'}} />
      <p>{m.resumen}</p>
      <p>{m.nota}</p>
      <p>Estado: {m.estado}</p>
      <WhatsAppButton phone={PHONE_NUMBER} message={message} label="Consultar por WhatsApp" />
    </article>
  );
}
