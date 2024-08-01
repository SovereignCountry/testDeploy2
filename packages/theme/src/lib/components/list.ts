import { type MuiComponent } from './component.types';

export const MuiList = {
  styleOverrides: {
    dense: { display: 'flex', flexDirection: 'column' },
  },
  defaultProps: { disablePadding: true },
} as MuiComponent<'MuiList'>;

export const MuiListItem = {
  defaultProps: { disablePadding: true, disableGutters: true },
};
