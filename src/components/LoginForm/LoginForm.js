import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from 'redux/auth/authSelectors';
import { loginUser } from 'redux/auth/authOperations';
import { Loader } from 'components';
import {
  StyledInput,
  ErrorText,
  FormButton,
} from 'components/RegisterForm/Forms.styled';

const schema = yup.object().shape({
  email: yup
    .string()
    .min(10)
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
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(getAuth);

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(loginUser({ email: email, password: password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <StyledInput
          type="email"
          name="email"
          placeholder="Email"
          disableunderline="true"
        />
        <ErrorMessage name="email">
          {msg => <ErrorText>*{msg}</ErrorText>}
        </ErrorMessage>
        <StyledInput
          type="password"
          name="password"
          placeholder="Password"
          disableunderline="true"
        />
        <ErrorMessage name="password">
          {msg => <ErrorText>*{msg}</ErrorText>}
        </ErrorMessage>
        <FormButton variant="contained" type="submit">
          {!isLoading ? 'Login' : <Loader />}
        </FormButton>
      </Form>
    </Formik>
  );
};

export default LoginForm;
