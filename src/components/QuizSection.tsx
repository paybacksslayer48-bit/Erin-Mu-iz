/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronRight, MessageSquareCode, Sparkles, Send, ShieldCheck, RefreshCw, Calendar as IconCalendar, Clock, Check, ChevronLeft } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface QuizSectionProps {
  theme: 'night' | 'day';
}

export default function QuizSection({ theme }: QuizSectionProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [problem, setProblem] = useState('');
  const [readiness, setReadiness] = useState('');

  // Smart Scheduler states
  const [selectedDay, setSelectedDay] = useState(0); // index 0-4
  const [selectedSlot, setSelectedSlot] = useState(''); // chosen hour e.g. "11:30"
  const [bookingForm, setBookingForm] = useState({ name: '', email: '', whatsappNum: '' });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Available days (starting from Monday 25 May relative to May 2026)
  const availableDays = [
    { name: "Lun", date: "25", Month: "Mayo", full: "Lunes, 25 de Mayo" },
    { name: "Mar", date: "26", Month: "Mayo", full: "Martes, 26 de Mayo" },
    { name: "Mié", date: "27", Month: "Mayo", full: "Miércoles, 27 de Mayo" },
    { name: "Jue", date: "28", Month: "Mayo", full: "Jueves, 28 de Mayo" },
    { name: "Vie", date: "29", Month: "Mayo", full: "Viernes, 29 de Mayo" }
  ];

  const timeSlots = [
    { hour: "09:30", period: "Mañana" },
    { hour: "11:30", period: "Mañana" },
    { hour: "14:30", period: "Tarde" },
    { hour: "16:30", period: "Tarde" },
    { hour: "18:30", period: "Tarde" }
  ];

  // Sourced from block questions in Spanish
  const problemOptions = [
    "Agotamiento emocional y cargas sutiles del pasado",
    "Bloqueos financieros y estancamiento profesional",
    "Ansiedad mental profunda que dificulta mi paz",
    "Búsqueda de dirección sutil y guía de mis Ángeles"
  ];

  const readinessOptions = [
    { key: "ready", text: "Sí, siento el llamado en mi alma y estoy lista", whatsappText: "estoy lista para" },
    { key: "info", text: "Deseo conocer primero las condiciones y tarifas con amor", whatsappText: "deseo conocer primero las condiciones y tarifas de las sesiones para" }
  ];

  const handleSelectProblem = (opt: string) => {
    setProblem(opt);
    setStep(2);
  };

  const handleSelectReadiness = (optText: string) => {
    setReadiness(optText);
    setStep(3);
  };

  const restartQuiz = () => {
    setProblem('');
    setReadiness('');
    setSelectedSlot('');
    setStep(1);
    setBookingConfirmed(false);
  };

  // Compile WhatsApp URL in Spanish supporting both direct message and smart booking message
  const getWhatsAppLink = (withSchedule = false) => {
    const selectedReadinessObj = readinessOptions.find(r => r.text === readiness);
    const readinessFormatted = selectedReadinessObj ? selectedReadinessObj.whatsappText : "estoy lista para";
    
    let message = "";
    if (withSchedule) {
      const chosenDayStr = availableDays[selectedDay].full;
      message = `¡Hola, Erin! Acabo de programar una cita en tu sitio web. Mi nombre es ${bookingForm.name || 'Carmen Ortiz'} (${bookingForm.whatsappNum || 'Contacto'}). Mi bloqueo principal es: "${problem}". Elegí el horario de sintonía: ${chosenDayStr} a las ${selectedSlot}. ¿Me confirmas si está disponible en tu agenda oficial?`;
    } else {
      message = `¡Hola, Erin! Completé el test en tu sitio web. Mi bloqueo más pesado actualmente es: "${problem}", y ${readinessFormatted} avanzar en mi proceso de sanación. ¿Podrías indicarme qué espacios de sesión tienes disponibles?`;
    }
    
    // URL encode properly
    return `https://wa.me/34604959118?text=${encodeURIComponent(message)}`;
  };

  const handleSmartBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) {
      alert("Por favor, selecciona una hora para tu consulta espiritual.");
      return;
    }
    setStep(4);
  };

  return (
    <section id="quiz" className="relative py-24 overflow-hidden z-20 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative">
        
        {/* Glow halo behind the quiz board */}
        <div className={`absolute inset-0 max-w-lg mx-auto h-[350px] filter blur-[120px] rounded-full opacity-30 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-1000 ${
          theme === 'night' ? 'bg-natural-accent/20' : 'bg-natural-accent/10'
        }`} />

        {/* Outer Frame with glassy design */}
        <div className={`p-6 md:p-10 rounded-[36px] border shadow-2xl relative overflow-hidden text-center glass-panel z-10 ${
          theme === 'night'
            ? 'bg-zinc-950/80 border-white/5 shadow-inner text-white'
            : 'bg-white/95 border-natural-ink/10 shadow-sm text-natural-ink'
        }`}>
          
          {/* Header Indicators */}
          <div className="flex items-center justify-between border-b border-natural-ink/6 pb-5 mb-6">
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-natural-accent font-semibold flex items-center gap-1.5 mb-1">
                <HelpCircle className="w-4 h-4 animate-pulse text-natural-accent" /> Filtro de Aura Interactivo & Reserva
              </span>
              <p className={`text-[11px] font-light ${theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/60'}`}>
                Evalúa tu sintonía y reserva de forma inteligente tu espacio terapéutico 1:1
              </p>
            </div>
            
            {/* Step badges */}
            <div className="flex gap-1.5">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`w-6 h-2 rounded-full transition-all duration-500 ${
                    step === s
                      ? 'bg-natural-accent w-10'
                      : step > s
                        ? theme === 'night' ? 'bg-zinc-350' : 'bg-natural-ink'
                        : theme === 'night' ? 'bg-zinc-800' : 'bg-stone-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Interactive Steps Animation Wrapper */}
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Select the problem burden */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-light mb-2 text-natural-accent">
                    ¿Qué aspecto de tu vida se siente como el bloqueo más pesado hoy?
                  </h3>
                  <p className={`text-xs md:text-sm font-light mb-6 ${
                    theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/70'
                  }`}>
                    Identifica aquella tensión sutil que consume la mayor parte de tu energía vital esta semana:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {problemOptions.map((opt, i) => (
                    <motion.button
                      key={opt}
                      onClick={() => handleSelectProblem(opt)}
                      whileHover={{ scale: 1.015, y: -2 }}
                      whileTap={{ scale: 0.995 }}
                      className={`p-5 rounded-2xl border text-left font-serif font-light text-sm md:text-base transition-colors relative flex items-center justify-between cursor-pointer focus:outline-none ${
                        theme === 'night'
                          ? 'bg-natural-ink/30 border-white/5 hover:border-natural-accent/40 text-zinc-100 hover:bg-natural-ink/50'
                          : 'bg-white/40 border-natural-ink/6 hover:border-natural-accent/30 text-natural-ink hover:bg-white/85 shadow-sm'
                      }`}
                      id={`quiz-prob-opt-${i}`}
                    >
                      <span className="max-w-[85%]">{opt}</span>
                      <div className={`p-1.5 rounded-full ${
                        theme === 'night' ? 'bg-natural-ink/40' : 'bg-stone-100'
                      }`}>
                        <ChevronRight className="w-4 h-4 text-natural-accent" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: Readiness to heal */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-6"
              >
                <div>
                  {/* Small link back */}
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-natural-accent font-mono flex items-center gap-1.5 mx-auto mb-4 hover:underline cursor-pointer focus:outline-none bg-transparent border-none"
                    id="quiz-back-btn"
                  >
                    ← Volver a la pregunta anterior
                  </button>
                  <h3 className="font-serif text-2xl md:text-3xl font-light mb-2 text-natural-accent">
                    ¿Te sientes lista para abrirte al cambio y dedicar tiempo consciente a tu sanación?
                  </h3>
                  <p className={`text-xs md:text-sm font-light mb-6 ${
                    theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/70'
                  }`}>
                    Es fundamental crear una sintonía amorosa y un compromiso mutuo para tu renovación de alma:
                  </p>
                </div>

                <div className="flex flex-col gap-4 max-w-xl mx-auto w-full">
                  {readinessOptions.map((opt, i) => (
                    <motion.button
                      key={opt.key}
                      onClick={() => handleSelectReadiness(opt.text)}
                      whileHover={{ scale: 1.01, y: -1 }}
                      whileTap={{ scale: 0.995 }}
                      className={`p-5 rounded-2xl border text-left text-sm md:text-base transition-colors relative flex items-center justify-between cursor-pointer focus:outline-none ${
                        theme === 'night'
                          ? 'bg-natural-ink/30 border-white/5 hover:border-natural-accent/40 text-zinc-100 hover:bg-natural-ink/50'
                          : 'bg-white/40 border-natural-ink/6 hover:border-natural-accent/30 text-natural-ink hover:bg-white/85 shadow-sm'
                      }`}
                      id={`quiz-ready-opt-${i}`}
                    >
                      <span className="font-serif font-light">{opt.text}</span>
                      <div className={`p-1.5 rounded-full ${
                        theme === 'night' ? 'bg-natural-ink/40' : 'bg-stone-100'
                      }`}>
                        <ChevronRight className="w-4 h-4 text-natural-accent" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: Smart Live Scheduler Form with WhatsApp backup */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col gap-6 text-left"
              >
                {/* Back Link */}
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-natural-accent font-mono flex items-center gap-1.5 mr-auto hover:underline cursor-pointer focus:outline-none bg-transparent border-none"
                >
                  ← Atrás
                </button>

                <div className="text-center max-w-xl mx-auto mb-2">
                  <h3 className="font-serif text-2xl md:text-3xl font-light mb-2 text-center text-natural-accent">
                    Agenda tu Cita Inteligente
                  </h3>
                  <p className={`text-xs font-light ${
                    theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/75'
                  }`}>
                    Elige el día y la hora de tu terapia en línea 1:1, o si lo prefieres, consulta de inmediato a Erin de forma libre vía WhatsApp.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-2">
                  
                  {/* Left Column: Interactive Schedule Slots Selector */}
                  <div className="lg:col-span-7 flex flex-col gap-4">
                    
                    {/* Days selector */}
                    <div>
                      <h4 className={`text-[10px] font-mono tracking-wider uppercase mb-2 ${
                        theme === 'night' ? 'text-zinc-400' : 'text-[#8C7851]'
                      }`}>
                        1. Selecciona el Día Sugerido:
                      </h4>
                      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                        {availableDays.map((d, index) => {
                          const isSel = selectedDay === index;
                          return (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setSelectedDay(index)}
                              className={`p-3 rounded-xl border flex flex-col items-center justify-center min-w-[62px] text-center cursor-pointer transition-colors ${
                                isSel
                                  ? theme === 'night'
                                    ? 'bg-natural-accent border-natural-accent text-white'
                                    : 'bg-[#8C7851] border-[#8C7851] text-white shadow-sm'
                                  : theme === 'night'
                                    ? 'bg-natural-ink/40 border-white/5 text-zinc-350 hover:bg-neutral-800'
                                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                              }`}
                            >
                              <span className="text-[9px] font-mono uppercase tracking-widest leading-none mb-1">{d.name}</span>
                              <span className="text-base font-bold leading-none">{d.date}</span>
                              <span className="text-[9px] font-light mt-0.5 leading-none">{d.Month}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time slots selector */}
                    <div>
                      <h4 className={`text-[10px] font-mono tracking-wider uppercase mb-2 ${
                        theme === 'night' ? 'text-zinc-400' : 'text-[#8C7851]'
                      }`}>
                        2. Elige un Horario de Sintonía:
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((slot) => {
                          const isSel = selectedSlot === slot.hour;
                          return (
                            <button
                              key={slot.hour}
                              type="button"
                              onClick={() => setSelectedSlot(slot.hour)}
                              className={`p-2.5 rounded-xl border text-center cursor-pointer transition-colors ${
                                isSel
                                  ? theme === 'night'
                                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                                    : 'bg-[#A2B29F]/15 border-[#546251] text-[#2C362B] font-semibold'
                                  : theme === 'night'
                                    ? 'bg-natural-ink/20 border-white/5 text-zinc-300 hover:bg-neutral-800'
                                    : 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100'
                              }`}
                            >
                              <span className="block text-sm font-semibold">{slot.hour}</span>
                              <span className={`text-[8px] font-mono uppercase tracking-widest ${
                                isSel ? 'text-natural-accent' : 'text-zinc-500'
                              }`}>{slot.period}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Active reservation feedback line */}
                    {selectedSlot && (
                      <div className={`p-3.5 rounded-xl border border-dashed text-xs flex items-center gap-2.5 ${
                        theme === 'night' 
                          ? 'bg-[#1e2a1e]/40 border-emerald-500/30 text-emerald-400' 
                          : 'bg-[#EAF2E9] border-emerald-500/20 text-emerald-800'
                      }`}>
                        <IconCalendar className="w-4 h-4 shrink-0 text-natural-accent animate-pulse" />
                        <span>
                          Tu Sesión: <strong>{availableDays[selectedDay].full} a las {selectedSlot}</strong> de forma virtual por Meet / Zoom.
                        </span>
                      </div>
                    )}

                  </div>

                  {/* Right Column: Contact Details & Submit form */}
                  <form onSubmit={handleSmartBookingSubmit} className="lg:col-span-5 flex flex-col gap-4">
                    <h4 className={`text-[10px] font-mono tracking-wider uppercase mb-0 ${
                      theme === 'night' ? 'text-zinc-400' : 'text-[#8C7851]'
                    }`}>
                      3. Introduce tus Datos:
                    </h4>

                    <div className="flex flex-col gap-3">
                      <div>
                        <input
                          type="text"
                          required
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                          placeholder="Tu precioso nombre"
                          className={`w-full text-xs p-3 rounded-xl border focus:outline-none focus:ring-1 ${
                            theme === 'night'
                              ? 'bg-natural-ink/50 border-white/10 text-white focus:ring-natural-accent focus:border-natural-accent'
                              : 'bg-stone-50 border-[#1A1A1A]/10 text-natural-ink focus:ring-natural-accent focus:border-natural-accent'
                          }`}
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          required
                          value={bookingForm.email}
                          onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                          placeholder="Tu correo de contacto"
                          className={`w-full text-xs p-3 rounded-xl border focus:outline-none focus:ring-1 ${
                            theme === 'night'
                              ? 'bg-natural-ink/50 border-white/10 text-white focus:ring-natural-accent focus:border-natural-accent'
                              : 'bg-stone-50 border-[#1A1A1A]/10 text-natural-ink focus:ring-natural-accent focus:border-natural-accent'
                          }`}
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          required
                          value={bookingForm.whatsappNum}
                          onChange={(e) => setBookingForm({ ...bookingForm, whatsappNum: e.target.value })}
                          placeholder="Tu WhatsApp o Telegram"
                          className={`w-full text-xs p-3 rounded-xl border focus:outline-none focus:ring-1 ${
                            theme === 'night'
                              ? 'bg-natural-ink/50 border-white/10 text-white focus:ring-natural-accent focus:border-natural-accent'
                              : 'bg-stone-50 border-[#1A1A1A]/10 text-natural-ink focus:ring-natural-accent focus:border-natural-accent'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Central smart reservation button */}
                    <button
                      type="submit"
                      disabled={!selectedSlot}
                      className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 ${
                        !selectedSlot 
                          ? 'bg-neutral-500/20 text-neutral-400 cursor-not-allowed opacity-50'
                          : theme === 'night'
                            ? 'bg-natural-accent text-white hover:bg-natural-accent-hover hover:scale-[1.01]'
                            : 'bg-[#1A1A1A] text-white hover:bg-stone-900 hover:scale-[1.01]'
                      }`}
                      id="smart-booking-btn"
                    >
                      <Sparkles className="w-3.5 h-3.5 animate-spin-slow text-natural-accent" /> Confirmar Reserva Online
                    </button>

                    {/* Immediate direct WhatsApp link alternative in step 3 */}
                    <div className="relative flex items-center justify-center my-1.5">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-zinc-500/10"></div>
                      </div>
                      <span className={`relative px-3 text-[10px] font-mono uppercase tracking-widest ${
                        theme === 'night' ? 'bg-[#0f0e0d] text-zinc-500' : 'bg-white text-zinc-400'
                      }`}>
                        O bien, tu Alternativa:
                      </span>
                    </div>

                    <a
                      href={getWhatsAppLink(false)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-4 rounded-xl text-[11px] font-normal tracking-wide transition-all border text-center flex items-center justify-center gap-2 ${
                        theme === 'night'
                          ? 'bg-natural-ink/30 border-[#128C7E]/40 hover:bg-[#128C7E]/10 text-zinc-300'
                          : 'bg-white border-[#128C7E]/30 hover:bg-[#128C7E]/5 text-[1a1a1a]'
                      }`}
                      id="whatsapp-alt-btn"
                    >
                      <Send className="w-3.5 h-3.5 text-[#128C7E]" /> Consultar e iniciar Directo por WhatsApp
                    </a>

                  </form>

                </div>

              </motion.div>
            )}

            {/* STEP 4: Success Confirmed screen with WhatsApp Copy option */}
            {step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col gap-6"
              >
                <div className="text-center">
                  <div className="inline-flex justify-center p-3.5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 mb-4 animate-pulse">
                    <Check className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-light mb-2 text-natural-accent">
                    ¡Tu espacio ha sido solicitado!
                  </h3>
                  <p className={`text-sm font-light max-w-lg mx-auto ${
                    theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/75'
                  }`}>
                    ¡Muchas gracias <strong>{bookingForm.name}</strong>! Hemos registrado tu solicitud de sesión de sanación. Hemos preparado una copia de sintonía para que se la envíes a Erin de forma alternativa para recibir confirmación instantánea:
                  </p>
                </div>

                {/* Summarized compiled receipt card */}
                <div className={`p-6 rounded-2xl text-left border relative overflow-hidden ${
                  theme === 'night'
                    ? 'bg-natural-ink/40 border-white/5 text-zinc-300'
                    : 'bg-[#FDFBF7] border-natural-ink/6 text-natural-ink shadow-inner'
                }`}>
                  <span className="absolute top-3 right-3 text-[9px] font-mono uppercase tracking-widest text-emerald-700 font-semibold flex items-center gap-1 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                    <Check className="w-3 h-3" /> Reserva Inteligente Registrada
                  </span>
                  
                  <div className="flex flex-col gap-2.5 pt-3">
                    <p className="text-xs">
                      👤 <strong>Paciente:</strong> {bookingForm.name} • {bookingForm.whatsappNum}
                    </p>
                    <p className="text-xs">
                      📅 <strong>Horario de Terapia:</strong> {availableDays[selectedDay].full} • {selectedSlot}
                    </p>
                    <p className="text-xs">
                      🧿 <strong>Vía de Consulta:</strong> Sala virtual privada (Meet/Zoom)
                    </p>
                    <p className="text-xs leading-relaxed italic border-t border-natural-ink/5 pt-2.5 text-natural-accent font-serif">
                      "Cargando bloqueo de: {problem}."
                    </p>
                  </div>
                </div>

                {/* Main Action WhatsApp send copied booking coordinate */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
                  <a
                    href={getWhatsAppLink(true)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] transition-transform w-full sm:w-auto text-center bg-[#128C7E] text-white hover:bg-[#0b5b52]"
                    id="submit-coordinate-whatsapp"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Enviar Confirmación por WhatsApp
                  </a>

                  <button
                    onClick={restartQuiz}
                    className={`py-3.5 px-6 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 cursor-pointer transition-colors w-full sm:w-auto text-center ${
                      theme === 'night'
                        ? 'border-white/10 text-zinc-400 hover:text-white hover:bg-white/5'
                        : 'border-natural-ink/15 text-natural-ink hover:bg-[#1A1A1A]/5'
                    }`}
                    id="restart-quiz-btn"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Agendar otra cita o volver a empezar
                  </button>
                </div>

                <div className={`mt-2 flex items-center justify-center gap-2 text-[10px] ${
                  theme === 'night' ? 'text-zinc-500' : 'text-stone-400'
                }`}>
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Tu proceso diagnóstico y tus datos son 100% seguros y privados</span>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
