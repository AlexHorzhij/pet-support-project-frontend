import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  StyledInput,
  ErrorText,
  FormButton,
} from 'components/RegisterForm/Forms.styled';
import { Grid } from '@mui/material';
import { TypographyStyled } from './NoticeAddForm.styled';

const schema = yup.object().shape({
  title: yup.string().min(2).max(40).required(),
  name: yup.string().min(2).max(40).required(),
  birthdate: yup
    .string()
    .matches(
      /(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)/,
      'Input correct date'
    )
    .required(),
  breed: yup.string().min(2).max(40).required(),
});

export const Step1AddNotice = ({ next, data, handleClose }) => {
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
        <TypographyStyled variant="h4">Title of ad *</TypographyStyled>
        <StyledInput
          sx={{ mt: 2, mb: 4 }}
          name="title"
          disableunderline="true"
        />
        <ErrorMessage component="div" name="title">
          {msg => <ErrorText>*{msg}</ErrorText>}
        </ErrorMessage>
        <TypographyStyled variant="h4">Name pet</TypographyStyled>
        <StyledInput sx={{ mt: 2, mb: 4 }} name="name" />
        <TypographyStyled variant="h4">Date of birth</TypographyStyled>
        <StyledInput sx={{ mt: 2, mb: 4 }} name="birthdate" />
        <TypographyStyled variant="h4">Breed</TypographyStyled>
        <StyledInput sx={{ mt: 2, mb: 4 }} name="breed" />
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <FormButton variant="contained" onClick={handleClose}>
              Cancel
            </FormButton>
          </Grid>
          <Grid item xs={6}>
            <FormButton variant="contained" type="submit">
              Next
            </FormButton>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};
