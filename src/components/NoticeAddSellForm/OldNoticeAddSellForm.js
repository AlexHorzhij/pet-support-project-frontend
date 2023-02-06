// import { InputLabel, InputBase, Paper } from '@mui/material'
// import { useTheme } from '@mui/material'
// 
import React, { useState } from 'react';
import { Formik } from 'formik';
import { Grid, Box } from '@mui/material';
import { FormStepper } from 'components/UserPage/FormStepper/FormStepper';
import Dropzone from 'react-dropzone';
// import { useDispatch } from 'react-redux';
// import { addNotice } from 'redux/''
import { nanoid } from 'nanoid';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  ModalTypography,
  ModalCard,
  ModalCardContent,
  AddPetTitle,
  ModalGrid,
  SecondStepBox,
  AddPetComment,
  DropZoneBox,
  DropZonePreviewBox,
  ModalMultiLineField,
  ModalCloseButton,
} from 'components/UserPage/ModalAddsPet/ModalAddsPet.styled';

import { TextField } from 'formik-material-ui';
import addIconSVG from 'assets/images/myPets/addImage.svg';

export default function NoticeAddForm({ handleClose }) {
  // const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const formSubmitHandler = async (values, onSubmitProps) => {
    const preview = URL.createObjectURL(values.picture);
    values.picture = preview;
    values.id = nanoid();

    // dispatch(addNotice(values));

    onSubmitProps.resetForm();
    handleClose();
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
          <ModalCloseButton onClick={handleClose}>
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
            onSubmit={formSubmitHandler}
          >
            {({ values, setFieldValue }) => (
              <FormStepper onClose={handleClose}>
                <Box>
                  <ModalGrid item md={6}>
                    <AddPetComment>Lorem ipsum dolor</AddPetComment>
                    <ModalTypography>Tittle of ad</ModalTypography>
                  </ModalGrid>
                  <ModalGrid item md={6}>
                  </ModalGrid>
                  <ModalGrid item md={6}>
                  </ModalGrid>
                  <ModalGrid item md={6}>
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
                    <ModalTypography>Comments</ModalTypography>
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
