import { TextStyle } from 'react-native';

export const THEME = {
  palette: {
    common: {
      white: '#fff',
      black: '#000',
    },
    primary: {
      light: '#ffffff',
      main: '#e4e2df',
      dark: '#f5f1ee',
    },
    secondary: {
      light: '#e4e2df',
      main: 'gray',
      dark: '#000000',
    },
    tertiary: {
      light: '#b39e8a',
      main: '#e4e2df',
      dark: '#998673',
    },
    error: '#e74c4c',
    background: {
      light: '#fff',
      main: '#f5f1ee',
      dark: '#000',
    },
  },
  font: {
    size: {
      xs: 8,
      sm: 12,
      md: 16,
      lg: 18,
      xl: 20,
    },
    weight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '700',
      bold: '900',
    } as { [key: string]: TextStyle['fontWeight'] },
  },
  spacing: {
    xs: 3,
    sm: 6,
    md: 16,
    lg: 20,
    xl: 32,
  },
  shape: 10,
};
