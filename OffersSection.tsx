/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Compass, ShieldAlert, Heart, Activity, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface PainBridgeProps {
  theme: 'night' | 'day';
}

export default function PainBridge({ theme }: PainBridgeProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  // Pain blocks
  const painStates = [
    {
      id: 1,
      title: "Ansiedad de Fondo",
      short: "Se siente un ruido constante sin causa aparente externa",
      description: "Cuando te acuestas con una opresión angustiante en el pecho y te despiertas sintiendo que ya vas tarde para vivir.",
      solution: "Liberación del sistema nervioso y disolución de las respuestas de supervivencia extrema mediante tapping energético 1:1."
    },
    {
      id: 2,
      title: "Rutina en Automático",
      short: "Modo de supervivencia donde no hay espacio para crear tu propia felicidad",
      description: "Sientes que ejecutas infinitas tareas robóticas diarias, pero pierdes de vista la esencia y el sabor del momento presente.",
      solution: "Integración de enraizamiento (grounding), devolviendo tu enfoque consciente al cuerpo y a tu verdadero ser."
    },
    {
      id: 3,
      title: "Sensación de Callejón sin Salida",
      short: "Las viejas estrategias ya no funcionan y las nuevas te atemorizan",
      description: "Estancamiento en la realización, síndrome del impostor y parálisis mental al tomar decisiones de vida esenciales.",
      solution: "Ruptura de techos financieros y mentales mediante prácticas integrativas, meditación y liberación de traumas anteriores."
    },
    {
      id: 4,
      title: "Viejos Rencores y Cargas",
      short: "Una mochila pesada del pasado que drena tus energías vitales",
      description: "Diálogos internos interminables con quienes te hirieron y el miedo inconsciente de volver a sufrir el mismo daño.",
      solution: "Disolución de viejas deudas emocionales, perdón energético guiado y llenado de esos espacios vacíos con tu propio poder sagrado."
    }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Main Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            <div className={`p-2.5 rounded-full ${
              theme === 'night' ? 'bg-natural-accent/15 text-natural-accent' : 'bg-natural-accent/10 text-natural-accent'
            }`}>
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`font-serif text-4xl md:text-5xl font-light mb-6 ${
              theme === 'night' ? 'text-white' : 'text-[#1A1A1A]'
            }`}
          >
            Momento de Desacelerar.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-lg leading-relaxed font-light ${
              theme === 'night' ? 'text-zinc-300' : 'text-natural-ink/80'
            }`}
          >
            A menudo corremos en piloto automático, intentando ahogar la ansiedad de fondo, resentimientos hereditarios o un agobiante sentimiento de estancamiento. Pensamos que con solo aguantar pasará pronto, pero el cuerpo guarda la cuenta.
          </motion.p>
        </div>

        {/* Dynamic Split Grid: Text vs Interactive pain state analyzer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Deep warning / text-address */}
          <div className="lg:col-span-12 lg:col-span-5 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`p-8 rounded-3xl border relative overflow-hidden ${
                theme === 'night'
                  ? 'bg-natural-ink/40 border-white/5'
                  : 'bg-white/80 border-natural-ink/6 shadow-sm'
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-natural-accent/5 rounded-full blur-2xl pointer-events-none" />

              <h4 className="font-serif text-xl font-medium text-natural-accent mb-4 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-natural-accent" /> Una cálida verdad espiritual:
              </h4>

              <p className={`text-sm md:text-base leading-relaxed mb-6 font-light ${
                theme === 'night' ? 'text-zinc-300' : 'text-natural-ink/85'
              }`}>
                Al posponer el proceso de sanación interior para el mañana, pagas inconscientemente un alto costo todos los días con tu paz mental, tus relaciones, tu energía creativa y tu salud física.
              </p>

              <div className={`p-4 rounded-2xl mb-6 flex gap-3 text-xs md:text-sm italic ${
                theme === 'night' ? 'bg-[#252320]/80 text-zinc-300 border border-white/5' : 'bg-[#FDFBF7] text-natural-ink/80 border border-[#1A1A1A]/7'
              }`}>
                <Heart className="w-5 h-5 text-natural-accent shrink-0" />
                <span>
                  No tienes que cargar con todo el equipaje tú solo. Está bien pedir guía y abrirse a la ayuda de un mentor que sepa acompañarte a través de la tormenta con amor y respeto.
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500">
                <Activity className="w-4 h-4 text-natural-accent animate-pulse" /> Lleva tu mirada hacia adentro
              </div>
            </motion.div>
          </div>

          {/* Right Block: Dynamic Interactive Hover State Dissolver */}
          <div className="lg:col-span-12 lg:col-span-7 flex flex-col gap-4">
            <h3 className={`text-xs font-mono uppercase tracking-widest mb-2 ${
              theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/60'
            }`}>
              Presiona sobre un bloqueo para ver cómo disolverlo con amor:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {painStates.map((item, index) => {
                const isActive = activeItem === item.id;
                return (
                  <motion.div
                    key={item.id}
                    layoutId={`pain-card-${item.id}`}
                    onClick={() => setActiveItem(isActive ? null : item.id)}
                    className={`p-6 rounded-2xl border text-left cursor-pointer transition-all relative ${
                      isActive
                        ? theme === 'night'
                          ? 'bg-natural-accent/15 border-natural-accent/40 shadow-lg shadow-natural-accent/5 scale-[1.01]'
                          : 'bg-[#8C7851]/8 border-natural-accent/30 shadow-sm scale-[1.01]'
                        : theme === 'night'
                          ? 'bg-natural-ink/20 border-white/5 hover:bg-natural-ink/40'
                          : 'bg-white/60 border-natural-ink/6 hover:border-natural-accent/20 shadow-sm'
                    }`}
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
                        theme === 'night' ? 'bg-[#292723] text-zinc-400' : 'bg-stone-50 text-stone-500'
                      }`}>
                        Bloqueo 0{index + 1}
                      </span>
                      {isActive && (
                        <motion.span
                          layoutId={`pulse-glow-${item.id}`}
                          className="flex h-2 w-2 relative"
                        >
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </motion.span>
                      )}
                    </div>

                    <h4 className={`text-lg font-serif font-medium mb-2 flex items-center justify-between ${
                      theme === 'night' ? 'text-white' : 'text-natural-ink'
                    }`}>
                      {item.title}
                    </h4>

                    <p className={`text-xs leading-relaxed mb-3 font-light ${
                      isActive 
                        ? theme === 'night' ? 'text-zinc-350' : 'text-natural-ink/90'
                        : theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/60'
                    }`}>
                      {item.short}
                    </p>

                    {/* Expandable Restorative Space */}
                    <motion.div
                      initial={false}
                      animate={isActive ? { height: 'auto', opacity: 1, marginTop: 12 } : { height: 0, opacity: 0, marginTop: 0 }}
                      className="overflow-hidden border-t border-natural-ink/5"
                    >
                      <p className={`text-xs leading-relaxed py-2 italic font-serif ${
                        theme === 'night' ? 'text-natural-accent' : 'text-[#8C7851]'
                      }`}>
                        "{item.description}"
                      </p>
                      
                      <div className={`p-3 rounded-lg text-[11px] mt-2 ${
                        theme === 'night' 
                          ? 'bg-natural-ink/60 border border-[#A2B29F]/20 text-[#A2B29F]' 
                          : 'bg-[#A2B29F]/10 border border-[#A2B29F]/15 text-[#546251]'
                      }`}>
                        <strong>Salida Energética:</strong> {item.solution}
                      </div>
                    </motion.div>

                    <div className="flex justify-end mt-2">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-natural-accent inline-flex items-center gap-1">
                        {isActive ? 'Cerrar' : 'Explorar'} <ArrowRight className={`w-3 h-3 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                      </span>
                    </div>

                    {/* Gradient background hover aura */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none bg-gradient-to-r ${
                      theme === 'night' ? 'from-natural-accent to-neutral-500' : 'from-natural-accent to-stone-400'
                    }`} />
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
