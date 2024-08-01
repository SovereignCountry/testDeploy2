import { type MuiComponent } from './component.types';

const link = {
  styleOverrides: {
    root: ({ theme }) => ({
      textAlign: 'center',
      color: '#FFFFFF',
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: 1.5,
      ':hover': {
        opacity: 0.8,
      },
      transition: 'opacity 0.3s ease-in-out',
      [theme.breakpoints.up('sm')]: {
        fontSize: '1rem',
      },
    }),
  },
  defaultProps: {
    underline: 'none',
  },
} as MuiComponent<'MuiLink'>;

export default link;
