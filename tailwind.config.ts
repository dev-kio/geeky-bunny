import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // colors: {},
    screens: {
      xs: '300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        primaryTwo: 'var(--primaryTwo)',
        primaryThree: 'var(--primaryThree)',
        primaryFour: 'var(--primaryFour)',
        baseZero: 'var(--baseZero)',
        baseOne: 'var(--baseOne)',
        baseTwo: 'var(--baseTwo)',
        baseThree: 'var(--baseThree)',
      },
      fontFamily: {
        bai_jamjuree: ['var(--font-bai_jamjuree)', ...fontFamily.sans],
        reggae_one: ['var(--font-reggae_one)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
