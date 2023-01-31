import { Box, IconButton, Typography, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deletePetFromList } from 'redux/petsData/petsOperations';

function PetItem({ imgSrc, name, birthDate, breed, comment, id }) {
  const dispatch = useDispatch();

  const handlePetDelete = petId => {
    dispatch(deletePetFromList(petId));
  };

  return (
    <ListItem
      sx={{
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'start',
        backgroundColor: 'white',
        borderRadius: '40px',
        boxShadow: '7px 14px 11px 0px rgba(49, 21, 4, 0.07)',
        padding: '20px',
        '&:not(:last-child)': {
          mb: '22px',
        },
      }}
    >
      <Box sx={{ minWidth: '161px', height: '161px' }}>
        <img
          style={{
            width: '161px',
            height: '161px',
            borderRadius: '40px',
            objectFit: 'cover',
          }}
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
    </ListItem>
  );
}

export default PetItem;
