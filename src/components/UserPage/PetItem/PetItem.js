import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deletePetFromList } from 'redux/userData/userDataOperations';
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
function PetItem({ avatarUrl, name, birthDate, breed, description, id }) {
  const dispatch = useDispatch();

  const handlePetDelete = petId => {
    dispatch(deletePetFromList(petId));
  };

  return (
    <PetListItem>
      <PetImageBox>
        <PetImage src={avatarUrl} alt="my pet" />
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
            <PetInfoTitleSpan>Descriptions:</PetInfoTitleSpan> {description}
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
