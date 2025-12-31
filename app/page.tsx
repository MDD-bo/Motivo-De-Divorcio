import React from 'react';
import Link from 'next/link';
import SocialMediaButtons from '../components/SocialMediaButtons';

export default function Home() {
  return (
    <main className="main-content container">
      <div className="hero">
        <h1>Bienvenido a MDD</h1>
        <p>Tu universo de entretenimiento, productos y servicios.</p>
        <Link href="/productos" className="cta-button">
          Explorar Productos
        </Link>
      </div>

      <div className="section-grid">
        <Link href="/peliculas" className="feature-card">
          <h2>Películas</h2>
          <p>Descubre los últimos estrenos y clásicos del cine.</p>
        </Link>
        <Link href="/calendario" className="feature-card">
          <h2>Calendario</h2>
          <p>No te pierdas nuestros próximos eventos y lanzamientos.</p>
        </Link>
        <Link href="/servicios" className="feature-card">
          <h2>Servicios</h2>
          <p>Conoce los servicios exclusivos que tenemos para ti.</p>
        </Link>
      </div>

      <SocialMediaButtons />
    </main>
  );
}
