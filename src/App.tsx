/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AuraBackground from './components/AuraBackground';
import HeroSection from './components/HeroSection';
import PainBridge from './components/PainBridge';
import OffersSection from './components/OffersSection';
import QuizSection from './components/QuizSection';
import GuaranteesSection from './components/GuaranteesSection';
import RetentionSection from './components/RetentionSection';
import { Sparkles, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [theme, setTheme] = useState<'night' | 'day'>('night');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to display the "Back to Top" fast anchor
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'night' ? 'day' : 'night'));
  };

  const scrollToQuiz = () => {
    const element = document.getElementById('quiz');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`relative min-h-screen transition-colors duration-1000 antialiased selection:bg-natural-accent selection:text-white ${
        theme === 'night' 
          ? 'bg-cosmic-bg text-zinc-100' 
          : 'bg-[#FDFBF7] text-natural-ink'
      }`}
      id="app-root-container"
    >
      {/* 1. Animated interactive background glowing aura blobs */}
      <AuraBackground theme={theme} />

      {/* 2. Floating Header and Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* 3. Main Landing Layout Sections */}
      <main className="relative z-10">
        
        {/* Block 1: Hello & Capture Attention */}
        <HeroSection theme={theme} scrollToQuiz={scrollToQuiz} />

        {/* Floating Divider Accent */}
        <div className="flex justify-center my-4 overflow-hidden py-2 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className={`w-[1px] h-20 bg-gradient-to-b ${
              theme === 'night' ? 'from-natural-accent/70 to-transparent' : 'from-natural-accent/60 to-transparent'
            }`}
          />
        </div>

        {/* Block 2: Emotional Bridge/Understanding Pain */}
        <PainBridge theme={theme} />

        {/* Floating Divider Accent */}
        <div className="flex justify-center my-4 overflow-hidden py-2 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className={`w-[1px] h-20 bg-gradient-to-b ${
              theme === 'night' ? 'from-[#B59F78]/70 to-transparent' : 'from-[#B59F78]/55 to-transparent'
            }`}
          />
        </div>

        {/* Block 3: Major direction offerings & products */}
        <OffersSection theme={theme} scrollToQuiz={scrollToQuiz} />

        {/* Floating Divider Accent */}
        <div className="flex justify-center my-4 overflow-hidden py-2 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className={`w-[1px] h-20 bg-gradient-to-b ${
              theme === 'night' ? 'from-[#D9C3A5]/70 to-transparent' : 'from-[#D9C3A5]/55 to-transparent'
            }`}
          />
        </div>

        {/* Block 4: Diagnostic Quiz Board */}
        <QuizSection theme={theme} />

        {/* Floating Divider Accent */}
        <div className="flex justify-center my-4 overflow-hidden py-2 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            className={`w-[1px] h-20 bg-gradient-to-b ${
              theme === 'night' ? 'from-natural-accent/60 to-transparent' : 'from-natural-accent/40 to-transparent'
            }`}
          />
        </div>

        {/* Block 5: Trust and comparative transformations */}
        <GuaranteesSection theme={theme} />

        {/* Block 6: Retention, social assets & footer */}
        <RetentionSection theme={theme} />

      </main>

      {/* Floating Sparkle Indicator of current mode */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2">
        <div className={`py-1.5 px-3.5 rounded-full text-[10px] font-mono font-medium tracking-widest uppercase cursor-default border flex items-center gap-1.5 shadow-md ${
          theme === 'night'
            ? 'bg-zinc-950/80 border-white/5 text-natural-accent'
            : 'bg-[#FDFBF7] border-natural-ink/10 text-natural-accent'
        }`}>
          <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
          {theme === 'night' ? 'Espacio Cósmico' : 'Tonos Cálidos'}
        </div>
      </div>

      {/* Slide UP Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-40 p-3.5 rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110 active:scale-95 border focus:outline-none ${
              theme === 'night'
                ? 'bg-zinc-950 border-white/10 text-natural-accent hover:text-white hover:bg-zinc-900'
                : 'bg-[#FDFBF7] border-[#1A1A1A]/10 text-natural-accent hover:text-black hover:bg-stone-50'
            }`}
            title="Volver arriba"
            id="scroll-to-top-btn"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
