import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import custom_values from '../custom_values';

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  backgroundColor: custom_values.colors.g_0,
  opacity: 1,
  flex: '1 1 auto',
  position: 'absolute',
  top: '50%',
  left: 'calc(-50% + 20px)',
  right: 'calc(50% + 20px)',
  transform: 'translateY(-50%)',
  '& .MuiLinearProgress-bar': {
    backgroundColor: custom_values.colors.blue_1,
  },
}));

const ProgressBar = ({
  current,
  step,
  progress,
}: {
  current: number;
  step: number;
  progress: number;
}) => {
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // or a placeholder like a spinner
  }

  let value = 0;
  if (current + 1 === step) {
    value = progress;
  } else if (current >= step) {
    value = 100;
  }

  return <CustomLinearProgress variant="determinate" value={value} />;
};

export default ProgressBar;
