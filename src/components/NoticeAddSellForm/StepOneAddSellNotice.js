import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
    StyledInput,
    ErrorText,
    FormButton,
} from 'components/RegisterForm/Forms.styled';
import { Typography } from '@mui/material';

const schema = yup.object().shape({
    tittle: yup
        .string()
        .min(3)
        .max(40)
        .required(),
});

export const StepOneAddSellNotice = ({ next, data }) => {
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
                <Typography>Lorem ips lm ipsum dolor</Typography>
                <Typography>Tittle of ad *</Typography>
                <StyledInput
                    name="tittle"
                    disableunderline="true"
                />
                <ErrorMessage component="div" name="tittle">
                    {msg => <ErrorText>*{msg}</ErrorText>}
                </ErrorMessage>
                <Typography>Name pet</Typography>
                <StyledInput
                    sx={{width: '608px'}}
                    name="namePet"
                />
                <Typography>Date of birth</Typography>
                <StyledInput
                    name="dateOfBirth"
                />
                <Typography>Breed</Typography>
                <StyledInput
                    name="breed"
                />
                <FormButton variant="contained" type="submit">
                    Next
                </FormButton>
            </Form>
        </Formik>
    );
};