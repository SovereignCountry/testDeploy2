'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typograpthy from '@mui/material/Typography';
import custom_values from '../custom_values';
import InputCustom from '../custom-components/InputCustom';
import ButtonCustom from '../custom-components/ButtonCustom';
import SliderCustom from '../custom-components/SliderCustom';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

interface SocialDataType {
  img: string;
}

const mockSocialData: SocialDataType[] = [
  {
    img: './img/apple_ico.svg',
  },
  {
    img: './img/google_ico.svg',
  },
  {
    img: './img/facebook_ico.svg',
  },
];

const AnalysisReadyPage = () => {
  const router = useRouter()
  // const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push('/payment')
    console.log('submit');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: `0px ${custom_values.mobile_padding_x}px`,
        paddingBottom: '100px',
        gap: {
          xs: '50px',
          md: '100px',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          maxWidth: custom_values.container_login,
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Typograpthy
          variant="h1"
          component="h1"
          sx={{
            color: custom_values.colors.contrastText,
            fontSize: {
              xs: '24px',
              sm: '32px',
            },
            fontWeight: '700',
          }}
        >
          The analysis is ready 
        </Typograpthy>

        <Box
          sx={{
            marginTop: {
              xs: '10px',
              sm: '20px',
            },
            marginBottom: {
              xs: '100px',
              sm: '0px',
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            gap: '20px',
            padding: '40px 0px',
            backgroundColor: custom_values.colors.g_1,
            borderRadius: '30px',
          }}
        >
          <Typograpthy
            variant="subtitle1"
            component="p"
            sx={{
              color: custom_values.colors.g_2,
              fontSize: {
                xs: '12px',
                sm: '16px',
              },
              fontWeight: '400',
              textAlign: 'center',
            }}
          >
            Please enter your name and email. <br />
            We will send an email with access to view your test scores.
          </Typograpthy>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              maxWidth: {
                xs: '100%',
                sm: '400px',
              },
              paddingX: {
                xs: '20px',
                sm: '0xp',
              },
              gap: '20px',
            }}
          >
            <InputCustom type="text" label="NAME AND SURNAME" placeholder="John Smith" />
            <InputCustom type="email" label="EMAIL" placeholder="example@mail.com" />

            <Typograpthy
              variant="subtitle1"
              component="p"
              sx={{
                color: custom_values.colors.g_2,
                fontSize: '12px',
                fontWeight: '400',
              }}
            >
              Love Speak respects your privacy and does not share your personal information. By
              continuing, you agree to Love Speak's <Link href="#">Privacy Policy</Link> and{' '}
              <Link href="#">Terms of Use</Link>.
            </Typograpthy>

            <ButtonCustom onClick={() => {}} text="Continue" />

            <Typograpthy
              variant="h1"
              component="h1"
              sx={{
                color: custom_values.colors.contrastText,
                fontSize: {
                  xs: '16px',
                  sm: '18px',
                },
                fontWeight: '700',
              }}
            >
              or use
            </Typograpthy>

            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', gap: '20px', width: '100%' }}
            >
              {mockSocialData.map((el: SocialDataType, index: number) => (
                <Button
                  type="submit"
                  variant="outlined"
                  color="info"
                  sx={{ padding: '20px', borderRadius: '15px', flex: '1' }}
                  key={`MSDB_${index}`}
                >
                  <img alt="socials icon" src={el.img} />
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <SliderCustom title="Testimonials" />
    </Box>
  );
};

export default AnalysisReadyPage;
