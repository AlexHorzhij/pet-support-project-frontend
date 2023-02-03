import React, { useState } from 'react';
import { Form } from 'formik';
import { StepperBox, StepperButton } from './FormStepper.styled';
export const FormStepper = ({ children, onClose }) => {
  const stepsArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentStep = stepsArray[step];

  return (
    <Form className="addForm">
      {currentStep}
      <StepperBox>
        {step === 0 && (
          <>
            <StepperButton onClick={onClose} variant="outlined">
              Cancel
            </StepperButton>
            <StepperButton
              variant={'contained'}
              onClick={() => {
                step === 0 ? setStep(1) : setStep(0);
              }}
            >
              Next
            </StepperButton>
          </>
        )}
        {step === 1 && (
          <>
            <StepperButton
              variant="outlined"
              onClick={() => {
                step === 0 ? setStep(1) : setStep(0);
              }}
            >
              Back
            </StepperButton>
            <StepperButton variant="contained" type="submit">
              Done
            </StepperButton>
          </>
        )}
      </StepperBox>
    </Form>
  );
};
