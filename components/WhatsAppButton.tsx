import React from 'react';

type Props = {
  phone: string;
  message: string;
  label?: string;
  className?: string;
};

export default function WhatsAppButton({ phone, message, label = 'Enviar por WhatsApp', className = '' }: Props) {
  const href = `https://wa.me/${(phone || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
    </a>
  );
}
