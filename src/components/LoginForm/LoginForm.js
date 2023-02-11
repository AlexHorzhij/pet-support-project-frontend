import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from 'redux/auth/authSelectors';
import { loginUser } from 'redux/auth/authOperations';
import { LoaderWhite } from 'components';
import {
  StyledInput,
  ErrorText,
  FormButton,
} from 'components/RegisterForm/Forms.styled';
import { Box } from '@mui/system';
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
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(getAuth);
  const { t } = useTranslation('common');

  const handleSubmit = values => {
    const { email, password } = values;
    dispatch(loginUser({ email: email, password: password }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Box sx={{ position: 'relative' }}>
          <StyledInput
            type="email"
            name="email"
            placeholder={t('Login.form.emailPlaceholder')}
            disableunderline="true"
          />
          <ErrorMessage name="email">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <StyledInput
            type="password"
            name="password"
            placeholder={t('Login.form.passwordPlaceholder')}
            disableunderline="true"
          />
          <ErrorMessage name="password">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </Box>
        <FormButton variant="contained" type="submit">
          {!isLoading ? t('Login.form.btn') : <LoaderWhite />}
        </FormButton>
      </Form>
    </Formik>
  );
};

export default LoginForm;
