import React from 'react';
import products from '../../data/productos.json';
import ProductCard from '../../components/ProductCard';
import { validateData, shouldValidateAtRuntime } from '../../lib/validate';

if (shouldValidateAtRuntime()) validateData('productos.json', products, { throwOnError: true });

export default function ProductosPage() {
  return (
    <section>
      <h1>Productos</h1>
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {products.map((p:any)=> (
          <div key={p.id} style={{width:220}}><ProductCard product={p} /></div>
        ))}
      </div>
    </section>
  );
}
