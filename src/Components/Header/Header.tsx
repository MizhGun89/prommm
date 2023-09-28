import { useState, useEffect, useRef, FC } from 'react';
import styles from './header.module.css';
import { CVBtn } from './CVBtn';

import avatar from '../../assets/img/HHAva.webp';
import socialLinkMail from '../../assets/img/social_email.svg';
import socialLinkHH from '../../assets/img/social_hh.png';
import socialLinkGH from '../../assets/img/social_github.svg';
import socialLinkTG from '../../assets/img/social_telegram.svg';
import socialLinkWA from '../../assets/img/social_whatsapp.svg';

export const Header: FC = () => {
  const [burgerActive, setBurgerActive] = useState<boolean>(false);
  const [menuOverlay, setMenuOverlay] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (): void => {
    setBurgerActive(!burgerActive);
    setMenuOverlay(!menuOverlay);
  };

  useEffect(() => {
    const handleOutsideClick = (event: Event): void => {
      if (
        !(event.target instanceof Node) ||
        !menuRef.current ||
        !menuRef.current.contains(event.target)
      ) {
        return;
      }
      setBurgerActive(false);
      setMenuOverlay(false);
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <header className={styles.header}>
      <img className={styles.avatar} src={avatar} alt="avatar" />
      <div
        className={`${styles.burger} ${burgerActive ? styles.close : ''}`}
        onClick={handleClick}
      >
        <span></span>
      </div>
      <div
        className={`${styles.socialBox} ${menuOverlay ? styles.overlay : ''}`}
        ref={menuRef}
      >
        <img className={styles.socialLink} src={socialLinkTG} alt="Telegram" />
        <img className={styles.socialLink} src={socialLinkGH} alt="GitHub" />
        <img className={styles.socialLink} src={socialLinkWA} alt="WhatsApp" />
        <img
          className={styles.socialLink}
          src={socialLinkHH}
          alt="HeadHunter"
        />
        <img className={styles.socialLink} src={socialLinkMail} alt="Email" />
      </div>
      <CVBtn />
    </header>
  );
};
