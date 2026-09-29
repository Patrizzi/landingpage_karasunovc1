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
        // --- PALETA DE FONDOS Y SUPERFICIES (Gris Asfalto / Carbón Deportivo) ---
        'background': '#18191c',                 // Fondo base general: gris carbón oscuro, adiós al negro puro
        'on-background': '#f1f3f5',              // Texto principal sobre fondo base
        
        'surface': '#18191c',                    // Superficie base
        'surface-dim': '#141518',                // Superficie atenuada
        'surface-bright': '#383a42',             // Superficie iluminada
        
        'surface-container-lowest': '#121316',   // Nivel más profundo para secciones de contraste (Hero, Footer)
        'surface-container-low': '#202227',      // Tarjetas principales, panel de sedes, acordeones FAQ
        'surface-container': '#282a31',          // Inputs, contenedores de iconos interactivos
        'surface-container-high': '#32353e',     // Estados hover y botones secundarios
        'surface-container-highest': '#3e414c',  // Relieves y bordes destacados
        'surface-variant': '#32353e',            // Variante de superficie
        
        'on-surface': '#f3f4f6',                 // Texto principal de titulares y tarjetas
        'on-surface-variant': '#cbd0d8',         // Texto secundario (metadatos, párrafos, subtítulos)
        'inverse-surface': '#f1f3f5',
        'inverse-on-surface': '#18191c',
        
        'outline': '#4b4f5a',                    // Bordes sutiles y definidos
        'outline-variant': '#363942',            // Bordes tenues
        'surface-tint': '#ffb59c',
        
        // --- IDENTIDAD NARANJA Y ACENTOS (ESTRICTAMENTE INTOCABLES) ---
        'primary': '#ffb59c',
        'on-primary': '#5c1900',
        'primary-container': '#ff5708',
        'on-primary-container': '#511500',
        'inverse-primary': '#aa3600',
        'primary-fixed': '#ffdbcf',
        'primary-fixed-dim': '#ffb59c',
        'on-primary-fixed': '#390c00',
        'on-primary-fixed-variant': '#822700',
        
        'secondary': '#ffdb9f',
        'on-secondary': '#422d00',
        'secondary-container': '#ffb700',
        'on-secondary-container': '#6b4b00',
        'secondary-fixed': '#ffdea9',
        'secondary-fixed-dim': '#ffba26',
        'on-secondary-fixed': '#271900',
        'on-secondary-fixed-variant': '#5e4100',
        
        'tertiary': '#ffb68e',
        'on-tertiary': '#542200',
        'tertiary-container': '#eb6b01',
        'on-tertiary-container': '#491d00',
        'tertiary-fixed': '#ffdbca',
        'tertiary-fixed-dim': '#ffb68e',
        'on-tertiary-fixed': '#331200',
        'on-tertiary-fixed-variant': '#773300',
        
        'error': '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6'
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
        'label-stat': ['Oswald', 'sans-serif'],
        'cormorant': ['"Cormorant Garamond"', 'serif']
      }
    }
  },
  plugins: []
};
