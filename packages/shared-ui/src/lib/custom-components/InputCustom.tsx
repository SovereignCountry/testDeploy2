import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import custom_values from '../custom_values';

interface InputCustomType {
  label: string;
  placeholder: string;
  type: 'email' | 'password' | 'text';
}

const InputCustom = ({ label, placeholder, type }: InputCustomType) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        gap: '6px',
        '&:focus-within .MuiFormLabel-root': {
          color: custom_values.colors.blue_1, // Change color on focus
        },
      }}
    >
      <FormLabel
        sx={{
          color: custom_values.colors.g_2,
          fontSize: '14px',
          fontWeight: '700',
        }}
      >
        {label}
      </FormLabel>

      <InputBase
        type={type}
        placeholder={placeholder}
        sx={{
          width: '100%',
          backgroundColor: 'white',
          outline: 'none',
          border: `2px solid #2661f53e`,
          borderRadius: '10px',
          fontSize: '16px',
          padding: '10px 20px',
          '&:focus': {
            border: `2px solid #2661f53e`,
            outline: 'none',
          },
        }}
      />
    </Box>
  );
};

export default InputCustom;
