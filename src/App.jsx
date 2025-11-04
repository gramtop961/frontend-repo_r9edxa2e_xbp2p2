import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroHome from './components/HeroHome.jsx';
import Pages from './components/Pages.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="scroll-smooth bg-white text-neutral-900">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <HeroHome lang={lang} />
        <Pages lang={lang} />
      </main>
      <Footer lang={lang} setLang={setLang} />
    </div>
  );
}

export default App;
