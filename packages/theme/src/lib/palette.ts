import { PaletteOptions } from '@mui/material';

const palette = {
  primary: {
    main: '#2660F514',
    '100': '#F7F8FD',
    '400': '#2660F514',
    contrastText: '#FFFFFF',
    light: '#2FD79B',
  },
  error: {
    main: '#F52671',
    '100': '#F52671',
  },
  info: {
    main: '#2660F514',
    '100': '#101117',
    contrastText: '#101117',
  },
  secondary: { main: '#2660F5', dark: '#1B234D', light: '#56596B' },
  action: {
    disabledBackground: 'none',
  },
  text: { secondary: '#E7EBFF' },
} as PaletteOptions;

export default palette;
