/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './*.html',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'surface': '#131313',
        'surface-dim': '#131313',
        'surface-bright': '#3a3939',
        'surface-container-lowest': '#0e0e0e',
        'surface-container-low': '#1c1b1b',
        'surface-container': '#201f1f',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#353534',
        'on-surface': '#e5e2e1',
        'on-surface-variant': '#e5beb2',
        'inverse-surface': '#e5e2e1',
        'inverse-on-surface': '#313030',
        'outline': '#ac897e',
        'outline-variant': '#5c4037',
        'surface-tint': '#ffb59c',
        'primary': '#ffb59c',
        'on-primary': '#5c1900',
        'primary-container': '#ff5708',
        'on-primary-container': '#511500',
        'inverse-primary': '#aa3600',
        'secondary': '#ffdb9f',
        'on-secondary': '#422d00',
        'secondary-container': '#ffb700',
        'on-secondary-container': '#6b4b00',
        'tertiary': '#ffb68e',
        'on-tertiary': '#542200',
        'tertiary-container': '#eb6b01',
        'on-tertiary-container': '#491d00',
        'error': '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
        'background': '#131313',
        'on-background': '#e5e2e1',
        'surface-variant': '#353534'
      },
      borderRadius: {
        'DEFAULT': '0.125rem',
        'sm': '0.125rem',
        'md': '0.25rem',
        'lg': '0.375rem',
        'xl': '0.5rem',
        '2xl': '0.75rem',
        'full': '9999px'
      },
      spacing: {
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
        'gutter': '1.5rem',
        'gutter-mobile': '1rem',
        'margin': '3rem',
        'margin-mobile': '1.25rem'
      },
      fontFamily: {
        'headline-hero': ['Oswald', 'sans-serif'],
        'headline-hero-mobile': ['Oswald', 'sans-serif'],
        'headline-lg': ['Oswald', 'sans-serif'],
        'headline-lg-mobile': ['Oswald', 'sans-serif'],
        'headline-md': ['Oswald', 'sans-serif'],
        'headline-sm': ['Oswald', 'sans-serif'],
        'title-lg': ['Montserrat', 'sans-serif'],
        'title-md': ['Montserrat', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'body-sm': ['Inter', 'sans-serif'],
        'label-caps': ['Montserrat', 'sans-serif'],
        'label-stat': ['Oswald', 'sans-serif']
      }
    }
  },
  plugins: []
};
