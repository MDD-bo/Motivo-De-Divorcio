import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header style={{padding:12,borderBottom:'1px solid #eee'}}>
      <nav style={{display:'flex',gap:12}}>
        <Link href="/">Inicio</Link>
        <Link href="/productos">Productos</Link>
        <Link href="/peliculas">Películas</Link>
        <Link href="/calendario">Calendario</Link>
        <Link href="/servicios">Servicios</Link>
      </nav>
    </header>
  );
}

