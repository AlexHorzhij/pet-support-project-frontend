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
import parse from 'date-fns/parse';
const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(2)
    .max(16)
    .matches(/^[A-Za-z]+$/, 'Name must contain only latin letters'),
  date: yup
    .date()
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, 'dd.MM.yyyy', new Date());
      return result;
    })
    .typeError('please enter a valid date')
    .required()
    .min('1969-11-13', 'Date is too early'),
  breed: yup
    .string()
    .required()
    .min(2)
    .max(16)
    .matches(/^[A-Za-z]+$/, 'Breed must contain only latin letters'),
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
