'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import custom_values from '../custom_values';
import ProgressCircleCustom from '../custom-components/ProgressCircleCustom';
import CheckIcon from '@mui/icons-material/Check';

interface AnalyzingPageType {
  onLoadingDone?: () => void;
}

interface ListDataType {
  text: string;
  breakpoint: number;
}

const mockData: ListDataType[] = [
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', breakpoint: 25 },
  { text: 'Cras nibh velit, elementum imperdiet lectus ac', breakpoint: 50 },
  { text: 'Donec eu dolor sodales', breakpoint: 75 },
  { text: 'Integer hendrerit dui volutpat feugiat consequat', breakpoint: 100 },
];

function AnalizingPage({ onLoadingDone }: AnalyzingPageType) {
  const [progress, setProgress] = React.useState<number>(10);

  const size = 200;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        height: '100%',
      }}
    >
      <Typography
        variant="caption"
        component="p"
        sx={{
          color: custom_values.colors.contrastText,
          fontWeight: '700',
          fontSize: {
            xs: '24px',
            md: '32px',
          },
        }}
      >
        Analizing
      </Typography>

      <ProgressCircleCustom
        progress={progress}
        setProgress={setProgress}
        size={size}
        onLoadingDone={onLoadingDone}
      />

      <List sx={{ paddingBottom: '40px' }}>
        {mockData.map((el: ListDataType, index: number) => (
          <ListItem
            sx={{
              textAlign: {
                xs: 'flex-start',
                md: 'center',
              },
              justifyContent: {
                xs: 'flex-start',
                md: 'center',
              },
              fontSize: {
                sm: '14px',
                md: '16px',
              },
              fontWeight: '500',
            }}
            key={`LIL_${index}`}
          >
            <Box
              sx={{
                display: 'flex',
                width: '28px',
                justifyContent: 'center',
                marginRight: '10px',
              }}
            >
              {progress >= el.breakpoint ? (
                <CheckIcon sx={{ color: custom_values.colors.green_1 }} />
              ) : (
                <CircularProgress size={20} sx={{ color: custom_values.colors.g_3 }} />
              )}
            </Box>

            {el.text}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default AnalizingPage;
