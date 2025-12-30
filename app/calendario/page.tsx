import React from 'react';
import calendario from '../../data/calendario.json';
import CalendarWeek from '../../components/CalendarWeek';
import { validateData, shouldValidateAtRuntime } from '../../lib/validate';

if (shouldValidateAtRuntime()) validateData('calendario.json', calendario, { throwOnError: true });

export default function CalendarioPage() {
  const PHONE_NUMBER = process.env.PHONE_NUMBER || '59171234567';
  return (
    <section>
      <h1>Calendario semanal</h1>
      <div>
        {calendario.map((w:any)=> (
          <CalendarWeek key={w.weekStart} week={w} phone={PHONE_NUMBER} />
        ))}
      </div>
    </section>
  );
}
