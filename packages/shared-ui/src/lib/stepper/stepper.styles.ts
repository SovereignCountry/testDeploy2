import styled from '@emotion/styled';
import custom_values from '../custom_values';

export const StyledStepper = styled('ul')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  padding: 0;
  width: 100%;
  margin: 0;
`;

export const StyledStepperStep = styled('li')`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const StyledStepperStepIndex = styled('div')<{
  currentStep: boolean;
  done: boolean;
}>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  line-height: 18px;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  font-size: 0.75rem;
  display: grid;
  place-items: center;
  background: ${({ currentStep, done }) =>
    currentStep || done ? `${custom_values.colors.blue_1} !important` : custom_values.colors.g_0};
  color: ${({ currentStep, done, theme }) =>
    currentStep || done ? 'white' : custom_values.colors.g_2};

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 0.875rem;
    line-height: 20px;
  }
`;

export const StyledLabelContainer = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;
