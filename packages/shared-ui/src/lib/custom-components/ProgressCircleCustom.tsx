'use client';

import * as React from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import custom_values from '../custom_values';

type ProgressCircleCustomType = {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  size: number;
  onLoadingDone?: () => void;
};

type CircularWithValueLabelType = CircularProgressProps & {
  value: number;
  size: number;
};

function CircularWithValueLabel(props: CircularWithValueLabelType) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress thickness={2} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{
            color: custom_values.colors.contrastText,
            fontWeight: '700',
            fontSize: '20px',
          }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function ProgressCircleCustom(props: ProgressCircleCustomType) {
  const { progress, setProgress, onLoadingDone } = props;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          if (onLoadingDone) onLoadingDone();
          clearInterval(timer);
          return 100; // or return 0 if you want to reset
        }
        return prevProgress + 10;
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, [setProgress]);

  return <CircularWithValueLabel value={progress} {...props} />;
}
