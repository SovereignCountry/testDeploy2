'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomStepper from '../stepper';
import custom_values from '../custom_values';
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import ChooseBlock from './quiz-questions/ChooseBlock';
import BirthBlock from './quiz-questions/BirthBlock';
import InternalWindow from '../custom-components/InternalWindow';
import { QuizStepAnswerItemType, QuizStepDataType, QuizStepItemType } from '../../types';
import ButtonCustom from '../custom-components/ButtonCustom';
import AnalizingPage from '../analizing-page';
import AnalysisReadyPage from '../analysis-ready-page';

const mockData: QuizStepDataType[] = [
  {
    stepTitle: 'Your Profile',
    questions: [
      {
        question: 'Your gender',
        questionSmallText: 'Before we begin',
        answers: [
          {
            img: '/img/man_ico.svg',
            text: 'Man',
          },
          {
            img: '/img/woman_ico.svg',
            text: 'Woman',
          },
          {
            img: '/img/other_ico.svg',
            text: 'I don’t want to clarify',
          },
        ],
        defaultAnswer: '',
      },
      {
        question: 'How do you describe yourself?',
        questionSmallText: '',
        answers: [
          {
            img: '/img/adult_ico.svg',
            text: 'I’m an adult',
          },
          {
            img: '/img/cap_ico.svg',
            text: 'I’m a teenager',
          },
          {
            img: '/img/duck_ico.svg',
            text: 'I’m taking the quiz for my child',
          },
        ],
        defaultAnswer: '',
      },
      {
        question: 'Date of birth',
        questionSmallText: '',
        answers: [],
        defaultAnswer: { day: '', month: '', year: '' },
      },
    ],
  },
  {
    stepTitle: 'Quiz',
    questions: [
      {
        question: 'How do you prefer to spend your evenings?',
        answers: [
          { text: 'In the company of loved ones.', points: { '2': 40 } },
          { text: 'Reading or doing hobbies alone.', points: { '8': 40 } },
          { text: 'Traveling and learning something new.', points: { '6': 40 } },
        ],
        defaultAnswer: '',
      },
      {
        question: 'What is an important indicator of love and care for you?',
        answers: [
          { text: 'Receiving unexpected gifts.', points: { '3': 40 } },
          { text: 'Spending time together and attention.', points: { '2': 40 } },
          { text: 'Respecting your personal boundaries.', points: { '8': 40 } },
        ],
        defaultAnswer: '',
      },
      {
        question: 'What inspires you the most in relationships with loved ones?',
        answers: [
          { text: 'Achieving goals together.', points: { '9': 40 } },
          { text: 'Receiving unexpected gifts.', points: { '3': 40 } },
          { text: 'Honest and open communication.', points: { '7': 40 } },
        ],
        defaultAnswer: '',
      },
    ],
  },
];

