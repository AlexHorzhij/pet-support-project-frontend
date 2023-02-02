import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deletePetFromList } from 'redux/petsData/petsOperations';
import {
  PetListItem,
  PetImageBox,
  PetImage,
  PetInfoBox,
  PetInfoTitleSpan,
  PetInfoTypography,
  PetInfoBoxWrapper,
  IconButtonWrapper,
  DaleteIconStyled,
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
      <PetInfoBoxWrapper>
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
        <IconButtonWrapper>
          <IconButton
            onClick={() => handlePetDelete(id)}
            sx={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <DaleteIconStyled />
          </IconButton>
        </IconButtonWrapper>
      </PetInfoBoxWrapper>
    </PetListItem>
  );
}

export default PetItem;
