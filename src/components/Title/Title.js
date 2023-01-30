import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { PageTitle } from './Title.styled';

export const Title = ({ text }) => {
  return (
    // <Box >
    <PageTitle variant="h2">{text}</PageTitle>
    // </Box>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
