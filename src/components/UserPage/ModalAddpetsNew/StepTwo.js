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
} from 'components/UserPage/ModalAddpetsNew/Forms.styled';

import Dropzone from 'react-dropzone';

import { Box } from '@mui/material';
import addIconSVG from '../../../assets/images/myPets/addImage.svg';
import { TextField } from 'formik-material-ui';

const schema = yup.object().shape({
  description: yup.string().required(),
  avatarUrl: yup.mixed().required('File is required'),
});

const StepTwo = ({ next, prev, data, isUpdateAction }) => {
  const [images, setImages] = useState([]);

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
              <AddPetComment>Add photo and some comments</AddPetComment>
              <Box sx={{ position: 'relative', marginBottom: '30px' }}>
                <Dropzone
                  className="dropZone"
                  acceptedFiles=".jpg,.jpeg,.png"
                  multiple={false}
                  onDrop={acceptedFiles =>
                    fileHandler(acceptedFiles, setFieldValue)
                  }
                >
                  {({ getRootProps, getInputProps }) => (
                    <DropZoneBox {...getRootProps()}>
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
                              src={images[0]?.src}
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
                <ModalTypography>Name pet*</ModalTypography>
                <ModalMultiLineField
                  multiline={true}
                  rows={3.5}
                  fullWidth
                  name="description"
                  component={TextField}
                  label="Type comment"
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
                  onClick={() => prev(values)}
                >
                  Back
                </FormButton>
                <FormButton variant="contained" type="submit">
                  Done
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
