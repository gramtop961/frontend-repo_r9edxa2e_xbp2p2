import { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar({ lang, setLang }) {
  const [open, setOpen] = useState(false);

  const t = {
    en: {
      portfolio: 'Portfolio',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    it: {
      portfolio: 'Portfolio',
      services: 'Servizi',
      about: 'Chi siamo',
      contact: 'Contatti',
    },
  }[lang];

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight text-neutral-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 text-white">S</span>
            <span>Socially</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-700">
            <a href="#portfolio" className="hover:text-neutral-900 transition-colors">{t.portfolio}</a>
            <a href="#services" className="hover:text-neutral-900 transition-colors">{t.services}</a>
            <a href="#about" className="hover:text-neutral-900 transition-colors">{t.about}</a>
            <a href="#contact" className="hover:text-neutral-900 transition-colors">{t.contact}</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="language switch"
              onClick={() => setLang(lang === 'en' ? 'it' : 'en')}
              className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50"
            >
              <Globe className="h-4 w-4" />
              <span>{lang === 'en' ? 'IT' : 'EN'}</span>
            </button>

            <button
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
              onClick={() => setOpen(!open)}
              aria-label="menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4 text-neutral-800 text-sm">
            <a href="#portfolio" onClick={() => setOpen(false)} className="hover:text-neutral-900">{t.portfolio}</a>
            <a href="#services" onClick={() => setOpen(false)} className="hover:text-neutral-900">{t.services}</a>
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-neutral-900">{t.about}</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-neutral-900">{t.contact}</a>
          </div>
        </div>
      )}
    </header>
  );
}
