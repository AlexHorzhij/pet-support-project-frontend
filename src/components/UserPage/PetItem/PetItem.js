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
} from './PetItem.styled';
import { useSelector } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';
import { useTheme } from '@mui/material';
import { isDeletingPet, isUpdatingPet } from 'redux/userData/userDataSelectors';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import ModalAddPetsNew from '../ModalAddpetsNew/RegisterForm';

function PetItem({ avatarUrl, name, birthDate, breed, description, id }) {
  const dispatch = useDispatch();

  const isDeleting = useSelector(isDeletingPet);
  const isUpdating = useSelector(isUpdatingPet);

  const theme = useTheme();
  const [modalIsShown, setModalIsShown] = useState(false);

  const handlePetDelete = petId => {
    dispatch(deletePetFromList(petId));
  };
  const togleModal = () => {
    setModalIsShown(prev => !prev);
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
          </IconButtonStyled>
          <IconButtonStyled onClick={togleModal}>
            {isUpdating === id ? (
              <ThreeCircles
                height="20"
                width="20"
                color={theme.palette.primary.main}
                visible={true}
                ariaLabel="three-circles-rotating"
              />
            ) : (
              <EditRoundedIcon />
            )}
          </IconButtonStyled>
        </IconButtonWrapper>
      </PetInfoBoxWrapper>
      {modalIsShown && (
        <Modal onModalClose={togleModal}>
          <ModalAddPetsNew
            onModalClose={togleModal}
            isUpdateAction={true}
            petId={id}
          />
        </Modal>
      )}
    </PetListItem>
  );
}

export default PetItem;
