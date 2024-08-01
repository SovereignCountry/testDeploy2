import * as React from 'react';
import { Box, Typography } from '@mui/material';
import custom_values from '../custom_values';

const mockLogosList = [
  './img/featured_new_york_times.svg',
  './img/featured_refinery.svg',
  './img/featured_hypebae.svg',
  './img/featured_urban_list.svg',
  './img/featured_bustle.svg',
  './img/featured_well_good.svg',
  './img/featured_life_wire.svg',
];

const FeaturedIn = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        width: '100%',
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: {
            xs: '24px',
            md: '32px',
          },
          fontWeight: '700',
          color: custom_values.colors.contrastText,
        }}
      >
        Featured in
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: custom_values.container_login,
          gap: '20px',
          backgroundColor: custom_values.colors.g_1,
          borderRadius: '20px',
          padding: {
            xs: '15px 18px',
            md: '40px 76px',
          },
        }}
      >
        {mockLogosList.map((el: string, index: number) => (
          <Box
            key={`MLIK_${index}`}
            sx={{
              height: {
                xs: '25px',
                md: '45px',
              },
              width: 'fit-content',
            }}
          >
            <img alt="featured logos" src={el} height={'100%'} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedIn;
