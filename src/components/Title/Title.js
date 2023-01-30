import React from 'react';
import PropTypes from 'prop-types';
import { PageTitle } from './Title.styled';

export const Title = ({ text }) => {
  return <PageTitle variant="h2">{text}</PageTitle>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
