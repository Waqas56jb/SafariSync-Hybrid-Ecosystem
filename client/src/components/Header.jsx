import { useEffect, useState } from 'react';
import {
  Sailboat,
  LogIn,
  CalendarCheck,
  Menu,
} from 'lucide-react';

export default function Header({ onOpenAuth }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState('EN');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const setLanguage = (code) => {
    setLang(code);
    if (code === 'ES') {
      alert('Demo: en producción, todo el contenido cambia a español al instante.');
    }
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <div className="container nav">
          <a href="#top" className="logo" aria-label="Vista Azul Safaris">
            <span className="logo-mark">
              <Sailboat />
            </span>
            <span>
              <b>Vista Azul</b>
              <small>Safaris</small>
            </span>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#tours">Tours</a>
            </li>
            <li>
              <a href="#gallery">Live Gallery</a>
            </li>
            <li>
              <a href="#how">How it works</a>
            </li>
            <li>
              <a href="#bot">Concierge</a>
            </li>
          </ul>
          <div className="nav-right">
            <div className="lang" role="group" aria-label="Language">
              <button
                type="button"
                className={lang === 'EN' ? 'on' : ''}
                onClick={() => setLanguage('EN')}
              >
                EN
              </button>
              <button
                type="button"
                className={lang === 'ES' ? 'on' : ''}
                onClick={() => setLanguage('ES')}
              >
                ES
              </button>
            </div>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => onOpenAuth('login')}
            >
              <LogIn />
              Log in
            </button>
            <button
              type="button"
              className="btn btn-gold"
              onClick={() => onOpenAuth('signup')}
            >
              <CalendarCheck />
              Book now
            </button>
            <button
              type="button"
              className="burger"
              aria-label="Menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>
      <nav className={`mobile-menu${mobileOpen ? ' open' : ''}`} id="mm">
        <a href="#tours" onClick={closeMobile}>
          Tours
        </a>
        <a href="#gallery" onClick={closeMobile}>
          Live Gallery
        </a>
        <a href="#how" onClick={closeMobile}>
          How it works
        </a>
        <a href="#bot" onClick={closeMobile}>
          Concierge
        </a>
        <button
          type="button"
          className="btn btn-gold"
          onClick={() => {
            closeMobile();
            onOpenAuth('login');
          }}
        >
          Log in / Sign up
        </button>
      </nav>
    </>
  );
}
