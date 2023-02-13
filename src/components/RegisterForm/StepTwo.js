import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { getAuth } from 'redux/auth/authSelectors';
import { LoaderWhite } from 'components';
import {
  StyledInput,
  ErrorText,
  FormButton,
} from 'components/RegisterForm/Forms.styled';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const schema = yup.object().shape({
  name: yup.string().required(),
  city: yup
    .string()
    .matches(/^[A-Za-z,\s\u0400-\u04FF]*$/, 'String must contain only letters')
    .required(),
  phone: yup
    .string()
    .min(13)
    .max(13, 'Phone must be at most 13 characters, in format "+380000000000"')
    .matches(/^[+][3][8][0]+[0-9]*$/, 'Phone must be in format "+380000000000"')
    .required(),
});

const StepTwo = ({ next, prev, data }) => {
  const { t } = useTranslation('common');
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
            <Box sx={{ position: 'relative' }}>
              <StyledInput
                type="text"
                name="name"
                placeholder={t('Registration.form.4linePlaceholder')}
                disableunderline="true"
              />
              <ErrorMessage component="div" name="name">
                {msg => <ErrorText>*{msg}</ErrorText>}
              </ErrorMessage>
            </Box>
            <Box sx={{ position: 'relative' }}>
              <StyledInput
                type="text"
                name="city"
                placeholder={t('Registration.form.5linePlaceholder')}
                disableunderline="true"
              />
              <ErrorMessage component="div" name="city">
                {msg => <ErrorText>*{msg}</ErrorText>}
              </ErrorMessage>
            </Box>
            <Box sx={{ position: 'relative' }}>
              <StyledInput
                type="tel"
                name="phone"
                placeholder={t('Registration.form.6linePlaceholder')}
                disableunderline="true"
              />
              <ErrorMessage component="div" name="phone">
                {msg => <ErrorText>*{msg}</ErrorText>}
              </ErrorMessage>
            </Box>
            <FormButton variant="contained" type="submit">
              {!isLoading ? t('Registration.form.finalBtn') : <LoaderWhite />}
            </FormButton>
            <FormButton
              variant="outlined"
              type="button"
              onClick={() => prev(values)}
            >
              {t('Registration.form.backBtn')}
            </FormButton>
          </Form>
        );
      }}
    </Formik>
  );
};

export default StepTwo;
