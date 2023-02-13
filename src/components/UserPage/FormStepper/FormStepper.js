import React, { useState } from 'react';
import { Form } from 'formik';
import { StepperBox, StepperButton } from './FormStepper.styled';
import { useTranslation } from 'react-i18next';

export const FormStepper = ({ children, onClose }) => {
  const stepsArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentStep = stepsArray[step];
  const { t } = useTranslation('common');

  return (
    <Form className="addForm">
      {currentStep}
      <StepperBox>
        {step === 0 && (
          <>
            <StepperButton onClick={onClose} variant="outlined">
              { t('ModalAddPetNew.cancelBtn')}
            </StepperButton>
            <StepperButton
              variant={'contained'}
              onClick={() => {
                step === 0 ? setStep(1) : setStep(0);
              }}
            >
              { t('ModalAddPetNew.nextBtn')}
              
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
              { t('ModalAddPetNew.backBtn')}
            </StepperButton>
            <StepperButton variant="contained" type="submit">
              { t('ModalAddPetNew.finalBtn')}
            </StepperButton>
          </>
        )}
      </StepperBox>
    </Form>
  );
};
