'use client';
import { createTheme } from '@mui/material/styles';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

import breakpoints from './breakpoints';
import { MuiButton, MuiLinearProgress } from './components';

export const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  components: {
    MuiButton,
    MuiLinearProgress,
  },
  breakpoints,
});
