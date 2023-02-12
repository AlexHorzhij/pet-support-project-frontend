import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import nophoto from 'assets/images/nophoto.gif';
import { useTranslation } from 'react-i18next';
import ModeIcon from '@mui/icons-material/Mode';
import {
  CardMedia,
  CardContent,
  Box,
  IconButton,
  Dialog,
  DialogContent,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {
  AddToFavorite,
  Modal,
  LearnMoreModal,
  NoticeAddForm,
} from 'components';
import { distanceBetweenDateAndNowWords } from 'services';
import {
  Li,
  ItemsList,
  ItemText,
  Title,
  CategoryLabel,
  NoticeCard,
  Btn,
} from './NoticesCardItem.styled';
import { DialogTitleStyled } from 'components/NoticeAddForm/NoticeAddForm.styled';

export default function NoticesCardItem({
  data,
  deleteCard,
  handleChange,
  user = null,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [modalIsShown, setModalIsShown] = useState(false);
  const { t } = useTranslation('common');
  const { categoryName } = useParams();

  const {
    _id,
    title,
    breed,
    location,
    birthdate,
    price,
    avatarUrl,
    category,
    favorite,
  } = data;

  const age = birthdate && distanceBetweenDateAndNowWords(birthdate);
  const toggleModal = () => {
    setModalIsShown(prev => !prev);
  };

  const handleOpenEdit = () => {
    console.log('editID: ', _id);

    setIsEditing(true);
  };

  const handleCloseAddNotice = () => {
    setIsEditing(false);
  };

  return (
    <>
      <NoticeCard
        variant="notice"
        sx={{
          display: 'grid',
          width: '280px',
          position: 'relative',
        }}
      >
        <CardMedia
          image={nophoto}
          style={{
            height: '288px',
            position: 'relative',
            objectFit: 'cover',
          }}
        >
          <CardMedia
            image={avatarUrl}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              backgroundPosition: '50% 50%',
            }}
          />
          <CategoryLabel>{category}</CategoryLabel>
          <AddToFavorite
            handleChange={handleChange}
            bg="background.fond"
            id={_id}
            favorite={favorite}
            right="50px"
            top="50px"
            style={{
              position: 'absolute',
              right: '50px',
              top: '50px',
              transition: 'background-color 1000ms linear',
            }}
          />
          {categoryName === 'own' && (
            <div>
              <IconButton
                aria-label="edit"
                variant="outlined"
                sx={{
                  color: 'primary.main',
                  backgroundColor: 'background.fond',
                  position: 'absolute',
                  right: '12px',
                  top: '70px',
                }}
                onClick={handleOpenEdit}
              >
                {' '}
                <ModeIcon />
              </IconButton>

              <Dialog
                sx={{ backdropFilter: 'blur(5px)' }}
                maxWidth="modal"
                open={isEditing}
                onClose={handleCloseAddNotice}
              >
                <DialogContent sx={{p: 8}}>
                  <DialogTitleStyled>Edit pet</DialogTitleStyled>
                  <NoticeAddForm
                    handleClose={handleCloseAddNotice}
                    oldData={data}
                    editID={_id}
                  />
                </DialogContent>
              </Dialog>
            </div>
          )}
        </CardMedia>
        <Box
          sx={{
            px: 2,
            pb: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardContent
            style={{ padding: '20px 16px 0px 16px', marginBottom: 'auto' }}
          >
            <Title>{title}</Title>
            <ItemsList>
              <Li sx={{ height: '40px' }}>
                <ItemText>{t('NoticesPage.card.1line')}</ItemText>
                <ItemText>{location}</ItemText>
              </Li>
              <Li>
                <ItemText>{t('NoticesPage.card.2line')}</ItemText>
                <ItemText>{breed || '-'}</ItemText>
              </Li>
              <Li>
                <ItemText>{t('NoticesPage.card.3line')}</ItemText>
                {age ? <ItemText>{age}</ItemText> : <ItemText>-</ItemText>}
              </Li>

              <Li>
                <ItemText>{t('NoticesPage.card.4line')}</ItemText>
                {price ? (
                  <ItemText>{price} $</ItemText>
                ) : (
                  <ItemText>{t('NoticesPage.card.4lineFree')}</ItemText>
                )}
              </Li>
            </ItemsList>
          </CardContent>

          {categoryName === 'own' ? (
            <Btn
              variant="outlined"
              id={_id}
              onClick={deleteCard}
              sx={{
                width: '100%',
                color: 'primary.main',
                mb: '12px',
                mt: 'auto',
              }}
              endIcon={<DeleteOutlineIcon />}
            >
              Delete
            </Btn>
          ) : (
            <Btn
              variant="outlined"
              id={_id}
              onClick={toggleModal}
              sx={{ width: '100%', color: 'primary.main' }}
            >
              {t('NoticesPage.card.1btn')}
            </Btn>
          )}
        </Box>
      </NoticeCard>
      {modalIsShown && (
        <Modal onModalClose={toggleModal}>
          <LearnMoreModal onModalClose={toggleModal} data={data} />
        </Modal>
      )}
    </>
  );
}
