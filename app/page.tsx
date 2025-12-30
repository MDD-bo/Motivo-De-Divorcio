import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Catálogo - Inicio</h1>
      <p>Bienvenido. Navega por Productos, Películas, Calendario y Servicios.</p>
      <ul>
        <li><Link href="/productos">Productos</Link></li>
        <li><Link href="/peliculas">Películas</Link></li>
        <li><Link href="/calendario">Calendario</Link></li>
        <li><Link href="/servicios">Servicios</Link></li>
      </ul>
    </div>
  );
}

