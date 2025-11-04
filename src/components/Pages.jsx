import { BarChart3, Target, Users, Camera, PenTool, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Pages({ lang }) {
  const copy = {
    en: {
      portfolioTitle: 'Our Work in Action',
      portfolioIntro: 'We help brands stand out through creative storytelling and measurable strategy.',
      portfolioCTA: 'Want to be our next success story? Get in touch.',
      servicesTitle: 'What We Do',
      servicesSub: 'From idea to measurable growth.',
      services: [
        { title: 'Social Strategy', desc: 'Audience research, positioning, editorial planning.', icon: Target },
        { title: 'Content Creation', desc: 'Photography, video, design, storytelling.', icon: Camera },
        { title: 'Advertising & Paid Media', desc: 'Targeted campaigns that convert.', icon: BarChart3 },
        { title: 'Community Management', desc: 'Comments, messages, engagement.', icon: Users },
        { title: 'Reporting & Optimization', desc: 'Insights and monthly KPI dashboards.', icon: PenTool },
      ],
      servicesCTA: 'Find the best plan for your business.',
      aboutTitle: 'Who We Are',
      aboutTag: 'Your social media partners for real results.',
      story: 'Founded in Milan by Giulia Rossi in 2019, Socially combines creativity, strategy and data to help businesses grow online.',
      team: [
        { name: 'Giulia Rossi', role: 'Founder & Strategist', quote: 'Every post should serve a business goal.' },
        { name: 'Marco Bianchi', role: 'Content Director', quote: 'Stories convert when they are true and simple.' },
        { name: 'Sara Verdi', role: 'Paid Media Lead', quote: 'Great targeting starts with understanding people.' },
      ],
      values: ['Personalization', 'Transparency', 'Partnership'],
      aboutCTA: "Let's connect.",
      contactTitle: "Let's Talk About Your Project",
      contactSub: "Tell us about your goals — we’ll reply within 24 hours.",
      form: { name: 'Name', email: 'Email', phone: 'Phone', message: 'Message', privacy: 'I accept the privacy policy', send: 'Send Message' },
      contactBlock: { address: 'Address', hours: 'Business hours', monfri: 'Mon–Fri 9:00–18:00' },
    },
    it: {
      portfolioTitle: 'I nostri lavori in azione',
      portfolioIntro: 'Aiutiamo i brand a distinguersi con storytelling creativo e strategia misurabile.',
      portfolioCTA: 'Vuoi essere il prossimo caso di successo? Contattaci.',
      servicesTitle: 'Cosa facciamo',
      servicesSub: 'Dall’idea alla crescita reale.',
      services: [
        { title: 'Social Strategy', desc: 'Ricerca audience, posizionamento, piano editoriale.', icon: Target },
        { title: 'Content Creation', desc: 'Foto, video, design, storytelling.', icon: Camera },
        { title: 'Advertising & Paid Media', desc: 'Campagne mirate che convertono.', icon: BarChart3 },
        { title: 'Community Management', desc: 'Commenti, messaggi, engagement.', icon: Users },
        { title: 'Reporting & Optimization', desc: 'Insight e dashboard KPI mensili.', icon: PenTool },
      ],
      servicesCTA: 'Scopri il piano migliore per la tua attività.',
      aboutTitle: 'Chi siamo',
      aboutTag: 'Il tuo partner social orientato ai risultati.',
      story: 'Fondata a Milano da Giulia Rossi nel 2019, Socially unisce creatività, strategia e dati per far crescere le aziende online.',
      team: [
        { name: 'Giulia Rossi', role: 'Founder & Strategist', quote: 'Ogni contenuto deve avere un obiettivo di business.' },
        { name: 'Marco Bianchi', role: 'Content Director', quote: 'Le storie convertono quando sono vere e semplici.' },
        { name: 'Sara Verdi', role: 'Paid Media Lead', quote: 'Un grande targeting parte dalla comprensione delle persone.' },
      ],
      values: ['Personalizzazione', 'Trasparenza', 'Partnership'],
      aboutCTA: 'Conosciamoci meglio.',
      contactTitle: 'Parliamo del tuo progetto',
      contactSub: 'Raccontaci i tuoi obiettivi — ti risponderemo entro 24 ore.',
      form: { name: 'Nome', email: 'Email', phone: 'Telefono', message: 'Messaggio', privacy: 'Accetto la privacy policy', send: 'Invia Messaggio' },
      contactBlock: { address: 'Indirizzo', hours: 'Orari', monfri: 'Lun–Ven 9:00–18:00' },
    },
  }[lang];

  const cases = [
    { client: 'Cafe Luna', industry: 'Hospitality', challenge: 'Low visibility and weekday footfall', solution: 'UGC-driven content and local ads', result: '+45% engagement' },
    { client: 'Fit&Go', industry: 'Fitness', challenge: 'Lead quality for memberships', solution: 'Lead gen with reels and LP', result: '+320 leads' },
    { client: 'Nordico Home', industry: 'E-commerce', challenge: 'High CPA on remarketing', solution: 'Creative testing + catalog ads', result: '-28% CPA' },
    { client: 'Bloom Beauty', industry: 'Beauty', challenge: 'Inconsistent posting', solution: 'Editorial plan + production', result: '+1,200 followers' },
    { client: 'TechNest', industry: 'SaaS', challenge: 'Weak narrative', solution: 'Positioning + founders content', result: '+35% demo requests' },
    { client: 'GreenWheel', industry: 'Mobility', challenge: 'Low app activations', solution: 'Performance creatives + UAC', result: '+22% activations' },
  ];

  function SectionTitle({ kicker, title, sub }) {
    return (
      <div className="text-center max-w-2xl mx-auto">
        {kicker && <p className="text-xs uppercase tracking-widest text-neutral-500">{kicker}</p>}
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-neutral-900">{title}</h2>
        {sub && <p className="mt-2 text-neutral-600">{sub}</p>}
      </div>
    );
  }

  return (
    <div className="mt-24">{/* spacing anchor */}
      {/* Portfolio */}
      <section id="portfolio" className="scroll-mt-24 py-16">
        <SectionTitle title={copy.portfolioTitle} sub={copy.portfolioIntro} />
        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div key={c.client} className="rounded-xl border border-neutral-200 p-5 bg-white hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-neutral-900">{c.client}</h3>
                  <span className="text-xs text-neutral-500">{c.industry}</span>
                </div>
                <div className="mt-3 text-sm text-neutral-700 space-y-1">
                  <p><span className="font-medium">Challenge:</span> {c.challenge}</p>
                  <p><span className="font-medium">Solution:</span> {c.solution}</p>
                  <p><span className="font-medium">Result:</span> {c.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#contact" className="inline-block rounded-md border border-neutral-300 px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50">{copy.portfolioCTA}</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 py-16 bg-neutral-50">
        <SectionTitle title={copy.servicesTitle} sub={copy.servicesSub} />
        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.services.map((s) => (
              <div key={s.title} className="rounded-xl border border-neutral-200 bg-white p-6">
                <s.icon className="h-6 w-6 text-neutral-900" />
                <h3 className="mt-4 font-semibold text-neutral-900">{s.title}</h3>
                <p className="mt-1 text-sm text-neutral-700">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#contact" className="inline-block rounded-md bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800">{copy.servicesCTA}</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-16">
        <SectionTitle title={copy.aboutTitle} sub={copy.aboutTag} />
        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <p className="text-neutral-700 leading-relaxed">{copy.story}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {copy.team.map((m) => (
              <div key={m.name} className="rounded-xl border border-neutral-200 p-5 bg-white">
                <div className="h-20 w-20 rounded-full bg-neutral-200 mx-auto" aria-hidden />
                <h4 className="mt-4 text-center font-semibold text-neutral-900">{m.name}</h4>
                <p className="text-center text-sm text-neutral-600">{m.role}</p>
                <p className="mt-2 text-xs text-neutral-600 italic text-center">“{m.quote}”</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="#contact" className="inline-block rounded-md border border-neutral-300 px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50">{copy.aboutCTA}</a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 py-16 bg-neutral-50">
        <SectionTitle title={copy.contactTitle} sub={copy.contactSub} />
        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <form
            onSubmit={(e) => { e.preventDefault(); alert(lang === 'en' ? 'Thank you! We will get back to you soon.' : 'Grazie! Ti ricontatteremo a breve.'); }}
            className="rounded-xl border border-neutral-200 bg-white p-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-neutral-700">{copy.form.name}</label>
                <input required type="text" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-300" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700">{copy.form.email}</label>
                <input required type="email" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-300" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-neutral-700">{copy.form.phone}</label>
                <input type="tel" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-300" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-neutral-700">{copy.form.message}</label>
                <textarea required rows={5} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-300" />
              </div>
              <label className="sm:col-span-2 inline-flex items-start gap-2 text-sm text-neutral-700">
                <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-neutral-300" />
                <span>{copy.form.privacy}</span>
              </label>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800">
              {copy.form.send}
            </button>
          </form>

          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <ul className="space-y-4 text-neutral-800">
              <li className="flex items-start gap-3"><MapPin className="h-5 w-5" /><div><p className="font-medium">{copy.contactBlock.address}</p><p>Via Torino 12, 20123 Milano</p></div></li>
              <li className="flex items-start gap-3"><Phone className="h-5 w-5" /><div><p className="font-medium">Phone</p><p>+39 02 1234 5678</p></div></li>
              <li className="flex items-start gap-3"><Mail className="h-5 w-5" /><div><p className="font-medium">Email</p><p>hello@socially.agency</p></div></li>
              <li className="flex items-start gap-3"><Clock className="h-5 w-5" /><div><p className="font-medium">{copy.contactBlock.hours}</p><p>{copy.contactBlock.monfri}</p></div></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
