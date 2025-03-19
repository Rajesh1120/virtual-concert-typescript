import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      backgroundAlt: string;
      backgroundDark: string;
      primaryDark: string;
      border: string;
      text: string;
      textSecondary: string;
      mainColor:string;
    }
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
    background: '#ffffff',
    backgroundAlt: '#f5f5f5',
    backgroundDark: '#1a1a1a',
    primaryDark: '#333333',
    border: '#dddddd',
    text: '#000000',
    mainColor: '#e31c79',
    textSecondary: '#666666',
  },
};
