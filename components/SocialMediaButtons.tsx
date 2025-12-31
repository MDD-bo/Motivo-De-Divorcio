import React from 'react';
import styles from './SocialMediaButtons.module.css';

// A general-purpose icon component for SVG
const Icon = ({ children, href, 'aria-label': ariaLabel }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={styles.socialIcon}>
    {children}
  </a>
);

// Specific icons
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

const SocialMediaButtons = () => {
  return (
    <div className={styles.socialContainer}>
      <h3 className={styles.followUs}>Síguenos</h3>
      <div className={styles.iconsWrapper}>
        <Icon href="https://www.tiktok.com/@USUARIO_TIKTOK" aria-label="TikTok">
          <TikTokIcon />
        </Icon>
        <Icon href="https://www.facebook.com/USUARIO_FACEBOOK" aria-label="Facebook">
          <FacebookIcon />
        </Icon>
        {/* Replace with your actual number */}
        <Icon href="https://wa.me/1234567890" aria-label="WhatsApp">
          <WhatsAppIcon />
        </Icon>
      </div>
    </div>
  );
};

export default SocialMediaButtons;