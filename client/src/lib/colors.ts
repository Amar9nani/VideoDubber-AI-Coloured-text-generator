export const COLORS = {
  red: '#f04747',
  orange: '#faa61a',
  yellow: '#f5dd42',
  green: '#43b581',
  blue: '#5865F2',
  purple: '#9b59b6',
  white: '#ffffff',
  black: '#23272A',
  default: '#747f8d',
};

export const COLOR_CODES = {
  fg: {
    red: '31',
    orange: '33',
    yellow: '33',
    green: '32',
    blue: '34',
    purple: '35',
    white: '37',
    black: '30',
    default: '0',
  },
  bg: {
    red: '41',
    orange: '43',
    yellow: '43',
    green: '42',
    blue: '44',
    purple: '45',
    white: '47',
    black: '40',
    default: '0',
  },
};

export type ColorName = keyof typeof COLORS;
export type ColorType = 'fg' | 'bg';
