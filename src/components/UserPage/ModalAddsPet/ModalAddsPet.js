import React from 'react';
import { Formik, Field } from 'formik';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { TextField } from 'formik-material-ui';
import { FormStepper } from '../FormStepper/FormStepper';
import { Box } from '@mui/system';
import Dropzone from 'react-dropzone';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { useDispatch } from 'react-redux';
import { addPetToList } from 'redux/petsData/petsOperations';
import { nanoid } from 'nanoid';
function ModalAddsPet({ onModalClose }) {
  const dispatch = useDispatch();
  const formSumbitHandler = async (values, onSubmitProps) => {
    const preview = URL.createObjectURL(values.picture);
    console.log('preview: ', preview);
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

  return (
    <Formik enctype="multipart/form-data">
      <Card>
        <CardContent sx={{ paddingY: 10, paddingX: 5 }}>
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
              <FormStepper>
                <Box>
                  <Grid
                    item
                    md={6}
                    sx={{
                      '&:not(:last-child)': {
                        mb: '10px',
                      },
                    }}
                  >
                    <Typography>Name pet</Typography>
                    <Field
                      fullWidth
                      name="name"
                      component={TextField}
                      label="Type name"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    sx={{
                      '&:not(:last-child)': {
                        mb: '10px',
                      },
                    }}
                  >
                    <Typography>Date of birth</Typography>

                    <Field
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
                        mb: '10px',
                      },
                    }}
                  >
                    <Typography>Breed</Typography>
                    <Field
                      fullWidth
                      name="breed"
                      component={TextField}
                      label="Type breed"
                    />
                  </Grid>
                </Box>
                <Grid>
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={acceptedFiles =>
                      setFieldValue('picture', acceptedFiles[0])
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        {...getRootProps()}
                        p="1rem"
                        sx={{
                          '&:hover': { cursor: 'pointer' },
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '40px',
                          height: '40px',
                          m: '0',
                        }}
                      >
                        <input {...getInputProps()} />
                        {!values.picture ? (
                          <Box>
                            <AddOutlinedIcon />
                          </Box>
                        ) : (
                          <Box>
                            <CheckOutlinedIcon />
                          </Box>
                        )}
                      </Box>
                    )}
                  </Dropzone>
                  <Grid item md={6}>
                    <Field
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
    // <Box
    //   sx={{
    //     backgroundColor: 'white',
    //     padding: '25px',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     position: 'relative',
    //   }}
    // >
    //   <IconButton
    //     type="button"
    //     onClick={onModalClose}
    //     sx={{ position: 'absolute', top: 0, right: 0 }}
    //   >
    //     <CancelOutlinedIcon
    //       sx={{
    //         backgroundColor: '#FDF7F2',
    //         borderRadius: '50%',
    //         color: 'black',
    //       }}
    //     />
    //   </IconButton>
    //   <Typography>Add pet</Typography>
    //   <form>
    //     <label>
    //       Name pet
    //       <input
    //         style={{
    //           borderColor: '#F59256',
    //           backgroundColor: '#FDF7F2',
    //           borderWidth: '1px',
    //           padding: '5px 10px',
    //           borderStyle: 'solid',
    //           borderRadius: '15px',
    //           width: '230px',
    //           margin: '0 15px',
    //           appearance: 'none',
    //           outline: 'none',
    //         }}
    //         placeholder="Type name pet"
    //       />
    //     </label>
    //     <label>
    //       Date of birth
    //       <input
    //         style={{
    //           borderColor: '#F59256',
    //           backgroundColor: '#FDF7F2',
    //           borderWidth: '1px',
    //           padding: '5px 10px',
    //           borderStyle: 'solid',
    //           borderRadius: '15px',
    //           width: '230px',
    //           margin: '0 15px',
    //           appearance: 'none',
    //           outline: 'none',
    //         }}
    //         placeholder="Type date of birth"
    //       />
    //     </label>
    //     <label>
    //       Breed
    //       <input
    //         style={{
    //           borderColor: '#F59256',
    //           backgroundColor: '#FDF7F2',
    //           borderWidth: '1px',
    //           padding: '5px 10px',
    //           borderStyle: 'solid',
    //           borderRadius: '15px',
    //           width: '230px',
    //           margin: '0 15px',
    //           appearance: 'none',
    //           outline: 'none',
    //         }}
    //         placeholder="Type breed"
    //       />
    //     </label>
    //   </form>
    //   <Box>
    //     <IconButton>Cancel</IconButton>
    //     <IconButton>Next</IconButton>
    //   </Box>
    // </Box>
  );
}

export default ModalAddsPet;