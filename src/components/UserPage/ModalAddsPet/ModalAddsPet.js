import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { FormStepper } from '../FormStepper/FormStepper';
import { Box } from '@mui/system';
import Dropzone from 'react-dropzone';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useDispatch } from 'react-redux';
import { addPetToList } from 'redux/petsData/petsOperations';
import { nanoid } from 'nanoid';
import { ModalTyporgaphy } from './ModalAddsPet.styled';
import { TextField } from 'formik-material-ui';
import addIconSVG from '../../../assets/images/myPets/addImage.svg';
function ModalAddsPet({ onModalClose }) {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const formSumbitHandler = async (values, onSubmitProps) => {
    const preview = URL.createObjectURL(values.picture);
    values.picture = preview;
    values.id = nanoid();
    console.log('values: ', values);

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

  return (
    <Formik enctype="multipart/form-data">
      <Card sx={{ width: '608px' }}>
        <CardContent sx={{ paddingY: 5, paddingX: 10 }}>
          <Typography sx={{ fontSize: '36px', textAlign: 'center' }}>
            Add pet
          </Typography>
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
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue,
              resetForm,
            }) => (
              <FormStepper onClose={onModalClose}>
                <Box>
                  <Grid
                    item
                    md={6}
                    sx={{
                      '&:not(:last-child)': {
                        mb: '28px',
                      },
                    }}
                  >
                    <ModalTyporgaphy>Name pet</ModalTyporgaphy>

                    <Field
                      sx={{
                        backgroundColor: '#FDF7F2',
                        borderRadius: '40px',

                        '&>label': {
                          color: 'rgba(17, 17, 17, 0.6)',
                        },

                        '&>label+div>input+fieldset': {
                          borderColor: 'rgba(245, 146, 86, 0.5)',
                        },
                      }}
                      fullWidth
                      name="name"
                      component={TextField}
                      label="Type name pet"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    sx={{
                      '&:not(:last-child)': {
                        mb: '28px',
                      },
                    }}
                  >
                    <ModalTyporgaphy>Date of birth</ModalTyporgaphy>

                    <Field
                      sx={{
                        backgroundColor: '#FDF7F2',
                        borderRadius: '40px',
                        '&>label': {
                          color: 'rgba(17, 17, 17, 0.6)',
                        },
                        '&>label+div>input+fieldset': {
                          borderColor: 'rgba(245, 146, 86, 0.5)',
                        },
                      }}
                      fullWidth
                      name="dateOfBirth"
                      component={TextField}
                      label="Type date of birth"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    sx={{
                      '&:not(:last-child)': {
                        mb: '28px',
                      },
                    }}
                  >
                    <ModalTyporgaphy>Breed</ModalTyporgaphy>
                    <Field
                      sx={{
                        backgroundColor: '#FDF7F2',
                        borderRadius: '26px',
                        '&>label': {
                          color: 'rgba(17, 17, 17, 0.6)',
                        },
                        '&>label+div>input+fieldset': {
                          borderColor: 'rgba(245, 146, 86, 0.5)',
                        },
                      }}
                      fullWidth
                      name="breed"
                      component={TextField}
                      label="Last Name"
                    />
                  </Grid>
                </Box>
                <Grid
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{ fontSize: '20px', textAlign: 'center', mb: '20px' }}
                  >
                    Add photo and some comments
                  </Typography>
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={acceptedFiles => {
                      setFieldValue('picture', acceptedFiles[0]);

                      acceptedFiles.map(file => {
                        const reader = new FileReader();
                        reader.onload = function (e) {
                          setImages([{ src: e.target.result }]);
                        };
                        reader.readAsDataURL(file);
                        return file;
                      });
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        {...getRootProps()}
                        p="1rem"
                        sx={{
                          '&:hover': { cursor: 'pointer' },
                          boxSizing: 'border-box',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '182px',
                          height: '182px',
                          borderRadius: '40px',
                          backgroundColor: '#FDF7F2',
                          m: '0',
                        }}
                      >
                        <input {...getInputProps()} />
                        {!values.picture ? (
                          <Box>
                            <img src={addIconSVG} alt="add pet avatar" />

                            {/* <AddOutlinedIcon
                              sx={{
                                fontSize: '83px',
                              }}
                            /> */}
                          </Box>
                        ) : (
                          <Box
                            sx={{
                              height: '100%',
                              borderRadius: '40px',
                              overflow: 'auto',
                            }}
                          >
                            {images.length > 0 && (
                              <img
                                style={{ height: '100%', objectFit: 'cover' }}
                                alt="preview"
                                src={images[0]?.src}
                                className="file-img"
                              />
                            )}
                          </Box>
                        )}
                      </Box>
                    )}
                  </Dropzone>
                  <Grid item md={6} sx={{ mt: '40px' }}>
                    <Field
                      sx={{
                        backgroundColor: '#FDF7F2',
                        width: '395px',
                        borderRadius: '20px',

                        '&>label': {
                          color: 'rgba(17, 17, 17, 0.6)',
                        },
                        '&>label+div>textarea+textarea+fieldset': {
                          borderColor: 'rgba(245, 146, 86, 0.5)',
                        },
                        '&>label+div': {
                          borderRadius: '20px',
                        },
                      }}
                      multiline={true}
                      rows={5}
                      fullWidth
                      name="comment"
                      component={TextField}
                      label="Type comment"
                    />
                  </Grid>
                </Grid>
              </FormStepper>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Formik>
  );
}

export default ModalAddsPet;
