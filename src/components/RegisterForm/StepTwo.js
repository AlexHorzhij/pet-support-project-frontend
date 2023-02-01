import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { getAuth } from 'redux/auth/authSelectors';
import { Loader } from 'components';
import { Input, ErrorText, Button } from 'components/RegisterForm/Forms.styled';

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
            <Field type="text" name="name" placeholder="Name" as={Input} />
            <ErrorMessage component="div" name="name">
              {msg => <ErrorText>{msg}</ErrorText>}
            </ErrorMessage>
            <Field
              type="text"
              name="city"
              placeholder="City, Region"
              as={Input}
            />
            <ErrorMessage component="div" name="city">
              {msg => <ErrorText>{msg}</ErrorText>}
            </ErrorMessage>
            <Field
              type="tel"
              name="phone"
              placeholder="Mobile phone"
              as={Input}
            />
            <ErrorMessage component="div" name="phone">
              {msg => <ErrorText>{msg}</ErrorText>}
            </ErrorMessage>
            <Button color="accent" type="submit">
              {!isLoading ? 'Register' : <Loader />}
            </Button>
            <Button type="button" onClick={() => prev(values)}>
              Back
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default StepTwo;
