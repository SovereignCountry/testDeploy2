import { type MuiComponent } from './component.types';

const button = {
  variants: [
    {
      props: { variant: 'contained' },
      style: ({ theme }) => ({
        borderRadius: '50px',
        ':disabled': { color: theme.palette.primary.contrastText },
      }),
    },
    {
      props: { variant: 'outlined' },
      style: ({ theme }) => ({
        borderRadius: '15px',
        color: theme.palette.info.contrastText,
        fontWeight: 500,
        backgroundColor: theme.palette.primary.contrastText,
        ':hover': {
          borderColor: `${theme.palette.info.main}32`,
        },
        ':active': {
          borderColor: `${theme.palette.info.main}32`,
        },
      }),
    },
  ],
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      ':disabled': {
        opacity: 0.5,
      },
      '& .MuiTouchRipple-root': {
        color: `${theme.palette.primary.light}`,
      },
    }),
  },
} as MuiComponent<'MuiButton'>;

export default button;
