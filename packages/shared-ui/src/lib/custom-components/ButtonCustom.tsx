import * as React from 'react';
import Button from '@mui/material/Button';
import custom_values from '../custom_values';

interface ButtonCustomType {
  text: string;
  width?: number;
  onClick: () => void;
}

function ButtonCustom({ text, width, onClick }: ButtonCustomType) {
  return (
    <Button
      onClick={onClick}
      type="submit"
      variant="contained"
      sx={{
        width: width ? `${width}px` : '100%',
        color: 'white',
        fontSize: '16px',
        fontWeight: '700',
        backgroundColor: custom_values.colors.green_1,
        boxShadow: 'none',
        borderRadius: '333px',
        padding: '12px',
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: custom_values.colors.green_2,
          boxShadow: 'none',
        },
      }}
    >
      {text}
    </Button>
  );
}

export default ButtonCustom;
