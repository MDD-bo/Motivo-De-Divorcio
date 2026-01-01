// components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  image?: string;
  status?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({ title, image, status, children, className }: CardProps) {
  return (
    <article className={className}>
      {image && <img src={image} alt={title} />}
      <header>
        <h3>{title}</h3>
        {status && <small>{status}</small>}
      </header>
      <div>{children}</div>
    </article>
  );
}
