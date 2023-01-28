import { Box, Typography } from '@mui/material';
import React from 'react';

function PetItem({ imgSrc, name, birthDate, breed, comments }) {
  return (
    <ul>
      <Box>
        <img src={imgSrc} alt="my pet" />
      </Box>
      <Box>
        <Typography>Name: {name}</Typography>
      </Box>
      <Box>
        <Typography>Date of birth: {birthDate}</Typography>
      </Box>
      <Box>
        <Typography>Breed: {breed}</Typography>
      </Box>
      <Box>
        <Typography>Comments: {comments}</Typography>
      </Box>
    </ul>
  );
}

export default PetItem;