const QuizPage = () => {
  const internalWindowIndex1 = 1;

  const [quizData, setQuizData] = React.useState<QuizStepDataType[]>(mockData);
  const [quizAnswers, setQuizAnswers] = React.useState<QuizStepAnswerItemType[][]>([]);
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const [currentQuestionOfStep, setCurrentQuestionOfStep] = React.useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(1);
  const [questionsProggress, setQuestionsProggress] = React.useState<number>(0);
  const [isIntegrationWindow, setIsIntegrationWindow] = React.useState<boolean>(false);
  const [isIntegrationWindowAnalising, setIsIntegrationWindowAnalising] =
    React.useState<boolean>(false);
  const [isIntegrationWindowAfterAnalysis, setIsIntegrationWindowAfterAnalysis] =
    React.useState<boolean>(false);

  const getPercentageValue = (currentValue: number, allAmount: number) => {
    return (currentValue / allAmount) * 100;
  };

  const handleSwitchNextStep = () => {
    setCurrentQuestionOfStep((prevCurrentQuestion: number) => {
      const newCurrentQuestion = prevCurrentQuestion + 1;

      // set new percentage progress
      const newQuestionProgress = getPercentageValue(
        newCurrentQuestion,
        quizData[currentStep].questions.length
      );
      setQuestionsProggress(newQuestionProgress);

      // if all stages completed
      if (
        quizData.length === currentStep + 1 && // Check if it's the last step
        quizData[currentStep].questions.length === newCurrentQuestion // Check if it's the last question in the last step
      ) {
        console.log('All stages completed', quizData.length, currentStep, prevCurrentQuestion);
        setTimeout(() => setIsIntegrationWindowAnalising(true), 500);

        return prevCurrentQuestion;
      } else {
        setCurrentQuestion((prevValue: number) => prevValue + 1);
      }

      // if all questions in the current step are completed, set next quiz step
      if (quizData[currentStep].questions.length === newCurrentQuestion) {
        // console.log('Switching to next step', quizData.length, currentStep);
        setCurrentStep((prevCurrentStep: number) => prevCurrentStep + 1);
        setQuestionsProggress(0);
        return 0;
      }

      return newCurrentQuestion;
    });
  };
  const handleSwitchPrevStep = () => {
    setCurrentQuestionOfStep((prevCurrentQuestion: number) => {
      const newCurrentQuestion = prevCurrentQuestion - 1;

      setCurrentQuestion((prevValue: number) => (prevValue === 1 ? 1 : prevValue - 1));

      // If we are moving back to the previous step
      if (newCurrentQuestion < 0) {
        // If we are already at the first step, do nothing
        if (currentStep === 0) {
          return prevCurrentQuestion;
        }

        // Move to the last question of the previous step
        const newStep = currentStep - 1;
        const lastQuestionOfPrevStep = quizData[newStep].questions.length - 1;
        setCurrentStep(newStep);
        const newQuestionProgress = getPercentageValue(
          lastQuestionOfPrevStep,
          quizData[newStep].questions.length
        );
        setQuestionsProggress(newQuestionProgress);

        return lastQuestionOfPrevStep;
      }

      // If we are just moving back within the same step
      const newQuestionProgress = getPercentageValue(
        newCurrentQuestion,
        quizData[currentStep].questions.length
      );
      setQuestionsProggress(newQuestionProgress);

      return newCurrentQuestion;
    });
  };

  const handleChooseAnswer = (
    newValue: QuizStepAnswerItemType,
    currentStepIndex: number,
    currentQuestionOfStep: number
  ) => {
    setQuizAnswers((currentAnswers: QuizStepAnswerItemType[][]) => {
      const newAnswers = [...currentAnswers];

      newAnswers[currentStepIndex][currentQuestionOfStep] = newValue;

      return newAnswers;
    });

    handleSwitchNextStep();
  };

  const countAllQuestions = (data: QuizStepDataType[]): number => {
    return data.reduce((total, step) => total + step.questions.length, 0);
  };

  const handleInitializeAnswers = () => {
    setQuizAnswers(
      quizData.map((quizStep: QuizStepDataType, i: number) => {
        return quizStep.questions.map((question: QuizStepItemType, j: number) => {
          return {
            question: question.question,
            answerValue: question.defaultAnswer,
            answerVariantIndex: null,
          } as QuizStepAnswerItemType;
        });
      })
    );
  };

  const handleOnAnalysisLoadingDone = () => {
    setIsIntegrationWindowAnalising(false);
    setIsIntegrationWindowAfterAnalysis(true);
  };

  React.useEffect(() => {
    handleInitializeAnswers();
    setQuestionsProggress(
      getPercentageValue(currentQuestionOfStep, quizData[currentStep].questions.length)
    );
  }, [quizData]);

  React.useEffect(() => {
    if (internalWindowIndex1 === currentStep) {
      setTimeout(() => setIsIntegrationWindow(true), 500);
    }
  }, [currentStep]);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: '30px 0px',
        paddingTop: '0px',
      }}
    >
      <InternalWindow isInternalWindowShow={isIntegrationWindowAnalising}>
        <AnalizingPage onLoadingDone={handleOnAnalysisLoadingDone} />
      </InternalWindow>

      <InternalWindow isInternalWindowShow={isIntegrationWindowAfterAnalysis}>
        <AnalysisReadyPage />
      </InternalWindow>

      <InternalWindow isInternalWindowShow={isIntegrationWindow}>
        <Box
          sx={{
            display: 'flex',
            gap: '25px',
            flexDirection: 'column',
            height: '100%',
            padding: `0px ${custom_values.mobile_padding_x}px`,
            paddingTop: '5%',
            alignItems: 'center',
            maxWidth: custom_values.integration_container,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: '700',
              fontSize: '54px',
              textAlign: 'center',
            }}
          >
            Great!
          </Typography>
          <img alt="integration image" src="./img/heart_1.png" />
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: '400',
              fontSize: '16px',
              textAlign: 'center',
              color: custom_values.colors.g_2,
            }}
          >
            Love is complex. Over three decades ago, Dr. Gary Chapman made a significant stride in
            this arena with his ‘5 Love Languages’ test, a concept that helped millions navigate
            their relationships.
          </Typography>

          <ButtonCustom
            text="Continue"
            onClick={() => {
              setIsIntegrationWindow(false);
            }}
            width={250}
          />
        </Box>
      </InternalWindow>

      {!isIntegrationWindow &&
        !isIntegrationWindowAnalising &&
        !isIntegrationWindowAfterAnalysis && (
          <Box
            sx={{
              marginTop: {
                xs: '10px',
                md: '30px',
              },
              display: 'flex',
              gap: '20px',
              flexDirection: 'column',
              width: '100%',
              maxWidth: custom_values.container_login,
              padding: {
                xs: `0px ${custom_values.mobile_padding_x}px`,
                sm: `0px ${custom_values.mobile_padding_x}px`,
                md: '0px',
                lg: '0px',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Button
                onClick={handleSwitchPrevStep}
                variant="text"
                sx={{
                  minWidth: '20px',
                  width: {
                    xs: '50px',
                    md: '100px',
                  },
                  fontWeight: '700',
                  color: custom_values.colors.contrastText,
                  textTransform: 'capitalize',
                }}
              >
                <ArrowBackIosNew />
                <Typography
                  variant="caption"
                  component="p"
                  sx={{
                    fontSize: '16px',
                    display: {
                      xs: 'none',
                      md: 'block',
                    },
                  }}
                >
                  Back
                </Typography>
              </Button>

              <CustomStepper current={currentStep} stepsAmount={3} progress={questionsProggress} />

              <Typography
                variant="caption"
                component="p"
                sx={{
                  textAlign: 'center',
                  width: {
                    xs: '50px',
                    md: '100px',
                  },
                  fontSize: {
                    sm: '14px',
                    md: '16px',
                  },
                  fontWeight: '700',
                }}
              >
                {currentQuestion}/{countAllQuestions(quizData)}
              </Typography>
            </Box>

            <Typography
              variant="h1"
              component="h1"
              sx={{
                textAlign: 'center',
                fontSize: {
                  xs: '24px',
                  md: '32px',
                },
                fontWeight: '700',
              }}
            >
              {quizData[currentStep].stepTitle}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                width: '100%',
                padding: {
                  xs: '20px',
                  md: '40px',
                },
                backgroundColor: custom_values.colors.g_1,
                borderRadius: '30px',
              }}
            >
              {quizAnswers.length !== 0 && (
                <>
                  {typeof quizData[currentStep].questions[currentQuestionOfStep].defaultAnswer ===
                  'object' ? (
                    <BirthBlock
                      {...quizData[currentStep].questions[currentQuestionOfStep]}
                      onChoose={(newValue: QuizStepAnswerItemType) =>
                        handleChooseAnswer(newValue, currentStep, currentQuestionOfStep)
                      }
                      questionAnswer={quizAnswers[currentStep][currentQuestionOfStep]}
                    />
                  ) : (
                    <ChooseBlock
                      {...quizData[currentStep].questions[currentQuestionOfStep]}
                      onChoose={(newValue: QuizStepAnswerItemType) =>
                        handleChooseAnswer(newValue, currentStep, currentQuestionOfStep)
                      }
                      questionAnswer={quizAnswers[currentStep][currentQuestionOfStep]}
                    />
                  )}
                </>
              )}
            </Box>
          </Box>
        )}
    </Box>
  );
};

export default QuizPage;
