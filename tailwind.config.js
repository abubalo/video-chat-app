/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primaryGlow: 'radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0))',
        secondaryGlow: 'linear-gradient( to bottom right, rgba(1, 65, 255, 0),rgba(1, 65, 255, 0), rgba(1, 65, 255, 0.3))',
        backgroundStartRGB: "rgb(214, 219, 220)",
        backgroundEndRGB: "rgb(255, 255, 255)",
        brightRed: 'hsl(12, 80%, 59%)',
        lightWhite: 'hsl(0, 0%, 100%, 0.102)'
      },
      height: {
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
      spacing: {
        sm: '0.2rem',
        perc: '90%'
      }
    },
  },
  plugins: [],
}
