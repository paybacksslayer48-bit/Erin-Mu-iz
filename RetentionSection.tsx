/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

interface AuraBackgroundProps {
  theme: 'night' | 'day';
}

export default function AuraBackground({ theme }: AuraBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Handle subtle interactive mouse moves for background depth
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 45,
        y: (e.clientY / window.innerHeight - 0.5) * 45,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax offsets based on scroll
  const auraY1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const auraY2 = useTransform(scrollY, [0, 1000], [0, 150]);
  const auraY3 = useTransform(scrollY, [0, 1000], [0, -80]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Glow Blob 1 */}
      <motion.div
        style={{
          y: auraY1,
          x: mousePosition.x * 0.4,
        }}
        animate={{
          scale: theme === 'night' ? [1, 1.15, 1] : [1, 1.25, 1],
          opacity: theme === 'night' ? 0.35 : 0.45,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute blur-glow-blob top-[10%] left-[-10%] md:left-[5%] w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full transition-colors duration-1000 ${
          theme === 'night' 
            ? 'bg-gradient-to-tr from-aura-violet via-aura-indigo to-transparent' 
            : 'bg-gradient-to-tr from-rose-200 via-amber-100 to-transparent'
        }`}
      />

      {/* Glow Blob 2 */}
      <motion.div
        style={{
          y: auraY2,
          x: mousePosition.x * -0.6,
        }}
        animate={{
          scale: theme === 'night' ? [1.1, 0.9, 1.1] : [1.1, 0.95, 1.1],
          opacity: theme === 'night' ? 0.25 : 0.35,
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className={`absolute blur-glow-blob top-[40%] right-[-10%] md:right-[5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full transition-colors duration-1000 ${
          theme === 'night' 
            ? 'bg-gradient-to-br from-aura-amber via-aura-rose to-transparent' 
            : 'bg-gradient-to-br from-indigo-200 via-teal-100 to-transparent'
        }`}
      />

      {/* Glow Blob 3 */}
      <motion.div
        style={{
          y: auraY3,
          x: mousePosition.x * 0.8,
        }}
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: theme === 'night' ? 0.2 : 0.3,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className={`absolute blur-glow-blob top-[75%] left-[20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full transition-colors duration-1000 ${
          theme === 'night' 
            ? 'bg-gradient-to-tr from-aura-indigo via-aura-rose to-transparent' 
            : 'bg-gradient-to-tr from-amber-100 via-red-100 to-transparent'
        }`}
      />

      {/* Grid Pattern overlay for tech-spiritual texture */}
      <div 
        className={`absolute inset-0 opacity-[0.025] transition-opacity duration-1000 ${
          theme === 'night' ? 'invert-0' : 'invert'
        }`}
        style={{
          backgroundImage: `radial-gradient(#8C7851 1.2px, transparent 1.2px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}
