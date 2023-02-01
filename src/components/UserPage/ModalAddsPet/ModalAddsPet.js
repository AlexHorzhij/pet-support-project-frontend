import React, { useState } from 'react';
import { Formik } from 'formik';
import { Grid, Box } from '@mui/material';
import { FormStepper } from '../FormStepper/FormStepper';
import Dropzone from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { addPetToList } from 'redux/petsData/petsOperations';
import { nanoid } from 'nanoid';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  ModalTyporgaphy,
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
function ModalAddsPet({ onModalClose }) {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const formSumbitHandler = async (values, onSubmitProps) => {
    const preview = URL.createObjectURL(values.picture);
    values.picture = preview;
    values.id = nanoid();

    dispatch(addPetToList(values));
    // const formData = new FormData();
    // for (let value in values) {
    //   formData.append(value, values[value]);
    // }
    // formData.append('picturePath', values.picture.name);
    // console.log('formData: ', formData);

    // alert(JSON.stringify(values, null, 2));
    onSubmitProps.resetForm();
    onModalClose();
  };

  const fileHandler = (acceptedFiles, setFieldValue) => {
    setFieldValue('picture', acceptedFiles[0]);
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
            initialValues={{
              name: '',
              dateOfBirth: '',
              breed: '',
              comment: '',
              picture: '',
              avatarURL: '',
              owner: '1',
            }}
            onSubmit={formSumbitHandler}
          >
            {({ values, setFieldValue }) => (
              <FormStepper onClose={onModalClose}>
                <Box>
                  <ModalGrid item md={6}>
                    <ModalTyporgaphy>Name pet</ModalTyporgaphy>
                    <ModalField
                      fullWidth
                      name="name"
                      component={TextField}
                      label="Type name pet"
                    />
                  </ModalGrid>
                  <ModalGrid item md={6}>
                    <ModalTyporgaphy>Date of birth</ModalTyporgaphy>
                    <ModalField
                      fullWidth
                      name="dateOfBirth"
                      component={TextField}
                      label="Type date of birth"
                    />
                  </ModalGrid>
                  <ModalGrid item md={6}>
                    <ModalTyporgaphy>Breed</ModalTyporgaphy>
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
                        {!values.picture ? (
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
                    <ModalTyporgaphy>Comments</ModalTyporgaphy>
                    <ModalMultiLineField
                      multiline={true}
                      rows={3.5}
                      fullWidth
                      name="comment"
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
