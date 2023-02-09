import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  StyledInput,
  ErrorText,
  FormButton,
} from 'components/RegisterForm/Forms.styled';
import { Grid, Box, Button, Container } from '@mui/material';
import { TypographyStyled } from './NoticeAddForm.styled';

// const min = '1990-01-01';
const schema = yup.object().shape({
  title: yup.string().min(2).max(48).required(),
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z\s,\u0400-\u04FF]*$/, 'String must contain only letters')
    .required(),
  birthdate: yup
    .date()
    .max(
      new Date(Date.now()),
      `Input correct date MM.DD.YYYY no later than today`
    )
    .min(new Date('1990-01-01'), `Input correct  no erlier than 1990`)
    .required(),
  breed: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z\s,\u0400-\u04FF]*$/, 'String must contain only letters')
    .required(),
});

export const Step1AddNotice = ({ next, data, handleClose }) => {
  console.log('data: ', data.category);
  // const [dataForm, setDataForm] = useState(data)


  const handleSubmit = values => {
    next(values);
  };

  // const onClickCategory = async (e) => {
  //   data.category = e.target.name
  //   await setDataForm(e.target.name)
  //   console.log('setDataForm: ', dataForm);
  // }

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        {/* <Container sx={{ mb: 6 }}>
          <Button
            name="sell"
            variant={data.category === 'sell' ? 'contained' : 'outlined'}
            sx={{ textTransform: 'lowercase' }}
            onClick={onClickCategory}
          >
            sell
          </Button>
          <Button
            name="lost-found"
            variant={data.category === 'lost-found' ? 'contained' : 'outlined'}
            sx={{ textTransform: 'lowercase' }}
            onClick={onClickCategory}
          >
            lost/found
          </Button>
          <Button
            variant={data.category === 'for-free' ? 'contained' : 'outlined'}
            name="for-free"
            sx={{ textTransform: 'lowercase' }}
            onClick={onClickCategory}
          >
            in good hands
          </Button>
        </Container> */}
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
