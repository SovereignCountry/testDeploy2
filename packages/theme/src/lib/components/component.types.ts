import {
  type ComponentsOverrides,
  type ComponentsProps,
  type ComponentsVariants,
  type Theme,
} from '@mui/material';

export type MuiComponent<T extends string> = {
  defaultProps?: T extends keyof ComponentsProps ? ComponentsProps[T] : undefined;
  styleOverrides?: T extends keyof ComponentsOverrides<Theme>
    ? ComponentsOverrides<Theme>[T]
    : undefined;
  variants?: T extends keyof ComponentsVariants<Theme> ? ComponentsVariants<Theme>[T] : undefined;
};
