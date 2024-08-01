'use client';

import * as React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Container, Typography, Card, Avatar, Box, useMediaQuery, Theme } from '@mui/material';
import { styled } from '@mui/system';
import custom_values from '../custom_values';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
  {
    name: 'Name Surname',
    image: 'https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg',
    rating: 5,
    text: "Love is complex. Over three decades ago, Dr. Gary Chapman made a significant stride in this arena with his '5 Love Languages' test, a concept that helped millions navigate their relationships. Hellow some text doll asd",
  },
  {
    name: 'Name Surname',
    image: 'https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg',
    rating: 5,
    text: "Love is complex. Over three decades ago, Dr. Gary Chapman made a significant stride in this arena with his '5 Love Languages' test, a concept that helped millions navigate their relationships.",
  },
  {
    name: 'Name Surname',
    image: 'https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg',
    rating: 3,
    text: "Love is complex. Over three decades ago, Dr. Gary Chapman made a significant stride in this arena with his '5 Love Languages' test, a concept that helped millions navigate their relationships.",
  },
  {
    name: 'Name Surname',
    image: 'https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg',
    rating: 5,
    text: "Love is complex. Over three decades ago, Dr. Gary Chapman made a significant stride in this arena with his '5 Love Languages' test, a concept that helped millions navigate their relationships.",
  },
  {
    name: 'Name Surname',
    image: 'https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg',
    rating: 5,
    text: "Love is complex. Over three decades ago, Dr. Gary Chapman made a significant stride in this arena with his '5 Love Languages' test, a concept that helped millions navigate their relationships.",
  },
  {
    name: 'Name Surname',
    image: 'https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg',
    rating: 5,
    text: "Love is complex. Over three decades ago, Dr. Gary Chapman made a significant stride in this arena with his '5 Love Languages' test, a concept that helped millions navigate their relationships.",
  },
  {
    name: 'Name Surname',
    image: 'https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg',
    rating: 5,
    text: "Love is complex. Over three decades ago, Dr. Gary Chapman made a significant stride in this arena with his '5 Love Languages' test, a concept that helped millions navigate their relationships.",
  },
];

const StyledButtonLeft = styled(ButtonBack)({
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent',
  color: custom_values.colors.contrastText,
  borderWidth: '2px',
  borderColor: custom_values.colors.green_1,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '22px',
  '&:hover': {
    borderColor: custom_values.colors.green_1,
    backgroundColor: custom_values.colors.green_0,
  },
  '&:active': {
    borderColor: custom_values.colors.green_1,
    backgroundColor: custom_values.colors.green_0,
  },
});

const StyledButtonRight = styled(ButtonNext)({
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent',
  color: custom_values.colors.contrastText,
  borderWidth: '2px',
  borderColor: custom_values.colors.green_1,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '22px',
  '&:hover': {
    borderColor: custom_values.colors.green_1,
    backgroundColor: custom_values.colors.green_0,
  },
  '&:active': {
    borderColor: custom_values.colors.green_1,
    backgroundColor: custom_values.colors.green_0,
  },
});

const StarRating = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

const Star = styled('span')({
  color: '#FFD700', // Gold color
  fontSize: '1.2rem',
  marginRight: '0.2rem',
});

const DotsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  '& button': {
    border: 'none',
    backgroundColor: custom_values.colors.blue_3,
    borderRadius: '50%',
    width: '12px',
    height: '12px',
    margin: '0 5px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: custom_values.colors.blue_1,
    },
    '&:focus': {
      outline: 'none',
    },
    '&.carousel__dot--selected': {
      backgroundColor: custom_values.colors.blue_1,
    },
  },
});

interface SliderCustomType {
  title: string;
}

const SliderCustom = ({ title }: SliderCustomType) => {
  const [hydrated, setHydrated] = React.useState(false);
  const matches_md = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const matches_sm = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  const handleSlideWidth = () => {
    if (matches_md) return 140;
    if (matches_sm) return 50;
    return 120;
  };

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // or a loader/spinner
  }

  return (
    <Container>
      <Typography
        variant="h5"
        sx={{
          paddingBottom: '20px',
          color: custom_values.colors.contrastText,
          fontSize: {
            xs: '24px',
            sm: '32px',
          },
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={handleSlideWidth()}
        totalSlides={testimonials.length}
        visibleSlides={matches_md ? 3 : 1}
        infinite
      >
        <Box
          sx={{
            // height: '100%',
            // width: '100%',
            // flexDirection: {
            //   xs: 'column',
            //   md: 'row',
            // },
            display: 'flex',
            alignItems: 'center',

            justifyContent: 'center',
            gap: '40px',
          }}
        >
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'block',
              },
            }}
          >
            <StyledButtonLeft>
              <ArrowBackIosNewIcon />
            </StyledButtonLeft>
          </Box>

          <Box sx={{ flex: '1', maxWidth: '100%' }}>
            <Box
              sx={{
                width: '100%',
                display: {
                  xs: 'flex',
                  md: 'none',
                },
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                paddingBottom: '20px',
              }}
            >
              <StyledButtonLeft>
                <ArrowBackIosNewIcon />
              </StyledButtonLeft>

              <StyledButtonRight>
                <ArrowForwardIos />
              </StyledButtonRight>
            </Box>

            <Slider>
              {testimonials.map((testimonial, index) => (
                <Slide index={index} key={index}>
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      margin: '0px 10px',
                      padding: {
                        xs: '15px 10px',
                        md: '30px 20px',
                      },
                      textAlign: 'center',
                      borderRadius: '20px',
                      backgroundColor: custom_values.colors.g_1,
                      boxShadow: 'none',
                      gap: '10px',
                    }}
                  >
                    <Avatar
                      src={testimonial.image}
                      sx={{ width: 70, height: 70, margin: '0 auto' }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: '700',
                        color: custom_values.colors.contrastText,
                        fontSize: {
                          xs: '16px',
                          md: '18px',
                        },
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <StarRating>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i}>★</Star>
                      ))}
                    </StarRating>
                    <Typography
                      variant="body2"
                      sx={{
                        color: custom_values.colors.g_2,
                        fontSize: {
                          xs: '14px',
                          md: '16px',
                        },
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: {
                          xs: 5,
                          md: 8,
                        },
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {testimonial.text}
                    </Typography>
                  </Card>
                </Slide>
              ))}
            </Slider>
          </Box>

          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'block',
              },
            }}
          >
            <StyledButtonRight>
              <ArrowForwardIos />
            </StyledButtonRight>
          </Box>
        </Box>

        <DotsContainer>
          {testimonials.map((_, index) => (
            <Dot slide={index} key={index} />
          ))}
        </DotsContainer>
      </CarouselProvider>
    </Container>
  );
};

export default SliderCustom;
