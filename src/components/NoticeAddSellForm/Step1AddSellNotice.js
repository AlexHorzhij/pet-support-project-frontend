import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
    StyledInput,
    ErrorText,
    FormButton,
} from 'components/RegisterForm/Forms.styled';
import { Typography, Grid } from '@mui/material';
import { Button, DialogContentText, DialogActions } from '@mui/material';

const schema = yup.object().shape({
    tittle: yup
        .string()
        .min(2)
        .max(40)
        .required(),
});

export const Step1AddSellNotice = ({ next, data, handleClose }) => {
    const handleSubmit = values => {
        next(values);
    };

    return (
        <Formik
            initialValues={data}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            <Form>
                <DialogContentText sx={{ color: 'text.primary', fontSize: 20, fontWeight: 500, lineHeight: 1.37, textAlign: 'center', pb: 2 }}
                >Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </DialogContentText>
                <DialogActions sx={{ justifyContent: 'center', mb: 2 }}>
                    <Button
                        variant="contained"
                        sx={{ textTransform: 'lowercase' }}
                    >
                        sell
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{ textTransform: 'lowercase' }}
                    >
                        lost/found
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{ textTransform: 'lowercase' }}
                    >
                        in good hands
                    </Button>
                </DialogActions>

                <Typography variant='h4'>Tittle of ad *</Typography>
                <StyledInput sx={{ mt: 2, mb: 4 }}
                    name="tittle"
                    disableunderline="true"
                />
                <ErrorMessage component="div" name="tittle">
                    {msg => <ErrorText>*{msg}</ErrorText>}
                </ErrorMessage>
                <Typography variant='h4'>Name pet</Typography>
                <StyledInput sx={{ mt: 2, mb: 4 }}
                    name="namePet"
                />
                <Typography variant='h4'>Date of birth</Typography>
                <StyledInput sx={{ mt: 2, mb: 4 }}
                    name="dateOfBirth"
                />
                <Typography variant='h4'>Breed</Typography>
                <StyledInput sx={{ mt: 2, mb: 4 }}
                    name="breed"
                />
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <FormButton variant="contained"
                            onClick={handleClose}
                        >
                            Cancel
                        </FormButton>
                    </Grid>
                    <Grid item xs={6}>
                        <FormButton variant="contained" type="submit">
                            Next
                        </FormButton>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    );
};