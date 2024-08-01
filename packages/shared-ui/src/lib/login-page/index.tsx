'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typograpthy from '@mui/material/Typography';
import custom_values from '../custom_values';
import InputCustom from '../custom-components/InputCustom';
import CheckboxCustom from '../custom-components/CheckboxCustom';
import Link from 'next/link';
import ButtonCustom from '../custom-components/ButtonCustom';

const LoginPage = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('submit');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: `0px ${custom_values.mobile_padding_x}px`,
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
              xs: '30px',
              sm: '54px',
            },
            fontWeight: '700',
          }}
        >
          Login
        </Typograpthy>
        <Typograpthy
          variant="subtitle1"
          component="p"
          sx={{
            color: custom_values.colors.g_2,
            fontSize: {
              xs: '14px',
              sm: '16px',
            },
            fontWeight: '400',
            textAlign: 'center',
          }}
        >
          For ordering your personalized Love Styles Report. It's time to Blossom!
        </Typograpthy>

        <Box
          sx={{
            marginTop: {
              xs: '10px',
              sm: '40px',
            },
            marginBottom: {
              xs: '100px',
              sm: '0px',
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            padding: '40px 0px',
            backgroundColor: custom_values.colors.g_1,
            borderRadius: '30px',
          }}
        >
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
            <InputCustom type="email" label="EMAIL" placeholder="example@mail.com" />
            <InputCustom type="password" label="PASSWORD" placeholder="Your Password" />

            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                flexWrap: {
                  xs: 'wrap',
                  sm: 'nowrap',
                },
                alignItems: 'center',
              }}
            >
              <CheckboxCustom
                checked={isChecked}
                label="Remember me"
                onChange={(e) => {
                  setIsChecked(e.target.checked);
                }}
              />

              <Typograpthy
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: {
                    xs: '100%',
                    sm: 'fit-content',
                  },
                  color: custom_values.colors.blue_1,
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                <Link href={'/'}>Forgot your password?</Link>
              </Typograpthy>
            </Box>

            <ButtonCustom onClick={() => {}} text="Continue" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
