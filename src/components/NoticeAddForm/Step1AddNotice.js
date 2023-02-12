import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Grid, Box } from '@mui/material';

import { StyledInput, ErrorText, FormButton } from 'components/RegisterForm/Forms.styled';
import { TypographyStyled } from './NoticeAddForm.styled';

const schema = yup.object().shape({
  title: yup.string().min(2).max(48).required(),
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z\s,\u0400-\u04FF]*$/, 'String must contain only letters'),
  birthdate: yup
    .date()
    .max(
      new Date(Date.now()),
      `Input correct date MM.DD.YYYY no later than today`
    )
    .min(new Date('1990-01-01'), `Input correct  no erlier than 1990`),
  breed: yup
    .string()
    .min(2)
    .max(24)
    .matches(/^[a-zA-Z\s,\u0400-\u04FF]*$/, 'String must contain only letters')
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

        <TypographyStyled sx={{ mt: 2, mb: 1 }} variant="h4">
          Title of ad: *
        </TypographyStyled>
        <Box sx={{ position: 'relative' }}>
          <StyledInput
            style={{ mt: 2, mb: 4 }}
            name="title"
            disableunderline="true"
            placeholder="Type title"
          />
          <ErrorMessage component="div" name="title">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </Box>
        <TypographyStyled sx={{ mb: 1 }} variant="h4">Name pet:</TypographyStyled>
        <Box sx={{ position: 'relative' }}>
          <StyledInput
            style={{ mt: 2, mb: 4 }}
            name="name"
            placeholder="Type name"
          />
          <ErrorMessage component="div" name="name">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </Box>
        <TypographyStyled sx={{ mb: 1 }} variant="h4">Date of birth:</TypographyStyled>
        <Box sx={{ position: 'relative' }}>
          <StyledInput
            style={{ mt: 2, mb: 4 }}
            name="birthdate"
            placeholder="Type date of birth MM.DD.YYYY"
          />
          <ErrorMessage component="div" name="birthdate">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </Box>
        <TypographyStyled sx={{ mb: 1 }} variant="h4">Breed:</TypographyStyled>
        <Box sx={{ position: 'relative' }}>
          <StyledInput
            style={{ mt: 2, mb: 4 }}
            name="breed"
            placeholder="Type breed"
          />
          <ErrorMessage component="div" name="breed">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </Box>
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
    </Formik >
  );
};
