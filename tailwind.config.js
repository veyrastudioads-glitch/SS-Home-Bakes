/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFAF5',
          100: '#F7EFE3', // Base brand cream
          200: '#EDE0CE',
          300: '#E0CEB7',
          400: '#D1BA9E',
        },
        chocolate: {
          50: '#F9F5F3',
          100: '#ECE3DE',
          200: '#DAC7BD',
          300: '#C2A394',
          700: '#5A3225',
          800: '#4A281D',
          900: '#3A1F16', // Base deep chocolate
          950: '#241713', // Charcoal text
        },
        cocoa: {
          100: '#F5ECE7',
          300: '#D5B4A5',
          400: '#B6826D',
          500: '#935A40',
          600: '#7A4932', // Secondary cocoa brown
          700: '#623926',
        },
        caramel: {
          50: '#FCF8F1',
          100: '#F7EDDC',
          200: '#EED9B8',
          300: '#DEC090',
          400: '#D3A96C',
          500: '#C89A5A', // Accent muted caramel-gold
          600: '#AF7F3F',
          700: '#8E632F',
        },
        wheat: {
          50: '#FBF8F0',
          100: '#F3EDDA',
          200: '#E5DAB7',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(58, 31, 22, 0.06), 0 1px 4px -1px rgba(58, 31, 22, 0.04)',
        'warm-md': '0 8px 24px -4px rgba(58, 31, 22, 0.08), 0 3px 10px -2px rgba(58, 31, 22, 0.04)',
        'warm-lg': '0 16px 36px -6px rgba(58, 31, 22, 0.12), 0 6px 16px -3px rgba(58, 31, 22, 0.06)',
        'warm-xl': '0 24px 48px -12px rgba(58, 31, 22, 0.16)',
        'gold-glow': '0 0 25px rgba(200, 154, 90, 0.25)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
}
