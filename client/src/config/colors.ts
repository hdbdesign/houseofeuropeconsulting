// Brand color palette based on client's brand identity
export const brandColors = {
  // Primary brand color - Cyan
  primary: {
    main: '#00E5E5', // cyan
    light: '#33EAEA',
    dark: '#00B3B3',
  },
  
  // Secondary brand colors
  secondary: {
    main: '#000000', // Black background
    light: '#1A1A1A',
    dark: '#000000',
  },
  
  // Accent colors from brand guide
  accent: {
    navy: {
      main: '#0F2E5B',
      light: '#1A4A8F',
      dark: '#091C38',
    },
    red: {
      main: '#FF214B',
      light: '#FF4D6E',
      dark: '#CC1A3C',
    },
    white: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#F0F0F0',
    }
  },
  
  // Background theme colors
  background: {
    light: '#FFFFFF',
    dark: '#000000',
  },
  
  // For all hex values, also included as RGB
  rgb: {
    primary: '0, 229, 229',
    secondary: '0, 0, 0',
    navy: '15, 46, 91',
    red: '255, 33, 75',
    white: '255, 255, 255',
  }
};

export default brandColors; 