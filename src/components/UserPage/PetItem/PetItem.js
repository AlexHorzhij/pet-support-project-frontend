import { useDispatch } from 'react-redux';
import { deletePetFromList } from 'redux/userData/userDataOperations';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
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
  IconButtonStyled,
  ModalDialogContent,
} from './PetItem.styled';
import { useSelector } from 'react-redux';
import { Dialog } from '@mui/material';
import { isDeletingPet, isUpdatingPet } from 'redux/userData/userDataSelectors';
import { useState } from 'react';

import ModalAddPetsNew from '../ModalAddpetsNew/ModalAddPetsNew';
import { Loader25 } from 'components/Loader/Loader';

function PetItem({ avatarUrl, name, birthDate, breed, description, id }) {
  const dispatch = useDispatch();

  const isDeleting = useSelector(isDeletingPet);
  const isUpdating = useSelector(isUpdatingPet);

  const handlePetDelete = petId => {
    dispatch(deletePetFromList(petId));
  };

  const [openAddPetForm, setOpenAddPetForm] = useState(false);

  const handleCloseAddNotice = () => {
    setOpenAddPetForm(prev => !prev);
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
          <IconButtonStyled onClick={() => handlePetDelete(id)}>
            {isDeleting === id ? <Loader25 /> : <DaleteIconStyled />}
          </IconButtonStyled>
          <IconButtonStyled onClick={handleCloseAddNotice}>
            {isUpdating === id ? <Loader25 /> : <EditRoundedIcon />}
          </IconButtonStyled>
        </IconButtonWrapper>
      </PetInfoBoxWrapper>
      <Dialog
        sx={{ backdropFilter: 'blur(5px)' }}
        maxWidth="modal"
        open={openAddPetForm}
        onClose={handleCloseAddNotice}
      >
        <ModalDialogContent>
          <ModalAddPetsNew
            onModalClose={handleCloseAddNotice}
            isUpdateAction={true}
            petId={id}
          />
        </ModalDialogContent>
      </Dialog>
    </PetListItem>
  );
}

export default PetItem;
