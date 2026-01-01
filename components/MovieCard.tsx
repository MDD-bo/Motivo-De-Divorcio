// components/MovieCard.tsx
import Card from './Card';
import WhatsAppButton from './WhatsAppButton';
import { buildMovieMessage } from '../lib/whatsapp';
import type { Movie } from '../lib/types';


export default function MovieCard({ movie, phone }: { movie: Movie; phone: string }) {
  return (
    <Card title={movie.title} image={movie.image} status={movie.status}>
      <p>{movie.description}</p>
      <WhatsAppButton phone={phone} messageBuilder={() => buildMovieMessage(movie)}>
        Pedir por WhatsApp
      </WhatsAppButton>
    </Card>
  );
}
