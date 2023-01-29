import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function PetItem({ imgSrc, name, birthDate, breed, comments }) {
  return (
    <ul
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'start',
        backgroundColor: 'white',
        borderRadius: '40px',
        boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
        padding: '20px',
      }}
    >
      <Box>
        <img src={imgSrc} alt="my pet" />
      </Box>
      <Box sx={{ ml: '10px' }}>
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
      </Box>
      <IconButton sx={{ backgroundColor: '#FDF7F2' }}>
        <DeleteIcon />
      </IconButton>
    </ul>
  );
}

export default PetItem;
