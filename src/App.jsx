import React, { useState, useEffect } from 'react';
import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/features/Hero';
import { About } from './components/features/About';
import { Projects } from './components/features/Projects';
import { Experience } from './components/features/Experience';
import { Footer } from './components/layout/Footer';
import './index.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="w-full bg-background min-h-screen text-text-main transition-colors duration-300">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
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