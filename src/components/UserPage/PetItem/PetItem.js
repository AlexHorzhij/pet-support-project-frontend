import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deletePetFromList } from 'redux/petsData/petsOperations';
import {
  PetListItem,
  PetImageBox,
  PetImage,
  PetInfoBox,
  PetInfoTitleSpan,
  PetInfoTypography,
} from './PetItem.styled';
function PetItem({ imgSrc, name, birthDate, breed, comment, id }) {
  const dispatch = useDispatch();

  const handlePetDelete = petId => {
    dispatch(deletePetFromList(petId));
  };

  return (
    <PetListItem>
      <PetImageBox>
        <PetImage src={imgSrc} alt="my pet" />
      </PetImageBox>
      <Box sx={{ display: 'flex', position: 'relative', width: '100%' }}>
        <PetInfoBox>
          <PetInfoTypography>
            <PetInfoTitleSpan>Name:</PetInfoTitleSpan> {name}
          </PetInfoTypography>
          <PetInfoTypography>
            <PetInfoTitleSpan>Date of birth:</PetInfoTitleSpan> {birthDate}
          </PetInfoTypography>
          <PetInfoTypography>
            <PetInfoTitleSpan>Breed:</PetInfoTitleSpan> {breed}
          </PetInfoTypography>
          <PetInfoTypography>
            <PetInfoTitleSpan>Comments:</PetInfoTitleSpan> {comment}
          </PetInfoTypography>
        </PetInfoBox>
        <Box
          sx={{
            position: { sm: 'absolute', md: 'relative' },
            top: 0,
            right: 0,
          }}
        >
          <IconButton
            onClick={() => handlePetDelete(id)}
            sx={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <DeleteIcon sx={{ fontSize: { sm: '20px', md: '30px' } }} />
          </IconButton>
        </Box>
      </Box>
    </PetListItem>
  );
}

export default PetItem;
