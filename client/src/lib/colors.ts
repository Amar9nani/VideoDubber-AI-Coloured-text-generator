export const COLORS = {
  // Foreground Colors
  darkGray: '#7c7f82', // dark gray - 33%
  red: '#f04747',      // red
  green: '#95d36e',    // yellowish green
  gold: '#faa61a',     // gold
  blue: '#38a1f2',     // light blue
  pink: '#ff73fa',     // pink
  teal: '#26c6da',     // teal
  white: '#ffffff',    // white
  
  // Background Colors
  bluishBlack: '#2f3136', // bluish black
  rustBrown: '#8f5547',   // rust brown
  gray40: '#747f8d',      // grey - 40%
  gray45: '#828a97',      // grey - 45%
  gray55: '#9099a4',      // light grey - 55%
  blurple: '#5865f2',     // blurple (Discord brand color)
  gray65: '#b8c0cc',      // light grey - 65%
  creamWhite: '#f2f3f5',  // cream white
};

export const COLOR_CODES = {
  fg: {
    darkGray: '30',
    red: '31',
    green: '32',
    gold: '33',
    blue: '34',
    pink: '35',
    teal: '36',
    white: '37',
  },
  bg: {
    bluishBlack: '40',
    rustBrown: '41',
    gray40: '42',
    gray45: '43',
    gray55: '44',
    blurple: '45',
    gray65: '46',
    creamWhite: '47',
  },
};

export type ColorName = keyof typeof COLORS;
export type ColorType = 'fg' | 'bg';
