import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
     "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: []
}

export default config
