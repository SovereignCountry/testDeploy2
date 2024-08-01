import * as React from 'react';
import Box from '@mui/material/Box';

interface InternalWindowType {
  children: React.ReactNode;
  isInternalWindowShow: boolean;
}

const InternalWindow = ({ children, isInternalWindowShow }: InternalWindowType) => {
  return (
    <>
      {isInternalWindowShow && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // position: 'absolute',
            height: {
              xs: 'fit-content',
              md: '100%',
            },
            width: '100%',
            top: '0px',
            zIndex: '1',
            backgroundColor: 'white',
          }}
        >
          {children}
        </Box>
      )}
    </>
  );
};

export default InternalWindow;
