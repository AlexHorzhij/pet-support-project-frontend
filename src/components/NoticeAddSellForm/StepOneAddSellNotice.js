import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
    StyledInput,
    ErrorText,
    FormButton,
} from 'components/RegisterForm/Forms.styled';
import { Typography, Grid } from '@mui/material';

const schema = yup.object().shape({
    tittle: yup
        .string()
        .min(3)
        .max(40)
        .required(),
});

export const StepOneAddSellNotice = ({ next, data, handleClose }) => {
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
                        onClick={handleClose}>
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