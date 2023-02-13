import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';
import {
  StyledInput,
  ErrorText,
  FormButton,
  StepperBox,
  ModalGrid,
  ModalTypography,
} from 'components/UserPage/ModalAddpetsNew/ModalAddPetsNew.styled';
import { useTranslation } from 'react-i18next';
import { parse, isDate } from 'date-fns';

function parseDateString(originalValue) {
  if (originalValue.length < 2) {
    return;
  }
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'MM-dd-yyyy', new Date());

  return parsedDate;
}

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
    .transform(parseDateString)
    .max(new Date(Date.now()), `Input correct date no later than today`)
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
  const { t } = useTranslation('common');
  const handleSubmit = async values => {
    if (values.date.length < 7) {
      toast.error('Invalid date type', { duration: 3000 });
      return;
    }
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
          <ModalTypography>{t('ModalAddPetNew.1line.title')}*</ModalTypography>
          <StyledInput
            name="name"
            placeholder={t('ModalAddPetNew.1line.placeholder')}
            disableunderline="true"
          />
          <ErrorMessage component="div" name="name">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </ModalGrid>
        <ModalGrid>
          <ModalTypography>{t('ModalAddPetNew.2line.title')}*</ModalTypography>
          <StyledInput
            name="date"
            placeholder={t('ModalAddPetNew.2line.placeholder')}
            disableunderline="true"
          />
          <ErrorMessage component="div" name="date">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </ModalGrid>
        <ModalGrid>
          <ModalTypography>{t('ModalAddPetNew.3line.title')}*</ModalTypography>
          <StyledInput
            name="breed"
            placeholder={t('ModalAddPetNew.3line.placeholder')}
            disableunderline="true"
          />
          <ErrorMessage component="div" name="breed">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>
        </ModalGrid>
        <StepperBox>
          <FormButton onClick={onModalClose} variant="outlined">
            {t('ModalAddPetNew.cancelBtn')}
          </FormButton>
          <FormButton variant="contained" type="submit">
            {t('ModalAddPetNew.nextBtn')}
          </FormButton>
        </StepperBox>
      </Form>
    </Formik>
  );
};

export default StepOne;
