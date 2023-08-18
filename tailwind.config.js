/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'pulangred':'#630b3c',
        'guray':'hsl(217.89,10.61%,64.9%)',
        'light-guray' : '#f3f4f6'
      },
    },
  },
  plugins: [],
}

