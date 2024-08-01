import { type MuiComponent } from './component.types';

const linearProgress = {
  styleOverrides: {
    bar: ({ theme }) => ({
      backgroundColor: theme.palette.secondary.main,
    }),
    root: ({ theme }) => ({
      backgroundColor: theme.palette.text.secondary,
    }),
  },
} as MuiComponent<'MuiLinearProgress'>;

export default linearProgress;
