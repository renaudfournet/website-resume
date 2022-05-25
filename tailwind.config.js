module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: '200px',
      xs: '400px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: {
          100: '#6959BB',
          200: '#373199'
        },
        secondary: {
          100: '#f97316'
        },
        whitesmoke: {
          100: '#F5F5F5'
        },
        black: {
          100: '#000000'
        },
        white: {
          100: '#fcfcfc'
        },
        red: {
          100: '#272727'
        },
        hoverButton: {
          100: '#8d81c9'
        }
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem'
      }
    }
  },
  variants: { extend: {} },
  plugins: []
}
