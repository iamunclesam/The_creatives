/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spark: {
          black: "#080808",
          dark: "#0F0F10",
          card: "#141416",
          elevated: "#1B1B1E",
          border: "#26262B",
          subtle: "#33333A",
          muted: "#94949E",
          light: "#E2E2E8",
          cream: "#FAF8F5",
          orange: "#FF4600",
          "orange-hover": "#E03D00",
          "orange-glow": "#FF5E1E",
          red: "#FF2A2A",
          yellow: "#FFB800",
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        syne: ['"Plus Jakarta Sans"', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"Space Grotesk"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'spark-gradient': 'linear-gradient(135deg, #FF4600 0%, #FF8A00 50%, #FF2A2A 100%)',
        'dark-glass': 'linear-gradient(180deg, rgba(20, 20, 22, 0.7) 0%, rgba(15, 15, 16, 0.9) 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

