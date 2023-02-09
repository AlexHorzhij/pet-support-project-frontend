import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  StyledInput,
  ErrorText,
  FormButton,
  StepperBox,
  ModalGrid,
  ModalTypography,
} from 'components/UserPage/ModalAddpetsNew/ModalAddPetsNew.styled';
const min = '1990-01-01';
const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z\s,\u0400-\u04FF]*$/, 'String must contain only letters')
    .required(),
  date: yup
    .date()
    .max(
      new Date(Date.now()),
      `Input correct date MM.DD.YYYY no later than today`
    )
    .min(new Date(min), `Input correct  no erlier than 1990`)
    .required(),
  breed: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z\s,\u0400-\u04FF]*$/, 'String must contain only letters')
    .required(),
});

const StepOne = ({ next, data, onModalClose }) => {
  const handleSubmit = async values => {
    next(values);
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      <Form>
        <ModalGrid>
          <ModalTypography>Name pet*</ModalTypography>
          <StyledInput
            name="name"
            placeholder="Type pet name"
            disableunderline="true"
          />
          <ErrorMessage component="div" name="name">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </ModalGrid>
        <ModalGrid>
          <ModalTypography>Date of birth*</ModalTypography>
          <StyledInput
            name="date"
            placeholder="Type date of birth dd.MM.yyyy"
            disableunderline="true"
          />
          <ErrorMessage component="div" name="date">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </ModalGrid>
        <ModalGrid>
          <ModalTypography>Breed*</ModalTypography>
          <StyledInput
            name="breed"
            placeholder="Type breed"
            disableunderline="true"
          />
          <ErrorMessage component="div" name="breed">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </ModalGrid>
        <StepperBox>
          <FormButton onClick={onModalClose} variant="outlined">
            Cancel
          </FormButton>
          <FormButton variant="contained" type="submit">
            Next
          </FormButton>
        </StepperBox>
      </Form>
    </Formik>
  );
};

export default StepOne;
