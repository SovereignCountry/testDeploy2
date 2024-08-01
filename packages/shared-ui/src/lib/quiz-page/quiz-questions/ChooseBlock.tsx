'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import custom_values from '../../custom_values';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { QuizStepAnswerItemType, VariantItemType } from 'packages/shared-ui/src/types';

interface ChooseBlockType {
  question: string;
  questionSmallText?: string;
  answers: VariantItemType[];
  onChoose: (newValue: QuizStepAnswerItemType) => void;
  questionAnswer: QuizStepAnswerItemType;
}

const ChooseBlock = ({
  question,
  questionSmallText,
  answers,
  onChoose,
  questionAnswer,
}: ChooseBlockType) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const handleButtonClick = (selectedIndex: number) => {
    setSelectedIndex(selectedIndex);
    onChoose({
      answerValue: answers[selectedIndex].text,
      answerVariantIndex: selectedIndex,
      question: question,
    });
  };

  React.useEffect(() => {
    setSelectedIndex(questionAnswer.answerVariantIndex);
  }, [questionAnswer]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: {
          xs: '10px',
          md: '20px',
        },
        alignItems: 'center',
        width: '100%',
      }}
    >
      {questionSmallText && (
        <Typography
          variant="caption"
          component="p"
          sx={{
            textAlign: 'center',
            fontSize: {
              sm: '14px',
              md: '16px',
            },
            fontWeight: '400',
            color: custom_values.colors.g_2,
          }}
        >
          {questionSmallText}
        </Typography>
      )}
      <Typography
        variant="h1"
        component="h1"
        sx={{
          textAlign: 'center',
          fontSize: '18px',
          fontWeight: '700',
          color: custom_values.colors.contrastText,
        }}
      >
        {question}
      </Typography>

      <Grid
        container
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: `${answers[0].img || answers[0].icon ? '1fr' : '1fr'}`,
            md: `${answers[0].img || answers[0].icon ? '1fr 1fr 1fr' : '1fr'}`,
          },
          justifyContent: 'center',
          width: '100%',
          gap: {
            xs: '10px',
            md: '20px',
          },
        }}
      >
        {answers.map((el: VariantItemType, index: number) => (
          <Grid item key={`GI${index}`} sx={{ flex: '1' }}>
            <Button
              onClick={() => handleButtonClick(index)}
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                textTransform: 'capitalize',
                padding: '20px',
                borderWidth: '2px',
                borderRadius: '15px',
                backgroundColor: selectedIndex === index ? custom_values.colors.blue_0 : 'white',
                color: selectedIndex === index ? 'white' : 'inherit',
                '&:hover': {
                  borderWidth: '2px',
                  borderColor: custom_values.colors.blue_2,
                  backgroundColor: custom_values.colors.blue_0,
                },
                '&:active': {
                  borderColor: custom_values.colors.blue_2,
                  backgroundColor: custom_values.colors.blue_0,
                },
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: '50px',
                    md: '80px',
                  },
                }}
              >
                {el.icon && React.isValidElement(el.icon)
                  ? React.cloneElement(el.icon as React.ReactElement, {
                      sx: {
                        fontSize: '70px',
                      },
                    })
                  : null}

                {el.img && <img alt="variant_image" src={el.img} width={'100%'} />}
              </Box>

              <Typography
                variant="caption"
                component="p"
                sx={{
                  textAlign: 'center',
                  fontSize: {
                    sm: '14px',
                    md: '16px',
                  },
                  fontWeight: '500',
                  color: custom_values.colors.contrastText,
                }}
              >
                {el.text}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChooseBlock;
