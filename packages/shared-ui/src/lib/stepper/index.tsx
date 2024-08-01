'use client';
import * as React from 'react';
import ProgressBar from './progress-bar';
import { type CustomStepperProps } from './stepper.types';
import {
  StyledLabelContainer,
  StyledStepper,
  StyledStepperStep,
  StyledStepperStepIndex,
} from './stepper.styles';
import { useTheme } from '@mui/material';

const CustomStepper = ({ current, stepsAmount, progress }: CustomStepperProps) => {
  const theme = useTheme();

  return (
    <StyledStepper>
      {Array.from({ length: stepsAmount }).map((_, idx) => {
        const done = idx < current;
        const currentStep = idx === current;

        return (
          <StyledStepperStep key={idx}>
            <StyledLabelContainer>
              <StyledStepperStepIndex currentStep={currentStep} done={done} theme={theme}>
                {idx + 1}
              </StyledStepperStepIndex>
            </StyledLabelContainer>
            {!!idx && <ProgressBar current={current} step={idx} progress={progress ?? 0} />}
          </StyledStepperStep>
        );
      })}
    </StyledStepper>
  );
};

export default CustomStepper;
