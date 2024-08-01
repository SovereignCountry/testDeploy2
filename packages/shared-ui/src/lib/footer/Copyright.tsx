import * as React from 'react';
import Typography from '@mui/material/Typography';

const Copyright = () => {
  return (
    <Typography
      color="primary.contrastText"
      marginBlockStart="1.25rem"
      sx={{ margin: '0px', fontWeight: '500', textWrap: 'wrap', textAlign: 'center' }}
    >
      Copyright &copy;&nbsp;{new Date().getFullYear()}&nbsp;BlossomUp. All rights reserved.
    </Typography>
  );
};

export default Copyright;
