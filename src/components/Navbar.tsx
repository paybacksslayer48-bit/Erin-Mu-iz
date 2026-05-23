/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { Moon, Sun, Sparkles, Menu, X, Heart, Compass, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  theme: 'night' | 'day';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'about', label: 'Desacelerar', icon: Compass },
    { id: 'offers', label: 'Propuestas', icon: Sparkles },
    { id: 'quiz', label: 'Test 1:1', icon: Heart },
    { id: 'guarantees', label: 'Claridad', icon: CheckCircle },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? theme === 'night'
              ? 'bg-cosmic-bg/75 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/15'
              : 'bg-natural-cream/75 backdrop-blur-md border-b border-natural-ink/5 py-3 shadow-md shadow-natural-ink/3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className={`p-1.5 rounded-full transition-colors ${
                  theme === 'night' ? 'bg-[#292723] text-natural-accent' : 'bg-natural-accent/10 text-natural-accent'
                }`}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-natural-accent"></span>
              </span>
            </div>
            <div className="text-left">
              <span 
                className={`font-serif text-lg md:text-xl font-medium tracking-wide block transition-colors leading-tight ${
                  theme === 'night' ? 'text-white' : 'text-natural-ink'
                }`}
              >
                Erin Muñiz
              </span>
              <span className="block text-[9px] font-sans uppercase tracking-widest text-natural-accent font-medium">
                Mentor de Liberación Emocional
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs uppercase tracking-widest font-semibold transition-colors hover:text-natural-accent flex items-center gap-1.5 cursor-pointer relative group py-1.5 focus:outline-none ${
                    theme === 'night' ? 'text-zinc-300' : 'text-natural-ink/70'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  <Icon className="w-3.5 h-3.5 opacity-70 group-hover:scale-110 transition-transform" />
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-natural-accent transition-all duration-300 group-hover:w-full" />
                </button>
              );
            })}
          </nav>

          {/* Theme Switcher & Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all duration-500 relative overflow-hidden cursor-pointer group focus:outline-none ${
                theme === 'night'
                  ? 'bg-natural-ink/50 border border-white/10 text-natural-accent hover:bg-neutral-800 hover:scale-105'
                  : 'bg-stone-200/40 border border-[#1A1A1A]/10 text-natural-accent hover:bg-stone-200/70 hover:scale-105'
              }`}
              title={theme === 'night' ? 'Cambiar a Luz Matutina' : 'Cambiar a Cosmos Nocturno'}
              id="theme-toggle-btn"
            >
              <motion.div
                key={theme}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex items-center justify-center"
              >
                {theme === 'night' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.div>
            </button>

            {/* Core CTA */}
            <button
              onClick={() => scrollToSection('quiz')}
              className={`hidden sm:inline-flex items-center gap-2 py-2.5 px-5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-sm focus:outline-none cursor-pointer ${
                theme === 'night'
                  ? 'bg-natural-accent hover:bg-natural-accent-hover text-white'
                  : 'bg-natural-ink hover:bg-natural-ink/90 text-white'
              }`}
              id="header-cta-btn"
            >
              <Heart className="w-3.5 h-3.5 animate-pulse" />
              Iniciar Diagnóstico
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none ${
                theme === 'night' ? 'text-zinc-400 hover:text-white' : 'text-natural-ink hover:text-black'
              }`}
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="h-[2px] bg-gradient-to-r from-natural-accent via-[#B59F78] to-[#EAD0B3] origin-left"
          style={{ scaleX }}
        />
      </header>

      {/* Mobile Drawer menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, x: 0, pointerEvents: 'auto' },
          closed: { opacity: 0, x: '100%', pointerEvents: 'none' },
        }}
        transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
        className={`fixed inset-0 z-40 md:hidden flex flex-col justify-center px-8 ${
          theme === 'night' ? 'bg-cosmic-bg/95 backdrop-blur-xl' : 'bg-[#FDFBF7]/95 backdrop-blur-xl'
        }`}
      >
        <nav className="flex flex-col gap-6 text-center">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xl font-serif font-medium py-3 border-b transition-colors flex items-center justify-center gap-3 ${
                  theme === 'night'
                    ? 'text-zinc-200 border-white/5 hover:text-natural-accent'
                    : 'text-natural-ink border-black/5 hover:text-natural-accent'
                }`}
                id={`mobile-nav-item-${item.id}`}
              >
                <Icon className="w-5 h-5 opacity-70" />
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => scrollToSection('quiz')}
            className={`mt-6 py-4 px-6 rounded-full font-semibold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105 cursor-pointer ${
              theme === 'night'
                ? 'bg-natural-accent text-white'
                : 'bg-natural-ink text-white'
            }`}
            id="mobile-drawer-cta"
          >
            <Heart className="w-4 h-4 animate-pulse" />
            Agendar Sesión
          </button>

          {/* Theme Indicator in Mobile menu */}
          <div className="mt-8 flex justify-center items-center gap-2 text-xs">
            <span className={theme === 'night' ? 'text-natural-accent font-semibold' : 'text-zinc-400'}>
              Modo Nocturno
            </span>
            <div
              onClick={toggleTheme}
              className={`w-12 h-6 rounded-full p-0.5 cursor-pointer flex transition-colors duration-300 ${
                theme === 'night' ? 'bg-[#292723] justify-end' : 'bg-stone-300 justify-start'
              }`}
            >
              <div className="w-5 h-5 bg-white rounded-full shadow-md" />
            </div>
            <span className={theme === 'day' ? 'text-natural-accent font-semibold' : 'text-zinc-400'}>
              Modo Matutino
            </span>
          </div>
        </nav>
      </motion.div>
    </>
  );
}
