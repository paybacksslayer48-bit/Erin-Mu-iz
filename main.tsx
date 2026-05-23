@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-serif: "Cormorant Garamond", Georgia, serif;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-sans: "Inter", system-ui, sans-serif;

  /* Natural Tones Palette */
  --color-natural-cream: #FDFBF7;
  --color-natural-ink: #1A1A1A;
  --color-natural-accent: #8C7851;
  --color-natural-accent-hover: #756341;
  --color-natural-soft-border: rgba(26, 26, 26, 0.08);
  --color-natural-glass: rgba(255, 255, 255, 0.65);

  /* Overrides for day/night dynamic mapping to keep things extremely beautiful */
  --color-cosmic-bg: #191816; /* Deep organic obsidian sand */
  --color-healing-bg: #FDFBF7; /* Natural Cream */

  /* Aura/Energy Glow colors adjusted for natural elements */
  --color-aura-violet: #8C7851;
  --color-aura-indigo: #B59F78;
  --color-aura-amber: #EAD0B3;
  --color-aura-rose: #D9C3A5;
  --color-aura-teal: #A2B29F;
}

@layer base {
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: var(--font-sans);
    transition: background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Custom styled scrollbars */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(140, 120, 81, 0.25);
    border-radius: 9999px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(140, 120, 81, 0.45);
  }
}

/* Dynamic smooth interactive lighting classes */
.blur-glow-blob {
  filter: blur(100px);
  will-change: transform, opacity;
  pointer-events: none;
}

/* Glassmorphism utility helpers */
.glass-panel {
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.text-gradient-cosmic {
  background: linear-gradient(135deg, #8C7851 0%, #B59F78 45%, #D9C3A5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-sunrise {
  background: linear-gradient(135deg, #1A1A1A 0%, #8C7851 60%, #B59F78 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Parallax slow zoom on hover */
.zoom-parallax {
  overflow: hidden;
}
.zoom-parallax img {
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.zoom-parallax:hover img {
  transform: scale(1.06);
}
