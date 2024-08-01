'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typograpthy from '@mui/material/Typography';
import { useMediaQuery, useTheme } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import custom_values from '../custom_values';

interface ListTypes {
  id: string;
  heartColor: 'blue' | 'purple' | 'green';
  text: string;
}

const mockList: ListTypes[] = [
  {
    id: '1',
    heartColor: 'blue',
    text: 'Discover your unique signature for giving and receiving love with our love test.',
  },
  {
    id: '2',
    heartColor: 'purple',
    text: 'Improve your relationship - with your partner, with friends, family, and most importantly with yourself.',
  },
  {
    id: '3',
    heartColor: 'green',
    text: 'Know yourself, grow yourself - learn how to grow into the highest version of you.',
  },
];

const correspontColors = {
  blue: '#2660F5',
  purple: '#A23DD2',
  green: '#2FD79B',
};

const Cards = () => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        gap: {
          xs: '20px',
          md: '40px',
        },
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
      }}
    >
      {mockList.map((el: ListTypes) => (
        <Box
          sx={{
            display: 'flex',
            gap: '15px',
            flex: '1',
            backgroundColor: custom_values.colors.g_1,
            padding: {
              xs: '10px 15px',
              md: '20px 30px',
            },
            borderRadius: '20px',
          }}
          key={el.id}
        >
          <FavoriteIcon sx={{ color: correspontColors[el.heartColor] }} />

          <Typograpthy
            variant="subtitle1"
            component="p"
            sx={{ fontSize: '16px', fontWeight: '400', color: custom_values.colors.contrastText }}
          >
            {el.text}
          </Typograpthy>
        </Box>
      ))}
    </Box>
  );
};

export default Cards;
