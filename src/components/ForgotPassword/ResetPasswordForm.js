import React, { useState } from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { LoaderWhite } from 'components/Loader/Loader';
import { getAuth } from 'redux/auth/authSelectors';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  StyledInput,
  ErrorText,
  FormButton,
  StyledIconButton,
} from 'components/RegisterForm/Forms.styled';
import { Box } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { resetUserPassword } from 'redux/auth/authOperations';

const schema = yup.object().shape({
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

const ResetPasswordForm = ({ confirmationToken }) => {
  const { isLoading } = useSelector(getAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const onResendClick = ({ password }) => {
    dispatch(
      resetUserPassword({
        body: { password: password },
        resetToken: confirmationToken,
      })
    );
    navigate('/login');
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={schema}
      onSubmit={onResendClick}
    >
      <Form>
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
        <FormButton variant="contained" type="submit" sx={{ mt: 0 }}>
          {!isLoading ? 'Reset' : <LoaderWhite />}
        </FormButton>
      </Form>
    </Formik>
  );
};

export default ResetPasswordForm;
