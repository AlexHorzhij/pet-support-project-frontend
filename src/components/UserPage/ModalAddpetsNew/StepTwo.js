import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  ErrorText,
  FormButton,
  StepperBox,
  AddPetComment,
  DropZoneBox,
  DropZonePreviewBox,
  ModalGrid,
  ModalMultiLineField,
  ModalTypography,
  SecondStepBox,
} from 'components/UserPage/ModalAddpetsNew/ModalAddPetsNew.styled';
import Dropzone from 'react-dropzone';

import { Box } from '@mui/material';
import addIconSVG from '../../../assets/images/myPets/addImage.svg';
import { TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';

const schema = yup.object().shape({
  description: yup.string().required().min(8).max(120),
  avatarUrl: yup.mixed().required('File is required'),
});

const StepTwo = ({ next, prev, data, preview }) => {
  const [images, setImages] = useState([]);
  const { t } = useTranslation('common');

  const handleSubmit = async (values, { resetForm }) => {
    next(values, true);
    resetForm();
  };

  const fileHandler = (acceptedFiles, setFieldValue) => {
    setFieldValue('avatarUrl', acceptedFiles[0]);
    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages([{ src: e.target.result }]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ values, setFieldValue }) => {
        return (
          <Form>
            <SecondStepBox>
              <AddPetComment>{t('ModalAddPetNew.4lineTitle')}</AddPetComment>
              <Box sx={{ position: 'relative', marginBottom: '30px' }}>
                <Dropzone
                  className="dropZone"
                  accept={{ 'image/*': ['.jpg', '.jpeg', '.png'] }}
                  multiple={false}
                  onDrop={acceptedFiles =>
                    fileHandler(acceptedFiles, setFieldValue)
                  }
                >
                  {({ getRootProps, getInputProps }) => (
                    <DropZoneBox
                      sx={{
                        backgroundImage: `url(${
                          preview ? preview : data.avatarUrl
                        })`,
                      }}
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      {!values.avatarUrl ? (
                        <Box>
                          <img src={addIconSVG} alt="add pet avatar" />
                        </Box>
                      ) : (
                        <DropZonePreviewBox>
                          {images.length > 0 && (
                            <img
                              style={{ height: '100%', objectFit: 'cover' }}
                              alt="preview"
                              src={images[0].src}
                            />
                          )}
                        </DropZonePreviewBox>
                      )}
                    </DropZoneBox>
                  )}
                </Dropzone>
                <ErrorMessage component="div" name="avatarUrl">
                  {msg => <ErrorText>*{msg}</ErrorText>}
                </ErrorMessage>
              </Box>
              <ModalGrid>
                <ModalTypography>
                  {t('ModalAddPetNew.5line.title')}*
                </ModalTypography>
                <ModalMultiLineField
                  multiline={true}
                  rows={3.5}
                  fullWidth
                  name="description"
                  component={TextField}
                  label={t('ModalAddPetNew.5line.placeholder')}
                  disableunderline="true"
                />
                <ErrorMessage component="div" name="description">
                  {msg => <ErrorText>*{msg}</ErrorText>}
                </ErrorMessage>
              </ModalGrid>
              <StepperBox>
                <FormButton
                  variant="outlined"
                  type="button"
                  onClick={() => {
                    prev(values);
                  }}
                >
                  {t('ModalAddPetNew.backBtn')}
                </FormButton>
                <FormButton variant="contained" type="submit">
                  {t('ModalAddPetNew.finalBtn')}
                </FormButton>
              </StepperBox>
            </SecondStepBox>
          </Form>
        );
      }}
    </Formik>
  );
};

export default StepTwo;
