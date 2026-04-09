import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2f6b2f',
          dark: '#15351a',
          sand: '#f5f0e6'
        }
      }
    }
  },
  plugins: []
};

export default config;
