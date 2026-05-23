/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, BookOpen, GraduationCap, ArrowUpRight, Check, X, Shield, Send } from 'lucide-react';
import React, { useState } from 'react';

interface OffersSectionProps {
  theme: 'night' | 'day';
  scrollToQuiz: () => void;
}

export default function OffersSection({ theme, scrollToQuiz }: OffersSectionProps) {
  const [isPreRecordModalOpen, setIsPreRecordModalOpen] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', contact: '', motivation: '', experience: 'no' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful form collection to client state
    setFormSubmitted(true);
    setTimeout(() => {
      // Keep state clear after submission
      setLeadForm({ name: '', contact: '', motivation: '', experience: 'no' });
    }, 4000);
  };

  const closePreRecordModal = () => {
    setIsPreRecordModalOpen(false);
    setFormSubmitted(false);
  };

  return (
    <section id="offers" className="relative py-24 overflow-hidden z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            <div className={`p-2.5 rounded-full ${
              theme === 'night' ? 'bg-natural-accent/15 text-natural-accent' : 'bg-natural-accent/10 text-natural-accent'
            }`}>
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
          </motion.div>

          <h2 className={`font-serif text-3xl md:text-5xl font-light mb-6 ${
            theme === 'night' ? 'text-white' : 'text-[#1A1A1A]'
          }`}>
            Tres Grandes Caminos
          </h2>
          <p className={`text-base leading-relaxed font-light ${
            theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/80'
          }`}>
            Elige el formato que resuene en tu corazón ahora mismo: desde el cuidado personal cercano hasta una formación profesional de impacto trascendente.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative items-stretch">
          
          {/* Card 1: 1:1 Personal Session */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-3xl border flex flex-col justify-between relative overflow-hidden transition-all group ${
              theme === 'night'
                ? 'bg-natural-ink/30 border-white/5 shadow-inner hover:bg-natural-ink/50 hover:border-natural-accent/20'
                : 'bg-white/70 backdrop-blur-md border-natural-ink/10 shadow-sm hover:shadow-md hover:border-natural-accent/25'
            }`}
          >
            {/* Top design indicators */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-natural-accent/5 rounded-full blur-2xl pointer-events-none group-hover:bg-natural-accent/10 transition-all duration-700" />
            
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl ${
                  theme === 'night' ? 'bg-natural-accent/15 text-natural-accent' : 'bg-[#8C7851]/10 text-natural-accent'
                }`}>
                  <Calendar className="w-6 h-6" />
                </div>
                {/* Seat Alert Badge */}
                <span className="bg-[#8C7851]/20 border border-natural-accent/30 text-natural-accent text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider animate-pulse flex items-center gap-1">
                  🔥 Solo 2 Cupos Libres
                </span>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7851] font-semibold">
                Espacio Íntimo & Profundo
              </span>

              <h3 className={`font-serif text-2xl font-light mt-2 mb-4 leading-normal ${
                theme === 'night' ? 'text-white' : 'text-[#1A1A1A]'
              }`}>
                Sesión Individual 1:1
              </h3>

              <p className={`text-sm leading-relaxed mb-6 font-light ${
                theme === 'night' ? 'text-zinc-300' : 'text-natural-ink/75'
              }`}>
                Sanación energética profunda bajo el método original de Erin Muñiz y lectura de tu energía sutil a través del Oráculo Angelical. Un análisis de bloqueos de relaciones, ansiedad y propósito vital de manera privada y confidencial.
              </p>

              <ul className="space-y-3 mb-8">
                {['Cupos limitados (máx. 5 por semana)', 'Sesiones confidenciales personalizadas', 'Prescripción de prácticas y rituales de aura', 'Lectura intuitiva profunda con Oráculo'].map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-xs">
                    <Check className={`w-4 h-4 shrink-0 ${theme === 'night' ? 'text-[#A2B29F]' : 'text-[#546251]'}`} />
                    <span className={theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/80'}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={scrollToQuiz}
              className={`w-full py-4 rounded-2xl text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-md hover:scale-[1.02] transition-transform text-center flex items-center justify-center gap-2 ${
                theme === 'night'
                  ? 'bg-natural-accent text-white shadow-natural-accent/15 hover:bg-natural-accent-hover'
                  : 'bg-natural-ink text-white shadow-natural-ink/10 hover:bg-natural-ink/90'
              }`}
              id="offer-cta-quiz"
            >
              Iniciar Test de Diagnóstico <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Card 2: Manuals & Self Meditation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`p-8 rounded-3xl border flex flex-col justify-between relative overflow-hidden transition-all group ${
              theme === 'night'
                ? 'bg-natural-ink/30 border-white/5 shadow-inner hover:bg-natural-ink/50 hover:border-natural-accent/20'
                : 'bg-white/70 backdrop-blur-md border-natural-ink/10 shadow-sm hover:shadow-md hover:border-natural-accent/25'
            }`}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-natural-accent/5 rounded-full blur-2xl pointer-events-none group-hover:bg-natural-accent/10 transition-all duration-700" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl ${
                  theme === 'night' ? 'bg-natural-accent/15 text-natural-accent' : 'bg-[#8C7851]/10 text-natural-accent'
                }`}>
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className={`text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full tracking-wide border ${
                  theme === 'night' 
                    ? 'bg-[#292723] text-natural-accent border-white/5' 
                    : 'bg-stone-50 text-stone-600 border-natural-ink/10'
                }`}>
                  Ritmo Autónomo
                </span>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7851] font-semibold">
                Crecimiento y Práctica Libre
              </span>

              <h3 className={`font-serif text-2xl font-light mt-2 mb-4 leading-normal ${
                theme === 'night' ? 'text-white' : 'text-[#1A1A1A]'
              }`}>
                Guías y Meditaciones de Autor
              </h3>

              <p className={`text-sm leading-relaxed mb-6 font-light ${
                theme === 'night' ? 'text-zinc-300' : 'text-natural-ink/75'
              }`}>
                Manuales de manifestación e introspección profunda, sesiones de audio-terapia grabadas con resonancia Reiki para quienes prefieren explorar y liberar bloqueos emocionales en su propia intimidad.
              </p>

              <ul className="space-y-3 mb-8">
                {['Acceso digital de por vida inmediato', 'Instrucciones claras de alineación áurica', 'Audios grabados en frecuencias de relajación', 'Materiales paso a paso de diseño espiritual'].map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-xs">
                    <Check className={`w-4 h-4 shrink-0 ${theme === 'night' ? 'text-[#A2B29F]' : 'text-[#546251]'}`} />
                    <span className={theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/80'}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="http://erin-muniz.tiendup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-4 rounded-2xl text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-md hover:scale-[1.02] transition-transform text-center flex items-center justify-center gap-2 border ${
                theme === 'night'
                  ? 'bg-natural-ink/30 hover:bg-natural-ink/55 text-zinc-100 border-white/5'
                  : 'bg-white hover:bg-[#8C7851]/5 text-natural-ink border-natural-ink/15 shadow-sm'
              }`}
              id="offer-cta-shop"
            >
              Explorar Tienda Online <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Card 3: Cirugía Astral Course */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`p-8 rounded-3xl border flex flex-col justify-between relative overflow-hidden transition-all group ${
              theme === 'night'
                ? 'bg-natural-ink/30 border-white/5 shadow-inner hover:bg-natural-ink/50 hover:border-natural-accent/20'
                : 'bg-white/70 backdrop-blur-md border-natural-ink/10 shadow-sm hover:shadow-md hover:border-natural-accent/25'
            }`}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-natural-accent/5 rounded-full blur-2xl pointer-events-none group-hover:bg-natural-accent/10 transition-all duration-700" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl ${
                  theme === 'night' ? 'bg-natural-accent/15 text-natural-accent' : 'bg-[#8C7851]/10 text-natural-accent'
                }`}>
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className={`text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full tracking-wide border ${
                  theme === 'night' 
                    ? 'bg-[#A2B29F]/15 text-[#A2B29F] border-[#A2B29F]/20' 
                    : 'bg-[#A2B29F]/10 text-[#546251] border-[#A2B29F]/25'
                }`}>
                  Luz y Sabiduría
                </span>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7851] font-semibold">
                Certificación Autorizada
              </span>

              <h3 className={`font-serif text-2xl font-light mt-2 mb-4 leading-normal ${
                theme === 'night' ? 'text-white' : 'text-[#1A1A1A]'
              }`}>
                Curso «Cirugía Astral»
              </h3>

              <p className={`text-sm leading-relaxed mb-6 font-light ${
                theme === 'night' ? 'text-zinc-300' : 'text-natural-ink/75'
              }`}>
                Transmisión profesional y paso a paso del método terapéutico original de Erin Muñiz. Para personas interesadas en profundizar en su energía sutil, sanar bloqueos mentales heredados y guiar a otros con respeto.
              </p>

              <ul className="space-y-3 mb-8">
                {['Mapas y guías de anatomía del aura', 'Sesión interactiva en vivo por Zoom', 'Certificado oficial e institucional del curso', 'Acceso al club cerrado y seguro de egresados'].map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-xs">
                    <Check className={`w-4 h-4 shrink-0 ${theme === 'night' ? 'text-[#A2B29F]' : 'text-[#546251]'}`} />
                    <span className={theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/80'}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setIsPreRecordModalOpen(true)}
              className={`w-full py-4 rounded-2xl text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-md hover:scale-[1.02] transition-transform text-center flex items-center justify-center gap-2 ${
                theme === 'night'
                  ? 'bg-natural-accent text-white hover:bg-natural-accent-hover'
                  : 'bg-natural-ink text-white hover:bg-natural-ink/90'
              }`}
              id="offer-cta-pre-record"
            >
              Completar Pre-registro <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>

        {/* Dynamic Pre-Record survey modal */}
        <AnimatePresence>
          {isPreRecordModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closePreRecordModal}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className={`relative w-full max-w-lg p-6 md:p-8 rounded-3xl border shadow-2xl glass-panel z-10 ${
                  theme === 'night' 
                    ? 'bg-zinc-950 border-white/10 text-white' 
                    : 'bg-white border-stone-200 text-stone-900'
                }`}
              >
                {/* Close Button */}
                <button
                  onClick={closePreRecordModal}
                  className={`absolute top-4 right-4 p-2 rounded-full border transition-colors ${
                    theme === 'night' 
                      ? 'border-white/10 text-zinc-400 hover:text-white hover:bg-white/5' 
                      : 'border-stone-205 text-stone-500 hover:text-black hover:bg-stone-50'
                  }`}
                  id="modal-close-btn"
                >
                  <X className="w-4 h-4" />
                </button>

                {!formSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                    <div>
                      <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-widest mb-1.5 font-bold">
                        <GraduationCap className="w-5 h-5 text-natural-accent" /> Formulario de Pre-registro
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-natural-accent">
                        Curso «Cirugía Astral»
                      </h3>
                      <p className={`text-xs mt-1.5 font-light ${
                        theme === 'night' ? 'text-zinc-400' : 'text-stone-500'
                      }`}>
                        Introduce tus datos de contacto abajo. El equipo del curso se comunicará contigo antes de la apertura oficial para ofrecerte la tarifa preferencial de preventa y facilidades de pago.
                      </p>
                    </div>

                    {/* Inputs */}
                    <div className="flex flex-col gap-4">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5 text-left">
                        <label className={`text-[10px] font-mono uppercase tracking-wider ${
                          theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/65'
                        }`}>Tu precioso nombre</label>
                        <input
                          type="text"
                          required
                          value={leadForm.name}
                          onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                          placeholder="Ej. Carmen Ortiz"
                          className={`w-full text-sm p-3.5 rounded-xl border focus:outline-none focus:ring-1 ${
                            theme === 'night'
                              ? 'bg-natural-ink/60 border-white/10 text-white focus:ring-natural-accent focus:border-natural-accent'
                              : 'bg-white border-natural-ink/10 text-natural-ink focus:ring-natural-accent focus:border-natural-accent'
                          }`}
                        />
                      </div>

                      {/* Username */}
                      <div className="flex flex-col gap-1.5 text-left">
                        <label className={`text-[10px] font-mono uppercase tracking-wider ${
                          theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/65'
                        }`}>Usuario de Telegram / Número de WhatsApp</label>
                        <input
                          type="text"
                          required
                          value={leadForm.contact}
                          onChange={(e) => setLeadForm({ ...leadForm, contact: e.target.value })}
                          placeholder="@carmen_luz"
                          className={`w-full text-sm p-3.5 rounded-xl border focus:outline-none focus:ring-1 ${
                            theme === 'night'
                              ? 'bg-natural-ink/60 border-white/10 text-white focus:ring-natural-accent focus:border-natural-accent'
                              : 'bg-white border-natural-ink/10 text-natural-ink focus:ring-natural-accent focus:border-natural-accent'
                          }`}
                        />
                      </div>

                      {/* Prior experience */}
                      <div className="flex flex-col gap-1.5 text-left">
                        <label className={`text-[10px] font-mono uppercase tracking-wider ${
                          theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/65'
                        }`}>¿Tienes experiencia en sanación o terapias?</label>
                        <select
                          value={leadForm.experience}
                          onChange={(e) => setLeadForm({ ...leadForm, experience: e.target.value })}
                          className={`w-full text-sm p-3.5 rounded-xl border focus:outline-none ${
                            theme === 'night'
                              ? 'bg-natural-ink/60 border-white/10 text-white focus:border-natural-accent'
                              : 'bg-white border-natural-ink/10 text-natural-ink focus:border-natural-accent'
                          }`}
                        >
                          <option value="no">No, busco dar mis primeros pasos</option>
                          <option value="some">Practico tarot, astrología u Oráculo de forma personal</option>
                          <option value="pro">Sí, practico profesionalmente y atiendo clientes</option>
                        </select>
                      </div>

                      {/* Motivation */}
                      <div className="flex flex-col gap-1.5 text-left">
                        <label className={`text-[10px] font-mono uppercase tracking-wider ${
                          theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/65'
                        }`}>¿Por qué deseas aprender el método de Cirugía Astral?</label>
                        <textarea
                          rows={2}
                          value={leadForm.motivation}
                          onChange={(e) => setLeadForm({ ...leadForm, motivation: e.target.value })}
                          placeholder="Deseo purificar mis propios miedos profundos, sanar mis linajes y guiar a otros..."
                          className={`w-full text-sm p-3.5 rounded-xl border focus:outline-none focus:ring-1 ${
                            theme === 'night'
                              ? 'bg-natural-ink/60 border-white/10 text-white focus:ring-natural-accent focus:border-natural-accent'
                              : 'bg-white border-natural-ink/10 text-natural-ink focus:ring-natural-accent focus:border-natural-accent'
                          }`}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] transition-transform ${
                        theme === 'night'
                          ? 'bg-natural-accent hover:bg-natural-accent-hover text-white'
                          : 'bg-[#1A1A1A] text-white hover:bg-stone-900'
                      }`}
                      id="lead-submit-btn"
                    >
                      <Send className="w-3.5 h-3.5" /> Enviar Pre-registro
                    </button>
                    
                    <p className="text-[9px] text-zinc-500 text-center flex items-center justify-center gap-1">
                      <Shield className="w-3 h-3 text-emerald-500" /> Tus datos personales están completamente protegidos según políticas de privacidad y respeto.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-8 gap-4"
                  >
                    <div className="p-4 bg-[#A2B29F]/15 text-[#546251] rounded-full border border-[#A2B29F]/35">
                      <Check className="w-8 h-8 animate-bounce text-natural-accent" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-light text-natural-accent">¡Registro Recibido con Éxito!</h4>
                      <p className={`text-xs mt-2 font-light ${
                        theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/85'
                      }`}>
                        ¡Muchas gracias, {leadForm.name || 'Carmen'}! Tus respuestas han quedado registradas en nuestra base de datos prioritaria. El equipo de soporte de Erin se comunicará contigo vía Telegram o WhatsApp pronto para ofrecerte las tarifas especiales de preventa.
                      </p>
                    </div>
                    <button
                      onClick={closePreRecordModal}
                      className={`mt-4 py-2 px-5 rounded-full text-xs font-medium border transition-colors ${
                        theme === 'night'
                          ? 'border-white/10 text-zinc-300 hover:bg-white/5'
                          : 'border-natural-ink/15 text-natural-ink hover:bg-[#1A1A1A]/5'
                      }`}
                      id="thankyou-close-btn"
                    >
                      Cerrar ventana
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
