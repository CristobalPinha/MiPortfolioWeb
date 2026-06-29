import React, { useState, useEffect } from 'react';
import { Navigation } from '@shared/components/Navigation';
import { Hero } from '@features/hero/components/Hero';
import { About } from '@features/about/components/About';
import { Projects } from '@features/projects/components/Projects';
import { Experience } from '@features/experience/components/Experience';
import { Footer } from '@shared/components/Footer';
import './App.css';
import './index.css';

const FONT_SIZES = ['16px', '18px', '20px'];

function App() {
  const [isDark, setIsDark] = useState(true);
  const [fontScale, setFontScale] = useState(0);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.style.fontSize = FONT_SIZES[fontScale];
  }, [fontScale]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="w-full bg-background min-h-screen text-text-main transition-colors duration-300">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} fontScale={fontScale} setFontScale={setFontScale} />
      <Hero 
        onDemoClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} 
        onLearnMore={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
      />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;