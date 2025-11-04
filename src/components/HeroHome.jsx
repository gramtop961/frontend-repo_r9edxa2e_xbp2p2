import Spline from '@splinetool/react-spline';
import { Rocket, CheckCircle2 } from 'lucide-react';

export default function HeroHome({ lang }) {
  const t = {
    en: {
      headline: 'We turn your social media into a growth engine.',
      sub: 'Strategy, content and campaigns that actually sell.',
      cta: 'Book a free consultation',
      benefits: [
        'Increase your sales through engagement',
        'Tailor-made strategy, no templates',
        'Complete management: content, ads, analytics',
      ],
      servicesPreview: 'What we can do for you',
      miniPortfolio: 'Featured case studies',
    },
    it: {
      headline: 'Trasformiamo i tuoi social in uno strumento di crescita.',
      sub: 'Strategie, contenuti e campagne che generano risultati.',
      cta: 'Richiedi una consulenza gratuita',
      benefits: [
        'Aumenta le vendite grazie al coinvolgimento',
        'Strategia su misura, niente template',
        'Gestione completa: contenuti, adv, analytics',
      ],
      servicesPreview: 'Cosa possiamo fare per te',
      miniPortfolio: 'Casi studio in evidenza',
    },
  }[lang];

  const caseStudies = [
    { client: 'Cafe Luna', result: '+45% engagement' },
    { client: 'Fit&Go', result: '+1,200 followers' },
    { client: 'Nordico Home', result: '+35% sales' },
  ];

  return (
    <section id="home" className="relative pt-24">
      <div className="h-[520px] w-full">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white"></div>
      </div>

      <div className="mx-auto -mt-40 max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900">{t.headline}</h1>
            <p className="mt-4 text-lg text-neutral-700">{t.sub}</p>

            <ul className="mt-6 space-y-3">
              {t.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-800">
                  <CheckCircle2 className="h-5 w-5 text-neutral-900 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-white hover:bg-neutral-800">
              <Rocket className="h-4 w-4" />
              <span>{t.cta}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-neutral-200 p-5 bg-white/70">
              <p className="text-xs uppercase tracking-wide text-neutral-500">{t.servicesPreview}</p>
              <ul className="mt-3 text-sm text-neutral-800 space-y-2">
                <li>• Social Strategy</li>
                <li>• Content Creation</li>
                <li>• Paid Media</li>
                <li>• Community</li>
                <li>• Reporting</li>
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-200 p-5 bg-white/70">
              <p className="text-xs uppercase tracking-wide text-neutral-500">{t.miniPortfolio}</p>
              <div className="mt-3 space-y-3">
                {caseStudies.map((c) => (
                  <div key={c.client} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-neutral-900">{c.client}</span>
                    <span className="text-neutral-600">{c.result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
