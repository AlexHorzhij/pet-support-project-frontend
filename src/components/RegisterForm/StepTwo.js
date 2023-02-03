import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { getAuth } from 'redux/auth/authSelectors';
import { Loader } from 'components';
import {
  StyledInput,
  ErrorText,
  FormButton,
} from 'components/RegisterForm/Forms.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  city: yup
    .string()
    .matches(
      /^[A-Z][a-z]+,\s+[A-Z][a-z]*$/,
      'Begin with capital letters, contain comma and space'
    )
    .required(),
  phone: yup
    .string()
    .min(13)
    .max(13)
    .matches(
      /^[+][3][8][0]+[0-9]*$/,
      'Phone must contain only numbers and start with "+380"'
    )
    .required(),
});

const StepTwo = ({ next, prev, data }) => {
  const handleSubmit = (values, { resetForm }) => {
    next(values, true);
    resetForm();
  };
  const { isLoading } = useSelector(getAuth);

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values }) => {
        return (
          <Form>
            <StyledInput
              type="text"
              name="name"
              placeholder="Name"
              disableunderline="true"
            />
            <ErrorMessage component="div" name="name">
              {msg => <ErrorText>*{msg}</ErrorText>}
            </ErrorMessage>
            <StyledInput
              type="text"
              name="city"
              placeholder="City, Region"
              disableunderline="true"
            />
            <ErrorMessage component="div" name="city">
              {msg => <ErrorText>*{msg}</ErrorText>}
            </ErrorMessage>
            <StyledInput
              type="tel"
              name="phone"
              placeholder="Mobile phone"
              disableunderline="true"
            />
            <ErrorMessage component="div" name="phone">
              {msg => <ErrorText>*{msg}</ErrorText>}
            </ErrorMessage>
            <FormButton variant="contained" type="submit">
              {!isLoading ? 'Register' : <Loader />}
            </FormButton>
            <FormButton
              variant="outlined"
              type="button"
              onClick={() => prev(values)}
            >
              Back
            </FormButton>
          </Form>
        );
      }}
    </Formik>
  );
};

export default StepTwo;
