import React from 'react';
import styles from './Locations.module.css';

// DIP: Dependency Inversion Principle
// Definimos una interfaz (abstracción) para los datos. La UI depende de esto, no de los datos concretos.
export interface LocationData {
  id: string;
  name: string;
  address: string;
  mapUrl: string;
}

// ISP: Interface Segregation Principle
// Definimos props específicas para la tarjeta. No obligamos al componente a recibir todo el objeto si no es necesario.
interface LocationCardProps {
  name: string;
  address: string;
  mapUrl: string;
}

// SRP: Single Responsibility Principle
// Este componente tiene una única responsabilidad: Renderizar la UI de una tarjeta de ubicación.
const LocationCard: React.FC<LocationCardProps> = ({ name, address, mapUrl }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.cardAddress}>{address}</p>
      <a 
        href={mapUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.mapButton}
        aria-label={`Ver croquis de ${name}`}
      >
        Ver Croquis
      </a>
    </div>
  );
};

// OCP: Open/Closed Principle
// La configuración de datos está separada. Podemos extender (agregar más sedes) sin modificar el componente `Locations`.
const locationsData: LocationData[] = [
  {
    id: 'warnes',
    name: 'Sede Warnes',
    address: 'Av. Principal, Warnes',
    mapUrl: 'https://goo.gl/maps/placeholderWarnes' // Reemplazar con el enlace real
  },
  {
    id: 'mineros',
    name: 'Sede Mineros',
    address: 'Plaza Principal, Mineros',
    mapUrl: 'https://goo.gl/maps/placeholderMineros' // Reemplazar con el enlace real
  },
  {
    id: 'montero',
    name: 'Sede Montero',
    address: 'Calle Central, Montero',
    mapUrl: 'https://goo.gl/maps/placeholderMontero' // Reemplazar con el enlace real
  }
];

// SRP: Este componente contenedor solo se encarga de la estructura y el listado.
const Locations: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Nuestras Sedes</h2>
      <div className={styles.grid}>
        {locationsData.map((location) => (
          <LocationCard 
            key={location.id}
            name={location.name}
            address={location.address}
            mapUrl={location.mapUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Locations;