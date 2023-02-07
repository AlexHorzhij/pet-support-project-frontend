import React, { useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import {
  StyledInput,
  ErrorText,
  FormButton,
} from 'components/RegisterForm/Forms.styled';
import { Typography, Grid, Box } from '@mui/material';

import Dropzone from 'react-dropzone';
import {
  DropZoneBox,
  DropZonePreviewBox,
  ModalMultiLineField,
} from 'components/UserPage/ModalAddsPet/ModalAddsPet.styled';
import addIconSVG from 'assets/images/myPets/addImage.svg';

import { TextField } from 'formik-material-ui';

const schema = yup.object().shape({
  sex: yup.string().oneOf(['male', 'female']).required(),
  location: yup
    .string()
    .min(3)
    .max(40)
    .matches(/^[A-Za-z,\u0400-\u04FF]*$/, 'String must contain only letters')
    .required(),
  price: yup
    .string()
    .matches(/^[1-9]\d*$/, 'String must contain only positive number')
    .required(),
  avatarUrl: yup.string().required(),
  description: yup.string().required(),
});

export const Step2AddNotice = ({ next, prev, data }) => {
  const [images, setImages] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
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
    >
      {({ values, setFieldValue }) => (
        <Form>
          <Typography variant="h4">Sex *</Typography>

          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="sex" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="sex" value="female" />
              Female
            </label>
          </div>

          <Typography variant="h4">Location *</Typography>
          <StyledInput
            sx={{ mt: 2, mb: 4 }}
            name="location"
            disableunderline="true"
          />
          <ErrorMessage component="div" name="location">
            {msg => <ErrorText>*{msg}</ErrorText>}
          </ErrorMessage>

          {/* {data.status === 'sell' && ( */}
          <>
            <Typography variant="h4">Price *</Typography>
            <StyledInput
              sx={{ mt: 2, mb: 4 }}
              name="price"
              disableunderline="true"
            />
            <ErrorMessage component="div" name="price">
              {msg => <ErrorText>*{msg}</ErrorText>}
            </ErrorMessage>
          </>
          {/* )} */}

          <Typography variant="h4">Load the pet’s image:</Typography>
          <Dropzone
            accept={{ 'image/*': ['.jpg', '.jpeg', '.png'] }}
            multiple={false}
            onDrop={acceptedFiles => fileHandler(acceptedFiles, setFieldValue)}
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

          <Grid item md={6} sx={{ mt: '40px' }}>
            <Typography>Comments</Typography>
            <ModalMultiLineField
              multiline={true}
              rows={3.5}
              fullWidth
              name="description"
              component={TextField}
              label="Type comment"
            />
          </Grid>

          <Grid container spacing={4}>
            <Grid item xs={6}>
              <FormButton variant="contained" onClick={() => prev(values)}>
                Back
              </FormButton>
            </Grid>
            <Grid item xs={6}>
              <FormButton variant="contained" type="submit">
                Done
              </FormButton>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
