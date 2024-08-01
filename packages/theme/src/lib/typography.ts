import { TypographyOptions } from '@mui/material/styles/createTypography';
import { Poppins } from 'next/font/google';
import { Palette } from '@mui/material';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
});

const typography: (palette: Palette) => TypographyOptions = (palette) => ({
  fontFamily: poppins.style.fontFamily,
  button: { color: palette.primary.contrastText, fontWeight: 'bold', fontSize: '1rem' },
  h2: { color: palette.info.contrastText },
  h3: { color: palette.info.contrastText },
  h1: { color: palette.info.contrastText },
  h4: { color: palette.info.contrastText },
  h5: { color: palette.info.contrastText },
  h6: { color: palette.info.contrastText },
  body1: {
    color: palette.secondary.light,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    [`@media screen and (min-width:768px)`]: {
      fontSize: '1rem',
    },
  },
  body2: { color: palette.secondary.light },
  allVariants: {
    textAlign: 'center',
  },
  fontSize: 13,
});

export default typography;
