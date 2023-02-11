import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import Dropzone from 'react-dropzone';
import { Typography, Grid, Box } from '@mui/material';

import { StyledInput, ErrorText, FormButton, } from 'components/RegisterForm/Forms.styled';
import { StyledInputCheckBox, StyledLabel } from './NoticeAddForm.styled';
import { DropZoneBox, DropZonePreviewBox, ModalMultiLineField, } from 'components/UserPage/ModalAddsPet/ModalAddsPet.styled';

import MaleIcon from 'assets/images/addNoticeSellIcons/male.svg';
import FemaleIcon from 'assets/images/addNoticeSellIcons/female.svg';
import addIconSVG from 'assets/images/myPets/addImage.svg';


export const Step2AddNotice = ({ next, prev, data, preview }) => {
  const [images, setImages] = useState([]);

  const validateSchema = {
    sex: yup.string().oneOf(['male', 'female']).required(),
    location: yup
      .string()
      .min(3)
      .max(40)
      .matches(/^[A-Za-z,\u0400-\u04FF]*$/, 'String must contain only letters')
      .required(),
    avatarUrl: yup.string(),
    comments: yup
      .string()
      .max(100, 'Comment should be no longer than 100 characters'),
  };
  if (data.category === 'sell') {
    validateSchema.price = yup
      .string()
      .matches(
        /^[1-9]\d*$/,
        'String must contain only positive number, and no more that 6'
      )
      .required()
      .max(6);
  }

  const schema = yup.object().shape(validateSchema);

  const handleSubmit = (values, { resetForm }) => {
    console.log('values: ', values);
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
          <Typography sx={{ mb: 1 }} variant="h4">
            Sex *
          </Typography>

          <div
            style={{ display: 'flex' }}
            role="group"
            aria-label="my-radio-group"
          >
            <StyledLabel>
              <StyledInputCheckBox
                style={{ backgroundImage: `url(${MaleIcon})` }}
                type="radio"
                name="sex"
                value="male"
              />
              Male
            </StyledLabel>
            <StyledLabel>
              <StyledInputCheckBox
                style={{ backgroundImage: `url(${FemaleIcon})` }}
                type="radio"
                name="sex"
                value="female"
              />
              Female
            </StyledLabel>
            <ErrorMessage component="div" name="sex">
              {msg => <ErrorText>*{msg}</ErrorText>}
            </ErrorMessage>
          </div>

          <Typography variant="h4" sx={{ mt: 2, mb: 1 }}>
            Location *
          </Typography>
          <Box sx={{ position: 'relative' }}>
            <StyledInput
              style={{ mt: 2, mb: 4 }}
              name="location"
              disableunderline="true"
              placeholder="Type location"
            />
            <ErrorMessage component="div" name="location">
              {msg => <ErrorText>*{msg}</ErrorText>}
            </ErrorMessage>
          </Box>
          {data.category === 'sell' && (
            <>
              <Typography variant="h4">Price *</Typography>
              <StyledInput name="price"
                sx={{ mt: 2, mb: 4 }}
                disableunderline="true"
                placeholder="Type price"
              />
              <ErrorMessage component="div" name="price">
                {msg => <ErrorText>*{msg}</ErrorText>}
              </ErrorMessage>
            </>
          )}

          <Typography sx={{ mb: 1, mt: 2 }} variant="h4">
            Load the pet’s image:
          </Typography>
          <Dropzone
            sx={{ width: '100%' }}
            accept={{ 'image/*': ['.jpg', '.jpeg', '.png'] }}
            multiple={false}
            onDrop={acceptedFiles => fileHandler(acceptedFiles, setFieldValue)}
          >
            {({ getRootProps, getInputProps }) => (
              <DropZoneBox
                sx={{
                  backgroundImage: `url(${preview ? preview : data.avatarUrl})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
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
                      <img alt="preview"
                        style={{ height: '100%', objectFit: 'cover' }}
                        src={images[0]?.src}
                      />
                    )}
                  </DropZonePreviewBox>
                )}
              </DropZoneBox>
            )}
          </Dropzone>

          <Grid item md={6} sx={{ mt: '40px' }}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              Comments:
            </Typography>
            <ModalMultiLineField name="comments"
              fullWidth
              multiline={true} rows={3.5}
              component={TextField} label="Type comment"
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
