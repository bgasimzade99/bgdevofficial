/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070A10',
          900: '#0A0E16',
          850: '#0E131C',
          800: '#141A24',
          700: '#1E2530',
        },
        brand: {
          50: '#EAF3FF',
          100: '#CFE6FF',
          200: '#9FCBFF',
          300: '#6FB0FF',
          400: '#3B93F0',
          500: '#2277D6',
          600: '#175FB3',
          700: '#134C8F',
          800: '#0F3B6E',
          900: '#0B2C52',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #3B93F0 0%, #134C8F 100%)',
        'brand-gradient-soft': 'linear-gradient(120deg, rgba(59,147,240,0.14) 0%, rgba(19,76,143,0.14) 100%)',
        'dot-grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)',
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        'dot-grid': '30px 30px',
        'grain-size': '120px 120px',
      },
      animation: {
        'blob-a': 'blobA 22s ease-in-out infinite',
        'blob-b': 'blobB 26s ease-in-out infinite',
        'marquee': 'marquee 32s linear infinite',
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'gradient-x': 'gradientX 6s ease infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        blobA: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(60px, -40px) scale(1.15)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.95)' },
        },
        blobB: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-50px, 40px) scale(1.1)' },
          '66%': { transform: 'translate(40px, -30px) scale(0.9)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      boxShadow: {
        'brand-glow': '0 0 0 1px rgba(59,147,240,0.25), 0 8px 40px -8px rgba(59,147,240,0.4)',
      },
    },
  },
  plugins: [],
}
