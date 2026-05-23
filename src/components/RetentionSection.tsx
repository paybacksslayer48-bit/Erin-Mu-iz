/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageCircle, Youtube, Facebook, ArrowUpRight, Sparkles, Heart, Flame } from 'lucide-react';

interface RetentionSectionProps {
  theme: 'night' | 'day';
}

export default function RetentionSection({ theme }: RetentionSectionProps) {
  const socialCards = [
    {
      id: "whatsapp",
      title: "Comunidad de WhatsApp",
      subtitle: "«Tribu Celestial»",
      purpose: "Espacio de contención, sintonía diaria, afirmaciones de luz y consejos espirituales inspiradores guiados de la mano de Erin.",
      cta: "Unirme a la Tribu",
      link: "https://chat.whatsapp.com/B9OxlAVM3Ft9hMCsqLip8A?mode=gi_t",
      icon: MessageCircle,
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/20 hover:border-emerald-500/40",
      btnClass: "bg-emerald-600 hover:bg-emerald-500 text-white"
    },
    {
      id: "youtube",
      title: "Vídeo-Prácticas en YouTube",
      subtitle: "Enraizamiento de 10 minutos",
      purpose: "Sesiones públicas de Reiki, meditaciones guiadas de canalización vocal y tapping para disolver la ansiedad cotidiana velozmente.",
      cta: "Iniciar Práctica de Luz",
      link: "https://www.youtube.com/watch?v=mnBnz9LWvaI",
      icon: Youtube,
      color: "from-red-500/20 to-rose-500/20 text-red-400 border-red-500/20 hover:border-red-500/40",
      btnClass: "bg-red-600 hover:bg-red-500 text-white"
    },
    {
      id: "facebook",
      title: "Comunidad de Facebook",
      subtitle: "Fuerza y Comprensión",
      purpose: "Una gran familia espiritual e interactiva para almas afines. Reflexiones terapéuticas enriquecedoras y camino grupal conjunto.",
      cta: "Unirse al Grupo",
      link: "https://www.facebook.com/groups/1200625142060897?_rdr",
      icon: Facebook,
      color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/20 hover:border-blue-500/40",
      btnClass: "bg-blue-600 hover:bg-blue-500 text-white"
    }
  ];

  return (
    <footer className="relative mt-12 overflow-hidden z-10 border-t border-zinc-500/10">
      
      {/* 3 Retention Tiles Column Wrapper */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-20">
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
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
          </motion.div>

          <h2 className={`font-serif text-3xl md:text-5xl font-light mb-6 ${
            theme === 'night' ? 'text-white' : 'text-[#1A1A1A]'
          }`}>
            Espacio de Sabiduría Libre
          </h2>
          <p className={`text-base leading-relaxed font-light ${
            theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/85'
          }`}>
            Si aún no te sientes lista para iniciar una sesión individual, te damos la bienvenida a tu propio tiempo en nuestras comunidades gratuitas de meditación y crecimiento áurico.
          </p>
        </div>

        {/* Bento/Tile Board */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {socialCards.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`p-7 rounded-[30px] border relative overflow-hidden flex flex-col justify-between transition-colors bg-gradient-to-b ${
                  theme === 'night' 
                    ? 'from-natural-ink/45 to-natural-ink/20 border-white/5' 
                    : 'from-white to-[#FDFBF7]/40 border-natural-ink/10 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Social Brand Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color}`}>
                      <Icon className="w-6 h-6 currentColor" />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-natural-accent font-semibold flex items-center gap-1 bg-[#8C7851]/10 px-2.5 py-1 rounded-full">
                      <Flame className="w-3.5 h-3.5" /> ACCESO LIBRE
                    </span>
                  </div>

                  <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                    theme === 'night' ? 'text-zinc-400' : 'text-[#8C7851]'
                  }`}>
                    {item.title}
                  </span>

                  <h3 className={`font-serif text-xl md:text-2xl font-light mt-1.5 mb-3 leading-snug ${
                    theme === 'night' ? 'text-white' : 'text-[#1A1A1A]'
                  }`}>
                    {item.subtitle}
                  </h3>

                  <p className={`text-[13px] leading-relaxed mb-8 font-light ${
                    theme === 'night' ? 'text-zinc-350' : 'text-natural-ink/75'
                  }`}>
                    {item.purpose}
                  </p>
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-md text-center flex items-center justify-center gap-2 transition-all hover:scale-[1.01] ${item.btnClass}`}
                  id={`retention-btn-${item.id}`}
                >
                  {item.cta} <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Actual Bottom Footer */}
      <div className={`border-t py-12 ${
        theme === 'night' ? 'border-white/5 bg-black/40' : 'border-natural-ink/10 bg-[#FDFBF7]/35'
      }`}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Brand Logo & Sub */}
          <div>
            <h3 className={`font-serif text-xl font-light tracking-wider leading-none mb-2 ${
              theme === 'night' ? 'text-white' : 'text-natural-ink'
            }`}>
              Erin Muñiz
            </h3>
            <p className="text-[10px] font-medium text-natural-accent uppercase tracking-widest">
              Mentor de Liberación Emocional y Sanación Energética
            </p>
          </div>

          {/* Copyrights */}
          <div className="flex flex-col items-center md:items-end">
            <p className={`text-xs font-light max-w-xs ${
              theme === 'night' ? 'text-zinc-400' : 'text-natural-ink/70'
            }`}>
              © {new Date().getFullYear()} Erin Muñiz. Todos los derechos reservados.
            </p>
            <p className="text-[10px] text-zinc-500 italic flex items-center gap-1 mt-1 leading-none justify-center">
              <Heart className="w-3 h-3 text-natural-accent fill-natural-accent animate-pulse" /> Con amor y sintonía desde el mismo corazón del cosmos.
            </p>
          </div>

        </div>
      </div>

    </footer>
  );
}
