/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Users, Flame, RefreshCw, Heart } from 'lucide-react';

interface HeroSectionProps {
  theme: 'night' | 'day';
  scrollToQuiz: () => void;
}

export default function HeroSection({ theme, scrollToQuiz }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden z-10 w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
        
        {/* Left Column: Text & Attention Hook (7 columns on large screens) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
          {/* Status Label with floating elements */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 self-start mb-6"
          >
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-widest ${
              theme === 'night' 
                ? 'bg-natural-accent/15 text-natural-accent border border-natural-accent/20' 
                : 'bg-natural-accent/10 text-natural-accent border border-natural-accent/20'
            }`}>
              ✨ Espiritualidad & Sanación Energética
            </span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-natural-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-natural-accent"></span>
            </span>
          </motion.div>

          {/* Expert Name */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`font-serif text-3xl md:text-4xl font-light leading-none tracking-wide mb-3 ${
              theme === 'night' ? 'text-zinc-200' : 'text-natural-ink'
            }`}
          >
            Erin Muñiz <span className="font-serif italic font-normal text-natural-accent">/ Guía Espiritual</span>
          </motion.h2>

          {/* Core Mentor Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-[11px] font-sans tracking-widest uppercase mb-6 text-natural-accent font-semibold"
          >
            Sanación Energética • Liberación Emocional • Lectura de Oráculo Angelical
          </motion.p>

          {/* Huge Main Slogan Hook */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.3 }}
            className={`font-serif text-3xl md:text-5xl lg:text-[45px] font-light leading-snug tracking-tight mb-6 ${
              theme === 'night' ? 'text-white' : 'text-natural-ink'
            }`}
          >
            Libera el dolor del pasado y <span className="font-serif italic block font-light text-gradient-cosmic">despierta el poder de tu alma</span>
          </motion.h1>

          {/* Explanatory, Humanizing text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl ${
              theme === 'night' ? 'text-zinc-300' : 'text-natural-ink/80'
            }`}
          >
            Si los hilos del destino te han traído aquí, no es una coincidencia. Este es un espacio seguro y sagrado para pausar, disolver la ansiedad profunda, escuchar la voz de tus ángeles y reclamar la fuerza de tu linaje ancestral. Eres bienvenido.
          </motion.p>

          {/* Social Proof metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`flex flex-wrap items-center gap-4 p-4 rounded-2xl border ${
              theme === 'night' 
                ? 'bg-zinc-950/60 border-white/5 shadow-inner' 
                : 'bg-white/94 border-natural-ink/10 shadow-sm'
            }`}
          >
            <div className="flex -space-x-2.5">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full ring-2 flex items-center justify-center overflow-hidden capitalize text-xs font-semibold ${
                    theme === 'night' 
                      ? 'ring-zinc-950 bg-natural-accent text-white' 
                      : 'ring-natural-cream bg-[#8C7851]/10 border border-[#8C7851]/10 text-natural-accent'
                  }`}
                >
                  {i === 4 ? '🕊️' : `S${i}`}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className={`text-sm font-semibold flex items-center gap-1.5 ${
                theme === 'night' ? 'text-white' : 'text-natural-ink'
              }`}>
                🧿 Más de 317,000 Almas
              </p>
              <p className={`text-xs ${
                theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/65'
              }`}>
                conectadas en nuestro círculo sagrado de luz y crecimiento espiritual.
              </p>
            </div>
          </motion.div>

          {/* Action Button & Trust label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in"
          >
            <button
              onClick={scrollToQuiz}
              className={`px-8 py-4 rounded-full font-semibold uppercase text-xs tracking-wider cursor-pointer shadow-md hover:shadow-lg hover:scale-105 transition-all w-full sm:w-auto text-center ${
                theme === 'night'
                  ? 'bg-natural-accent text-white shadow-natural-accent/15 hover:bg-natural-accent-hover'
                  : 'bg-natural-ink text-white shadow-natural-ink/10 hover:bg-natural-ink/90'
              }`}
              id="hero-cta-quiz-btn"
            >
              Iniciar mi alineación 1:1
            </button>
            <p className="text-xs text-zinc-500 italic flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-natural-accent animate-pulse" /> Haz click para explorar el test diagnóstico y evaluar tu campo áurico
            </p>
          </motion.div>
        </div>

        {/* Right Column: Placeholder description card (No human girls or figures) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2 relative">
          
          {/* MAIN PORTRAIT CONTAINER & GLOWING FRAME */}
          <div className="relative w-full aspect-[3/4] max-w-[340px] md:max-w-[400px]">
            
            {/* Animated Rotating Aura behind portrait */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className={`absolute inset-[-15px] rounded-[38px] filter blur-sm transition-colors duration-1000 ${
                theme === 'night'
                  ? 'bg-gradient-to-tr from-natural-accent via-[#B59F78] to-[#EAD0B3] opacity-40'
                  : 'bg-gradient-to-tr from-natural-accent/20 via-[#B59F78]/25 to-[#D9C3A5]/20 opacity-50'
              }`}
            />

            {/* Portal Artwork Container with elegant message instead of image */}
            <div className={`w-full h-full rounded-[30px] p-8 overflow-hidden border border-white/20 shadow-2xl relative z-20 flex flex-col justify-between text-left ${
              theme === 'night'
                ? 'bg-zinc-950/90 border-white/10 text-white'
                : 'bg-white/95 border-stone-200 text-stone-900'
            }`}>
              
              {/* Top Row icons */}
              <div className="flex justify-between items-center">
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#8C7851] font-semibold bg-[#8C7851]/10 px-3 py-1 rounded-full border border-[#8C7851]/15">
                  Foto de Erin
                </span>
                <Sparkles className="w-5 h-5 text-natural-accent animate-pulse" />
              </div>

              {/* Central text block */}
              <div className="my-auto py-4 flex flex-col gap-4">
                <div className="text-3xl">🕊️</div>
                <h4 className="font-serif text-lg font-light leading-snug">
                  Foto Pendiente
                </h4>
                
                <p className={`text-xs leading-relaxed font-light ${
                  theme === 'night' ? 'text-zinc-400' : 'text-neutral-600'
                }`}>
                  Foto de alta calidad no disponible por ahora.
                </p>
              </div>

              {/* Bottom tag row */}
              <div className="flex justify-between items-center border-t border-natural-ink/5 pt-4">
                <div>
                  <h5 className={`font-serif text-xs font-light ${theme === 'night' ? 'text-zinc-300' : 'text-stone-700'}`}>Erin Muñiz</h5>
                  <p className="text-[8px] uppercase tracking-widest text-[#8C7851] font-mono leading-none">Consultorio Holístico</p>
                </div>
                <div className={`p-2 rounded-full ${theme === 'night' ? 'bg-[#292723]' : 'bg-stone-50'}`}>
                  <Users className="w-4 h-4 text-natural-accent" />
                </div>
              </div>

            </div>

            {/* Orbiting particles */}
            <motion.div
              animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 top-1/4 z-30 p-2 rounded-full glass-panel border border-white/20 shadow-lg text-natural-accent"
            >
              <Sparkles className="w-4 h-4 text-glow animate-pulse" />
            </motion.div>

            <motion.div
              animate={{ x: [0, -8, 8, 0], y: [0, 8, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -left-4 bottom-1/4 z-30 p-2 rounded-full glass-panel border border-white/20 shadow-lg text-natural-accent"
            >
              <Heart className="w-4 h-4 animate-pulse" />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
