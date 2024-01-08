import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    options: { customProperties: true }, // Ermöglicht die Verwendung von Theme-Farben als CSS-Variablen
    themes: {
      light: {
        primary: '#1976D2', 
        secondary: '#424242', 
        accent: '#82B1FF', 
      },
      dark: {
        primary: '#2196F3', 
        secondary: '#1E1E1E', 
        accent: '#FF4081', 
      }
    }
  }
});
