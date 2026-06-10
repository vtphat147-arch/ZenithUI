/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#0a0a0f',
          50: '#f8f9fa',
          100: '#1a1a2e',
          200: '#16162a',
          300: '#12122a',
          400: '#0e0e1f',
          500: '#0a0a0f',
        },
        accent: {
          DEFAULT: '#667eea',
          50: '#eef2ff',
          100: '#c7d2fe',
          200: '#a5b4fc',
          300: '#818cf8',
          400: '#667eea',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        neon: {
          purple: '#a855f7',
          pink: '#ec4899',
          cyan: '#06b6d4',
          green: '#00ff88',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'border-spin': 'border-spin 4s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(102, 126, 234, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(102, 126, 234, 0.5), 0 0 80px rgba(168, 85, 247, 0.2)' },
        },
        'border-spin': {
          to: { '--angle': '360deg' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #ec4899 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(102, 126, 234, 0.3)',
        'glow': '0 0 40px rgba(102, 126, 234, 0.4)',
        'glow-lg': '0 0 60px rgba(102, 126, 234, 0.5)',
        'glow-purple': '0 0 40px rgba(168, 85, 247, 0.4)',
        'glow-pink': '0 0 40px rgba(236, 72, 153, 0.4)',
        'card-hover': '0 20px 60px rgba(102, 126, 234, 0.15), 0 0 40px rgba(168, 85, 247, 0.1)',
      },
    },
  },
  plugins: [],
}
