import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href="/">MDD</Link>
        </h1>
        <nav className={styles.nav}>
          <Link href="/">Inicio</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/peliculas">Películas</Link>
          <Link href="/calendario">Calendario</Link>
          <Link href="/servicios">Servicios</Link>
        </nav>
      </div>
    </header>
  );
}