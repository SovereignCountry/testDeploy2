'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typograpthy from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Cards from './Cards';
import custom_values from '../custom_values';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        backgroundImage: "url('/img/hearts_bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        padding: `0px ${custom_values.mobile_padding_x}px`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: {
            xs: '30px',
            md: '60px',
          },
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: custom_values.container_home,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            gap: '10px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Typograpthy
            variant="h3"
            component="h3"
            sx={{
              fontSize: {
                xs: '14px',
                sm: '18px',
                md: '18px',
              },
              fontWeight: '800',
              color: '#B5BBCD',
              textTransform: 'uppercase',
            }}
          >
            Beyond the 5 love languages​
          </Typograpthy>
          <Typograpthy
            variant="h1"
            component="h1"
            sx={{
              fontSize: {
                xs: '30px',
                sm: '54px',
                md: '54px',
              },
              fontWeight: '800',
              background: 'linear-gradient(to right, #2660F5, #F52671)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Discover your unique Love Style
          </Typograpthy>
          <Typograpthy
            variant="h2"
            component="h2"
            sx={{
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '16px',
              },
              fontWeight: '400',
              color: custom_values.colors.contrastText,
            }}
          >
            The latest research shows there are more than 5 love languages. There are actually 8
            unique ways of expressing love that shape how we interact with those around us.
          </Typograpthy>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: {
              xs: 'column-reverse',
              md: 'column',
            },
            width: '100%',
            gap: {
              xs: '30px',
              md: '60px',
            },
          }}
        >
          <Cards />

          <Link
            href="/quiz"
            // variant="contained"
            sx={{
              cursor: 'pointer',
              textDecoration: 'none',
              width: 'fit-content',
              backgroundColor: custom_values.colors.pink_1,
              boxShadow: `0px 4px 20px ${custom_values.colors.pink_1}`,
              padding: '14px 66px',
              borderRadius: '333px',
              color: 'white',
              fontSize: {
                xs: '16px',
                md: '21px',
              },
              fontWeight: '700',
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: custom_values.colors.pink_1,
                boxShadow: `0px 4px 20px ${custom_values.colors.pink_1}`,
              },
            }}
          >
            Start the FREE Test
          </Link>
        </Box>

        <Typograpthy
          variant="body1"
          component="p"
          sx={{
            padding: '40px',
            backgroundColor: custom_values.colors.g_1,
            borderRadius: '20px',
            marginY: '80px',
          }}
        >
          Love is complex. Over three decades ago, Dr. Gary Chapman made a significant stride in
          this arena with his ‘5 Love Languages’ test, a concept that helped millions navigate their
          relationships. It’s been over 3 decades since the Love Language test was born, in the
          1980s. Critics of the original 5 Love Language test point out that the theory was founded
          on a relatively homogenous and limited demographic – specifically, married, heterosexual,
          Christian couples. These critics argue that this foundation does not adequately cater to
          the diverse dynamics and needs inherent in today’s varied landscape of relationships.
          <br />
          <br />
          In response to the need for a more comprehensive, in-depth, and nuanced perspective on
          love, we’ve developed BlossomUp’s 8 Expressions of Love test. This unique model is
          designed to capture a wider range of the emotional, intellectual, and physical expressions
          of love that exist in our diverse and ever-evolving society. <br />
          <br />
          Our main categories and their respective sub-categories offer a more personalized
          understanding of love, recognizing the multifaceted ways in which individuals experience
          and express this profound emotion. It’s not a replacement of the original 5 Love Languages
          test, but an expansion that reflects the vast spectrum of love in all its forms. <br />
          <br />
          The Five Love Languages® is a registered trademark of The Moody Bible Institute of
          Chicago, which has no affiliation with BlossomUp, the 8 Expressions of Love, or this site.
        </Typograpthy>
      </Box>
    </Box>
  );
};

export default HomePage;
