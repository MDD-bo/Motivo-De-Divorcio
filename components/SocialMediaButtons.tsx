import React from 'react';
import styles from './SocialMediaButtons.module.css';

// --- 5. Dependency Inversion Principle (DIP) ---
// Definimos interfaces para desacoplar los datos de la UI.
interface ISocialLink {
  id: string;
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface ILocation {
  id: string;
  name: string;
  mapUrl: string;
}

// --- Recursos (Iconos) ---
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8.5v4.5a4 4 0 0 1-4 4H8.5" />
    <path d="M8 17V5a3 3 0 0 1 3-3h1" />
    <path d="M12.5 4A3.5 3.5 0 1 1 9 7.5V17" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const MapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
    <line x1="8" y1="2" x2="8" y2="18" />
    <line x1="16" y1="6" x2="16" y2="22" />
  </svg>
);

// --- 1. Single Responsibility Principle (SRP) ---

// Componente para botón de red social
const SocialButton: React.FC<Omit<ISocialLink, 'id'>> = ({ href, label, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={styles.socialIcon}>
    {icon}
  </a>
);

// Componente para tarjeta de ubicación (Croquis)
// --- 4. Interface Segregation Principle (ISP) ---
// Solo recibe lo necesario (name, mapUrl)
const LocationCard: React.FC<Omit<ILocation, 'id'>> = ({ name, mapUrl }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
    <div style={{ width: '24px', height: '24px' }}>
      <MapIcon />
    </div>
    <span style={{ fontWeight: 'bold' }}>{name}</span>
    <a href={mapUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', textDecoration: 'underline' }}>
      Ver Croquis
    </a>
  </div>
);

// --- 2. Open / Closed Principle (OCP) ---
// Configuración de datos externa

const socialLinks: ISocialLink[] = [
  {
    id: 'tiktok',
    href: "https://www.tiktok.com/@motivo_de_divorcio?is_from_webapp=1&sender_device=pc",
    label: "TikTok",
    icon: <TikTokIcon />
  },
  {
    id: 'facebook',
    href: "https://www.facebook.com/people/Motivo-De-Divorcio-MDD/61585689839703/?sk=about",
    label: "Facebook",
    icon: <FacebookIcon />
  },
  {
    id: 'whatsapp',
    href: "https://wa.me/60963839",
    label: "WhatsApp",
    icon: <WhatsAppIcon />
  }
];

const locationLinks: ILocation[] = [
  { id: 'warnes', name: 'Warnes', mapUrl: 'https://goo.gl/maps/warnes' },
  { id: 'mineros', name: 'Mineros', mapUrl: 'https://goo.gl/maps/mineros' },
  { id: 'montero', name: 'Montero', mapUrl: 'https://goo.gl/maps/montero' },
];

const SocialMediaButtons = () => {
  return (
    <div className={styles.socialContainer} style={{ flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 className={styles.followUs}>Síguenos</h3>
        <div className={styles.iconsWrapper}>
          {socialLinks.map((link) => (
            <SocialButton key={link.id} href={link.href} label={link.label} icon={link.icon} />
          ))}
        </div>
      </div>

      <div>
        <h3 className={styles.followUs}>Nuestras Sucursales</h3>
        <div className={styles.iconsWrapper}>
          {locationLinks.map((loc) => (
            <LocationCard key={loc.id} name={loc.name} mapUrl={loc.mapUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaButtons;