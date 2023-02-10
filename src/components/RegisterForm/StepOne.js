import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  StyledInput,
  ErrorText,
  FormButton,
  StyledIconButton,
} from 'components/RegisterForm/Forms.styled';
import { Box } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

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
      'Password must contain only latin letters and/or numbers'
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleClickShowConfPassword = () => setShowConfPassword(show => !show);
  const handleMouseDownConfPassword = event => {
    event.preventDefault();
  };

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
            placeholder="Email"
            disableunderline="true"
          />
          <ErrorMessage component="div" name="email">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <StyledInput
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            disableunderline="true"
          />
          <StyledIconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </StyledIconButton>
          <ErrorMessage component="div" name="password">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <StyledInput
            type={showConfPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm Password"
            disableunderline="true"
          />
          <StyledIconButton
            aria-label="toggle confirmPassword visibility"
            onClick={handleClickShowConfPassword}
            onMouseDown={handleMouseDownConfPassword}
            edge="end"
          >
            {showConfPassword ? <VisibilityOff /> : <Visibility />}
          </StyledIconButton>
          <ErrorMessage component="div" name="confirmPassword">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </Box>
        <FormButton variant="contained" type="submit">
          Next
        </FormButton>
      </Form>
    </Formik>
  );
};

export default StepOne;
