module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/feedback.jpg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
