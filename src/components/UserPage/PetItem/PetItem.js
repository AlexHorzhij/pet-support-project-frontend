import { useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deletePetFromList } from 'redux/petsData/petsOperations';

function PetItem({ imgSrc, name, birthDate, breed, comment, id }) {
  const dispatch = useDispatch();

  const handlePetDelete = petId => {
    dispatch(deletePetFromList(petId));
  };

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
        <img
          style={{ width: '161px', height: '161px', borderRadius: '40px' }}
          src={imgSrc}
          alt="my pet"
        />
      </Box>
      <Box sx={{ ml: '10px', mr: 'auto' }}>
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
          <Typography>Comments: {comment}</Typography>
        </Box>
      </Box>
      <IconButton
        onClick={() => handlePetDelete(id)}
        sx={{ backgroundColor: '#FDF7F2' }}
      >
        <DeleteIcon />
      </IconButton>
    </ul>
  );
}

export default PetItem;
