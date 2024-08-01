import { Theme as MuiTheme } from '@mui/material';

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}

export type CustomStepperProps = {
  stepsAmount: number;
  current: number;
  progress?: number;
};
