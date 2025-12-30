import React from 'react';
import Link from 'next/link';
import { Product } from '../lib/types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card">
      <Link href={`/productos/${product.slug}`}>
        <>
          <img src={product.imagenes?.[0] || '/img/placeholder.png'} alt={product.nombre} style={{width:200,height:120,objectFit:'cover'}}/>
          <h3>{product.nombre}</h3>
        </>
      </Link>
      <p>{product.precio}</p>
      <p>{product.estado}</p>
    </article>
  );
}

