import '../styles/globals.css';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Catálogo - Sitio estático',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main style={{padding:16}}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

