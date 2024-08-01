import { type MuiComponent } from './component.types';

const paper = {
  styleOverrides: {
    root: {
      backgroundColor: '#F7F8FD',
    },
  },
  defaultProps: {
    elevation: 0,
  },
} as MuiComponent<'MuiPaper'>;

export default paper;
