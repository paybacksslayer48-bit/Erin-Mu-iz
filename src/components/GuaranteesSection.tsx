/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, UserCheck, XCircle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface GuaranteesSectionProps {
  theme: 'night' | 'day';
}

export default function GuaranteesSection({ theme }: GuaranteesSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Comparison metrics (Antes / Después) in Spanish
  const transitions = [
    {
      id: 1,
      before: "Caos Mental",
      beforeDesc: "Sistema nervioso sobreexcitado, un torbellino constante de dudas y preocupaciones diarias.",
      after: "Claridad Cristalina",
      afterDesc: "Visión nítida de tus metas espirituales, entendimiento de tu alma y una mente en paz."
    },
    {
      id: 2,
      before: "Agotamiento Constante",
      beforeDesc: "Despertarse cansada. Tu fuerza vital se consume reprimiendo miedos internos y tensiones.",
      after: "Ligereza y Vitalidad",
      afterDesc: "Sensación profunda de plenitud energética, alegría innata para crear y fluir libres."
    },
    {
      id: 3,
      before: "Bloqueo Expresivo",
      beforeDesc: "Resentimientos contenidos, emociones reprimidas y miedo a expresar los deseos de tu alma.",
      after: "Intuición Activada",
      afterDesc: "Poder de expresión despejado, capacidad de escuchar tu brújula interior y avanzar."
    },
    {
      id: 4,
      before: "Temor a Equivocarte",
      beforeDesc: "Parálisis por análisis, dudas interminables y dependencia de la aprobación de otras personas.",
      after: "Paso de Integración",
      afterDesc: "Comprensión de tus pilares de crecimiento y la protección de tu linaje espiritual ancestral."
    }
  ];

  return (
    <section id="guarantees" className="relative py-24 overflow-hidden z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Header Column */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            <div className={`p-2.5 rounded-full ${
              theme === 'night' ? 'bg-natural-accent/15 text-natural-accent' : 'bg-[#8C7851]/10 text-natural-accent'
            }`}>
              <ShieldCheck className="w-6 h-6 animate-pulse" />
            </div>
          </motion.div>

          <h2 className={`font-serif text-3xl md:text-5xl font-light mb-6 ${
            theme === 'night' ? 'text-white' : 'text-[#1A1A1A]'
          }`}>
            Mapa de Tu Transformación
          </h2>
          <p className={`text-base leading-relaxed font-light ${
            theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/80'
          }`}>
            Descubre el camino que transitaremos en unidad. No es magia, es terapia holística y disolución respetuosa de bloqueos arraigados en tu sistema nervioso profundo.
          </p>
        </div>

        {/* COMPARISON TRANSFORMATION GRID: Before / After */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {transitions.map((item) => (
            <motion.div
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`p-6 md:p-8 rounded-[30px] border relative overflow-hidden flex flex-col justify-between transition-all ${
                theme === 'night'
                  ? hoveredCard === item.id 
                    ? 'bg-natural-ink/50 border-white/10 shadow-lg shadow-natural-accent/5' 
                    : 'bg-natural-ink/30 border-white/5'
                  : hoveredCard === item.id
                    ? 'bg-white border-[#8C7851]/40 shadow-md'
                    : 'bg-white/60 backdrop-blur-md border-natural-ink/10 shadow-sm'
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-11 gap-6 items-center">
                
                {/* BEFORE (With warm gold terracota accent) */}
                <div className="sm:col-span-5 text-left">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#8C7851] font-semibold flex items-center gap-1 mb-2">
                    <XCircle className="w-3.5 h-3.5 shrink-0 text-[#8C7851]" /> Punto de Partida
                  </span>
                  <h4 className={`font-serif text-lg md:text-xl font-light mb-1.5 ${
                    theme === 'night' ? 'text-zinc-200' : 'text-natural-ink'
                  }`}>
                    {item.before}
                  </h4>
                  <p className={`text-xs font-light leading-relaxed ${
                    theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/70'
                  }`}>
                    {item.beforeDesc}
                  </p>
                </div>

                {/* TRANSITION SPEEDWAY ARROW */}
                <div className="sm:col-span-1 flex justify-center items-center py-2 sm:py-0">
                  <motion.div
                    animate={hoveredCard === item.id ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                    className={`p-2 rounded-full ${
                      theme === 'night' ? 'bg-natural-ink/40 text-natural-accent' : 'bg-[#8C7851]/10 text-natural-accent'
                    }`}
                  >
                    <ArrowRight className="w-4 h-4 transform rotate-90 sm:rotate-0" />
                  </motion.div>
                </div>

                {/* AFTER (With calm forest/sage accent) */}
                <div className="sm:col-span-5 text-left">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#546251] font-semibold flex items-center gap-1 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#546251]" /> Estado de Alineación
                  </span>
                  <h4 className={`font-serif text-lg md:text-xl font-light mb-1.5 ${
                    theme === 'night' ? 'text-white' : 'text-[#1A1A1A]'
                  }`}>
                    {item.after}
                  </h4>
                  <p className={`text-xs font-light leading-relaxed ${
                    theme === 'night' ? 'text-zinc-350' : 'text-natural-ink/80'
                  }`}>
                    {item.afterDesc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* HONEST INTUITIVE REFUND GUARANTEE CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`p-8 md:p-12 rounded-[36px] border relative overflow-hidden text-left glass-panel ${
            theme === 'night'
              ? 'bg-gradient-to-br from-zinc-950 via-zinc-950 to-natural-ink/30 border-white/5'
              : 'bg-gradient-to-br from-[#FDFBF7] via-white to-stone-50 border-natural-ink/10 shadow-sm'
          }`}
        >
          {/* Accent glow corner */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-natural-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Guarantee Seal Left (4 columns) */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left relative">
              <div className="relative mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-[-10px] rounded-full border border-dashed border-[#8C7851]/40 opacity-70"
                />
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  theme === 'night' ? 'bg-natural-ink/80 text-natural-accent border border-white/5' : 'bg-[#1A1A1A] text-natural-accent shadow-md'
                }`}>
                  <UserCheck className="w-8 h-8" />
                </div>
              </div>

              <div className="font-serif italic text-lg text-natural-accent font-light mb-1">
                Sinceridad de Almas
              </div>
              <h3 className={`font-serif text-2xl lg:text-3xl font-light uppercase tracking-tight ${
                theme === 'night' ? 'text-white' : 'text-[#1A1A1A]'
              }`}>
                Garantía de Sintonía
              </h3>
            </div>

            {/* Core text description Right (8 columns) */}
            <div className="lg:col-span-8 text-left flex flex-col justify-center">
              <p className={`text-sm md:text-base leading-relaxed mb-6 font-light ${
                theme === 'night' ? 'text-zinc-300' : 'text-natural-ink/80'
              }`}>
                Tu comodidad en este camino es sumamente valiosa. Si durante los primeros 20 minutos de nuestra sesión individual sientes que mi voz, la energía o el método no te sintonizan, detendremos el proceso con delicadeza y te devolveré el <span className="font-semibold underline text-natural-accent decoration-dashed">100% de tu dinero</span>. Sin preguntas engorrosas ni resentimiento. Tu bienestar es superior.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                  theme === 'night' ? 'bg-natural-ink/40 text-zinc-300' : 'bg-white border border-natural-ink/10 text-natural-ink'
                }`}>
                  🔒 Transacciones Seguras
                </div>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                  theme === 'night' ? 'bg-natural-ink/40 text-zinc-300' : 'bg-white border border-natural-ink/10 text-natural-ink'
                }`}>
                  🤝 Acuerdo Justo y Sano
                </div>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                  theme === 'night' ? 'bg-natural-ink/40 text-zinc-300' : 'bg-white border border-natural-ink/10 text-natural-ink'
                }`}>
                  🌱 Apoyo Cálido con Respeto
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
