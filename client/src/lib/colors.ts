export const COLORS = {
  red: '#f04747',
  orange: '#faa61a',
  yellow: '#f1c40f',
  green: '#2ecc71',
  blue: '#3498db',
  pink: '#e91e63',
  white: '#ffffff',
  default: '#95a5a6',
};

export const COLOR_CODES = {
  fg: {
    red: '31',
    orange: '33',
    yellow: '33',
    green: '32',
    blue: '34',
    pink: '35',
    white: '37',
    default: '0',
  },
  bg: {
    red: '41',
    orange: '43',
    yellow: '43',
    green: '42',
    blue: '44',
    pink: '45',
    white: '47',
    default: '0',
  },
};

export type ColorName = keyof typeof COLORS;
export type ColorType = 'fg' | 'bg';
