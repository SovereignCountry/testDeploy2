import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import custom_values from '../custom_values'; // Adjust the path if necessary

// Define the types for the component props
interface CheckboxCustomProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: custom_values.colors.g_2,
  '&.Mui-checked': {
    color: custom_values.colors.blue_1,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 28,
  },
}));

const CheckboxCustom: React.FC<CheckboxCustomProps> = ({ label, checked, onChange }) => {
  return (
    <FormControlLabel
      control={
        <CustomCheckbox
          checked={checked}
          onChange={onChange}
          inputProps={{ 'aria-label': 'custom checkbox' }}
        />
      }
      label={label}
      sx={{
        color: custom_values.colors.g_2,
        fontSize: '16px',
        fontWeight: '400',
      }}
    />
  );
};

export default CheckboxCustom;
