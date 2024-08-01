import * as React from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  MenuProps,
  InputBase,
  Box,
  Typography,
} from '@mui/material';

import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import custom_values from '../custom_values';

interface SelectorCustomProps {
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

const customMenuProps: Partial<MenuProps> = {
  PaperProps: {
    sx: {
      maxHeight: 300,
      marginTop: '-10px',
      backgroundColor: 'white',
      border: `2px solid ${custom_values.colors.blue_2}`,
      borderTop: 'none',
      borderRadius: '0px',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      padding: '0px',
    },
  },
};

const CustomInput = (props: any) => (
  <InputBase
    {...props}
    sx={{
      backgroundColor: 'white',
      border: `2px solid ${custom_values.colors.blue_2}`,
      borderRadius: '10px',
      //   width: 150,
      padding: '8px 12px',
      '&:hover': {
        borderColor: custom_values.colors.blue_3,
      },
      '&.Mui-focused': {
        borderColor: custom_values.colors.blue_2,
      },
      '& .MuiSelect-icon': {
        color: custom_values.colors.blue_2,
      },
    }}
  />
);

const SelectorCustom: React.FC<SelectorCustomProps> = ({
  label,
  placeholder,
  options,
  value,
  onChange,
}) => {
  return (
    <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', gap: '6px' }}>
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: '700',
          color: custom_values.colors.g_2,

          textTransform: 'uppercase',
        }}
      >
        {label}
      </Typography>
      <FormControl variant="outlined">
        <Select
          sx={{ minWidth: '30px!important' }}
          displayEmpty
          value={value}
          onChange={onChange}
          MenuProps={customMenuProps as MenuProps}
          IconComponent={KeyboardArrowDown}
          input={<CustomInput />}
          renderValue={(selected) => {
            if (selected === '') {
              return <Typography sx={{ color: '#999' }}>{placeholder}</Typography>; // Custom color for the placeholder
            }
            return options.find((option) => option.value === selected)?.label;
          }}
        >
          <MenuItem
            disabled
            value=""
            sx={{
              display: 'none',
            }}
          >
            {placeholder}
          </MenuItem>
          {options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                '&.MuiMenuItem-root': {
                  backgroundColor: 'white',
                },
                '&:hover': {
                  backgroundColor: custom_values.colors.blue_0,
                },
                '&.Mui-selected': {
                  backgroundColor: custom_values.colors.blue_0,
                  '&:hover': {
                    backgroundColor: custom_values.colors.blue_0,
                  },
                },
                fontWeight: '400',
                fontSize: '16px',
                padding: '8px 12px',
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectorCustom;
