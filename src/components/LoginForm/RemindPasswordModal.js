import React from 'react';
import { Box } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { ModalCloseButton } from '../NoticesPageComponents/LearnMoreModal/LearnMoreModal.styled';
import {
  StyledInput,
  ErrorText,
  FormButton,
} from 'components/RegisterForm/Forms.styled';
import { ContentWrapper, HeaderText } from 'pages/LoginPage/LoginPage.styled';
import { Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { getAuth } from 'redux/auth/authSelectors';
import { LoaderWhite } from 'components/Loader/Loader';

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
});

export default function RemindPasswordModal({ onModalClose }) {
  const { isLoading } = useSelector(getAuth);
  //   const dispatch = useDispatch();

  const handleSubmit = () => {
    toast.success(
      'We sent you an email with further instructions. Check your mailbox',
      { duration: 10000 }
    );
    onModalClose();
  };

  return (
    <ContentWrapper>
      <ModalCloseButton onClick={onModalClose}>
        <CloseOutlinedIcon sx={{ fontSize: '30px' }} />
      </ModalCloseButton>
      <HeaderText>Enter your email and we will help you!</HeaderText>
      <Formik
        initialValues={{ email: '' }}
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
            <ErrorMessage name="email">
              {msg => <ErrorText>*{msg}</ErrorText>}
            </ErrorMessage>
          </Box>
          <FormButton variant="contained" type="submit">
            {!isLoading ? 'Remind' : <LoaderWhite />}
          </FormButton>
        </Form>
      </Formik>
    </ContentWrapper>
  );
}
