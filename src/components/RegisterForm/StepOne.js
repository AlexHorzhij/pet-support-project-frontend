import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  StyledInput,
  ErrorText,
  FormButton,
} from 'components/RegisterForm/Forms.styled';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const schema = yup.object().shape({
  email: yup
    .string()
    .min(8)
    .max(63)
    .matches(
      /^[^-n]+[a-zA-Z0-9.,!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/,
      'Email must not contain the "-" as a first or last character'
    )
    .email()
    .required(),
  password: yup
    .string()
    .min(7)
    .max(32)
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Password must contain only letters and/or numbers'
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .min(7)
    .max(32)
    .required(),
});

const StepOne = ({ next, data }) => {
  const {t} = useTranslation('common')
  const handleSubmit = values => {
    next(values);
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Box sx={{ position: 'relative' }}>
          <StyledInput
            type="email"
            name="email"
            placeholder={t('Registration.form.1linePlaceholder')}
            disableunderline="true"
          />
          <ErrorMessage component="div" name="email">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <StyledInput
            type="password"
            name="password"
            placeholder={t('Registration.form.2linePlaceholder')}
            disableunderline="true"
          />
          <ErrorMessage component="div" name="password">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <StyledInput
            type="password"
            name="confirmPassword"
            placeholder={t('Registration.form.3linePassPlaceholder')}
            disableunderline="true"
          />
          <ErrorMessage component="div" name="confirmPassword">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </Box>
        <FormButton variant="contained" type="submit">
          {t('Registration.form.btn')}
        </FormButton>
      </Form>
    </Formik>
  );
};

export default StepOne;
