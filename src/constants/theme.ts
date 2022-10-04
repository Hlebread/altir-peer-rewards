import { Theme } from '../types';

export const THEME: Theme = {
  palette: {
    common: {
      white: '#fff',
      black: '#000',
    },
    primary: {
      light: '#fff',
      main: '#f5f1ee',
      dark: '#e4e2df',
      contrastText: '#000',
    },
    secondary: {
      light: '#808080',
      main: '#b39e8a',
      dark: '#998673',
      contrastText: '#000',
    },
    error: {
      light: '#e74c4c',
      main: '#d32f2f',
      dark: '#c62828',
      contrastText: '#fff',
    },
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
      thin: '100',
      extraLight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
      heavy: '900',
    },
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
