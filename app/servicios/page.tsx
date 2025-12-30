import React from 'react';
import services from '../../data/servicios.json';
import WhatsAppButton from '../../components/WhatsAppButton';
import { buildServiceMessage } from '../../lib/whatsapp';
import { validateData, shouldValidateAtRuntime } from '../../lib/validate';

if (shouldValidateAtRuntime()) validateData('servicios.json', services, { throwOnError: true });

export default function ServiciosPage() {
  const PHONE_NUMBER = process.env.PHONE_NUMBER || '59171234567';
  return (
    <section>
      <h1>Servicios</h1>
      <div>
        {services.map((s:any)=> (
          <div key={s.id} style={{border:'1px solid #eee',padding:8,margin:6}}>
            <h3>{s.titulo}</h3>
            <p>{s.descripcion}</p>
            <p>{s.precio_base}</p>
            <WhatsAppButton phone={PHONE_NUMBER} message={buildServiceMessage({id:s.id,titulo:s.titulo,precio_base:s.precio_base})} label="Solicitar por WhatsApp" />
          </div>
        ))}
      </div>
    </section>
  );
}
