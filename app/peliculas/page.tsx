import React from 'react';
import movies from '../../data/peliculas.json';
import MovieCard from '../../components/MovieCard';
import { validateData, shouldValidateAtRuntime } from '../../lib/validate';

if (shouldValidateAtRuntime()) validateData('peliculas.json', movies, { throwOnError: true });

export default function PeliculasPage() {
  const disponibles = movies.filter((m:any) => m.estado === 'disponible');
  const pendientes = movies.filter((m:any) => m.estado !== 'disponible');
  return (
    <section>
      <h1>Películas</h1>
      <h2>Disponibles</h2>
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {disponibles.map((m:any)=> <div key={m.id} style={{width:220}}><MovieCard movie={m} /></div>)}
      </div>
      <h2>Pendientes</h2>
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {pendientes.map((m:any)=> <div key={m.id} style={{width:220}}><MovieCard movie={m} /></div>)}
      </div>
    </section>
  );
}
