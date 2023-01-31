import React, { useState } from 'react';
import { Form } from 'formik';
import { Box, Button, Stack } from '@mui/material';

export const FormStepper = ({ children, onClose }) => {
  const stepsArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentStep = stepsArray[step];

  return (
    <Form className="addForm">
      {/* <Stepper alternativeLabel activeStep={step} sx={{ marginBottom: 5 }}>
        {stepsArray.map((child, index) => (
          <Step key={index} completed={step > index}>
            <StepLabel key={index}>{child.props.label}</StepLabel>
          </Step>
        ))}
      </Stepper> */}
      {currentStep}
      <Box
        sx={{
          marginTop: 5,
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        {step === 0 && (
          <Button
            onClick={onClose}
            sx={{ minWidth: '180px' }}
            type="button"
            variant="outlined"
          >
            Cancel
          </Button>
        )}

        <Button
          sx={{ minWidth: '180px' }}
          type="button"
          variant={step === 0 ? 'contained' : 'outlined'}
          onClick={() => {
            step === 0 ? setStep(1) : setStep(0);
          }}
        >
          {step === 0 ? 'Next' : 'Back'}
        </Button>

        {step === 1 && (
          <Button sx={{ minWidth: '180px' }} variant="contained" type="submit">
            Done
          </Button>
        )}
      </Box>
    </Form>
  );
};
