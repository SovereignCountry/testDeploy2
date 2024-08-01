'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import custom_values from '../../custom_values';
import {
  AnswerBirthDateType,
  QuizStepAnswerItemType,
  SelectOpetionsType,
  VariantItemType,
} from '../../../types';
import SelectorCustom from '../../custom-components/SelectorCustom';
import { SelectChangeEvent } from '@mui/material';
import ButtonCustom from '../../custom-components/ButtonCustom';

interface ChooseBlockType {
  question: string;
  questionSmallText?: string;
  answers: VariantItemType[];
  onChoose: (newValue: QuizStepAnswerItemType) => void;
  questionAnswer: QuizStepAnswerItemType;
}

const generateArrayOptions = (startYear: number, endYear: number, keyName: string) => {
  const yearOptions: SelectOpetionsType[] = [];
  for (let year = startYear; year <= endYear; year++) {
    yearOptions.push({ value: `${year}${keyName}`, label: year.toString() });
  }
  return yearOptions;
};

const BirthBlock = ({
  question,
  questionSmallText,
  answers,
  onChoose,
  questionAnswer,
}: ChooseBlockType) => {
  const startYear = 1900;
  const endYear = new Date().getFullYear();
  const startDay = 1;
  const endDay = 31;

  const monthOption = [
    { value: '1 month', label: 'January' },
    { value: '2 month', label: 'February' },
    { value: '3 month', label: 'March' },
    { value: '4 month', label: 'April' },
    { value: '5 month', label: 'May' },
    { value: '6 month', label: 'June' },
    { value: '7 month', label: 'July' },
    { value: '8 month', label: 'August' },
    { value: '9 month', label: 'September' },
    { value: '10 month', label: 'October' },
    { value: '11 month', label: 'November' },
    { value: '12 month', label: 'December' },
  ];
  const yearOptions = React.useMemo(
    () => generateArrayOptions(startYear, endYear, 'year'),
    [startYear, endYear]
  );
  const dayOptions = React.useMemo(
    () => generateArrayOptions(startDay, endDay, 'day'),
    [startYear, endYear]
  );

  const [dayValue, setDayValue] = React.useState<string>('');
  const [monthValue, setMonthValue] = React.useState<string>('');
  const [yearValue, setYearValue] = React.useState<string>('');

  const handleContinue = () => {
    console.log(dayValue, monthValue, yearValue);
    if (isDisableButton()) return;
    onChoose({
      answerValue: { day: dayValue, month: monthValue, year: yearValue },
      answerVariantIndex: null,
      question: question,
    });
  };

  const isDisableButton = () => {
    return dayValue === '' || monthValue === '' || yearValue === '';
  };

  React.useEffect(() => {
    const answerValue = questionAnswer.answerValue as AnswerBirthDateType;

    setDayValue(answerValue.day);
    setMonthValue(answerValue.month);
    setYearValue(answerValue.year);
  }, [questionAnswer]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
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

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          maxWidth: custom_values.birth_container,
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            width: '100%',
            margin: '0px',
          }}
        >
          <Grid item xs={6} md={4} sx={{ padding: '0px !important' }}>
            <SelectorCustom
              label="day"
              placeholder="DD"
              options={dayOptions}
              value={dayValue}
              onChange={(event: SelectChangeEvent<string>) => {
                setDayValue(event.target.value);
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            sx={{
              padding: {
                xs: '0px 0px 0px 10px !important',
                md: '0px 10px !important',
              },
            }}
          >
            <SelectorCustom
              label="month"
              placeholder="MM"
              options={monthOption}
              value={monthValue}
              onChange={(event: SelectChangeEvent<string>) => {
                setMonthValue(event.target.value);
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              padding: {
                xs: '10px 0px 0px 0px !important',
                md: '0px !important',
              },
            }}
          >
            <SelectorCustom
              label="year"
              placeholder="YYYY"
              options={yearOptions}
              value={yearValue}
              onChange={(event: SelectChangeEvent<string>) => {
                setYearValue(event.target.value);
              }}
            />
          </Grid>
        </Grid>

        <ButtonCustom onClick={() => handleContinue()} text="Continue" />
      </Box>
    </Box>
  );
};

export default BirthBlock;
