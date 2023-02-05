import React, { useState } from 'react';
import { Formik } from 'formik';
import { Grid, Box } from '@mui/material';
import { FormStepper } from '../FormStepper/FormStepper';
import Dropzone from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { getUser } from 'redux/userData/userDataSelectors';
import * as yup from 'yup';
import {
  ModalTypography,
  ModalCard,
  ModalCardContent,
  AddPetTitle,
  ModalGrid,
  ModalField,
  SecondStepBox,
  AddPetComment,
  DropZoneBox,
  DropZonePreviewBox,
  ModalMultiLineField,
  ModalCloseButton,
} from './ModalAddsPet.styled';
import { TextField } from 'formik-material-ui';
import addIconSVG from '../../../assets/images/myPets/addImage.svg';
import { addPetToList } from 'redux/userData/userDataOperations';

const schema = yup.object().shape({
  name: yup.string().required(),
  date: yup.string().required(),
  breed: yup.string().required(),
  description: yup.string().required(),
  avatarUrl: yup.mixed().required('File is required'),
});

const initialValues = {
  name: '',
  date: '',
  breed: '',
  description: '',
  avatarUrl: '',
};

function ModalAddsPet({ onModalClose }) {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);

  const formSubmitHandler = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }

    formData.append('owner', user._id);


    dispatch(addPetToList(formData));
    // alert(JSON.stringify(values, null, 2));
    onSubmitProps.resetForm();
    onModalClose();
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
    <Formik>
      <ModalCard>
        <ModalCardContent>
          <ModalCloseButton onClick={onModalClose}>
            <CloseOutlinedIcon sx={{ fontSize: '30px' }} />
          </ModalCloseButton>
          <AddPetTitle>Add pet</AddPetTitle>
          <Formik
            validationSchema={schema}
            initialValues={initialValues}
            onSubmit={formSubmitHandler}
          >
            {({ values, setFieldValue }) => (
              <FormStepper onClose={onModalClose}>
                <Box>
                  <ModalGrid item md={6}>
                    <ModalTypography>Name pet</ModalTypography>
                    <ModalField
                      fullWidth
                      name="name"
                      component={TextField}
                      label="Type name pet"
                    />
                  </ModalGrid>
                  <ModalGrid item md={6}>
                    <ModalTypography>Date of birth</ModalTypography>
                    <ModalField
                      fullWidth
                      name="date"
                      component={TextField}
                      label="Type date of birth"
                    />
                  </ModalGrid>
                  <ModalGrid item md={6}>
                    <ModalTypography>Breed</ModalTypography>
                    <ModalField
                      fullWidth
                      name="breed"
                      component={TextField}
                      label="Type breed"
                    />
                  </ModalGrid>
                </Box>
                <SecondStepBox>
                  <AddPetComment>Add photo and some comments</AddPetComment>
                  <Dropzone
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
                  <Grid item md={6} sx={{ mt: '40px' }}>
                    <ModalTypography>Comments</ModalTypography>
                    <ModalMultiLineField
                      multiline={true}
                      rows={3.5}
                      fullWidth
                      name="description"
                      component={TextField}
                      label="Type comment"
                    />
                  </Grid>
                </SecondStepBox>
              </FormStepper>
            )}
          </Formik>
        </ModalCardContent>
      </ModalCard>
    </Formik>
  );
}

export default ModalAddsPet;
