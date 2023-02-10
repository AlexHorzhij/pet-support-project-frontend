import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  StyledInput,
  ErrorText,
  FormButton,
  StepperBox,
  ModalGrid,
  ModalTypography,
} from 'components/UserPage/ModalAddpetsNew/ModalAddPetsNew.styled';
import { useTranslation } from 'react-i18next';

const min = '1990-01-01';
const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z\s,\u0400-\u04FF]*$/, 'String must contain only letters')
    .required(),
  date: yup
    .date()
    .max(
      new Date(Date.now()),
      `Input correct date MM.DD.YYYY no later than today`
    )
    .min(new Date(min), `Input correct  no erlier than 1990`)
    .required(),
  breed: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z\s,\u0400-\u04FF]*$/, 'String must contain only letters')
    .required(),
});

const StepOne = ({ next, data, onModalClose }) => {
  const { t } = useTranslation();
  const handleSubmit = async values => {
    next(values);
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      <Form>
        <ModalGrid>
          <ModalTypography>{t('PetName')}*</ModalTypography>
          <StyledInput
            name="name"
            placeholder={t('TypePetName')}
            disableunderline="true"
          />
          <ErrorMessage component="div" name="name">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </ModalGrid>
        <ModalGrid>
          <ModalTypography>{t('DateOfBirth')}*</ModalTypography>
          <StyledInput
            name="date"
            placeholder={t('TypeDoB')}
            disableunderline="true"
          />
          <ErrorMessage component="div" name="date">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </ModalGrid>
        <ModalGrid>
          <ModalTypography>{t('Breed')}*</ModalTypography>
          <StyledInput
            name="breed"
            placeholder={t('TypeBreed')}
            disableunderline="true"
          />
          <ErrorMessage component="div" name="breed">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </ModalGrid>
        <StepperBox>
          <FormButton onClick={onModalClose} variant="outlined">
            {t('Cancel')}
          </FormButton>
          <FormButton variant="contained" type="submit">
            {t('Next')}
          </FormButton>
        </StepperBox>
      </Form>
    </Formik>
  );
};

export default StepOne;
