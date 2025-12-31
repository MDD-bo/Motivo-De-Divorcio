import React from 'react';
import Link from 'next/link';
import { Movie } from '../lib/types';

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <article className="card">
      <Link href={`/peliculas/${movie.slug}`}>
        <>
          <img src={movie.imagen || '/img/placeholder.png'} alt={movie.titulo} style={{width:200,height:120,objectFit:'cover'}}/>
          <h3>{movie.titulo}</h3>
        </>
      </Link>
      <p>{movie.precio}</p>
      <p>{movie.estado}</p>
    </article>
  );
}
