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
import { useSelector } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';
import { useTheme } from '@mui/material';
import { isDeletingPet } from 'redux/userData/userDataSelectors';

function PetItem({ avatarUrl, name, birthDate, breed, description, id }) {
  const dispatch = useDispatch();
  const isDeleting = useSelector(isDeletingPet);
  const theme = useTheme();
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
            {isDeleting === id ? (
              <ThreeCircles
                height="20"
                width="20"
                color={theme.palette.primary.main}
                visible={true}
                ariaLabel="three-circles-rotating"
              />
            ) : (
              <DaleteIconStyled />
            )}
          </IconButton>
        </IconButtonWrapper>
      </PetInfoBoxWrapper>
    </PetListItem>
  );
}

export default PetItem;
