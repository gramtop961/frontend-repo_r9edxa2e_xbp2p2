import { Instagram, Facebook, Linkedin, Globe } from 'lucide-react';

export default function Footer({ lang, setLang }) {
  const t = {
    en: {
      quick: 'Quick links',
      portfolio: 'Portfolio',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      rights: 'All rights reserved.'
    },
    it: {
      quick: 'Link rapidi',
      portfolio: 'Portfolio',
      services: 'Servizi',
      about: 'Chi siamo',
      contact: 'Contatti',
      rights: 'Tutti i diritti riservati.'
    },
  }[lang];

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-semibold text-neutral-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 text-white">S</span>
            <span>Socially</span>
          </div>
          <p className="mt-3 text-sm text-neutral-600">Social media partners for measurable growth.</p>
          <div className="mt-4 flex items-center gap-4 text-neutral-700">
            <a href="#" aria-label="Instagram" className="hover:text-neutral-900"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-neutral-900"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-neutral-900"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-neutral-900">{t.quick}</p>
          <nav className="mt-3 grid grid-cols-2 gap-2 text-sm text-neutral-700">
            <a href="#portfolio" className="hover:text-neutral-900">{t.portfolio}</a>
            <a href="#services" className="hover:text-neutral-900">{t.services}</a>
            <a href="#about" className="hover:text-neutral-900">{t.about}</a>
            <a href="#contact" className="hover:text-neutral-900">{t.contact}</a>
          </nav>
        </div>

        <div className="flex md:justify-end">
          <button
            onClick={() => setLang(lang === 'en' ? 'it' : 'en')}
            className="h-10 inline-flex items-center gap-2 rounded-md border border-neutral-300 px-3 text-sm text-neutral-700 hover:bg-neutral-50"
          >
            <Globe className="h-4 w-4" />
            <span>{lang === 'en' ? 'Italiano' : 'English'}</span>
          </button>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Socially. {t.rights}</div>
    </footer>
  );
}
