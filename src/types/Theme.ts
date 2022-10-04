import { TextStyle } from 'react-native';

export interface CommonColors {
  black: string;
  white: string;
}

export interface PaletteColor {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export interface PaletteBackground {
  light: string;
  main: string;
  dark: string;
}

export interface Palette {
  common: CommonColors;
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  background: PaletteBackground;
}

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type FontSize = {
  [key in Size]: number;
};

export interface FontWeight {
  thin: TextStyle['fontWeight'];
  extraLight: TextStyle['fontWeight'];
  light: TextStyle['fontWeight'];
  normal: TextStyle['fontWeight'];
  medium: TextStyle['fontWeight'];
  semiBold: TextStyle['fontWeight'];
  bold: TextStyle['fontWeight'];
  extraBold: TextStyle['fontWeight'];
  heavy: TextStyle['fontWeight'];
}

export interface Font {
  size: FontSize;
  weight: FontWeight;
}

export type Spacing = {
  [key in Size]: number;
};

export interface Theme {
  palette: Palette;
  font: Font;
  spacing: Spacing;
  shape: number;
}
