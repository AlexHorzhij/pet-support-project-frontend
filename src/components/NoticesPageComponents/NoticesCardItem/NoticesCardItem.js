import React, { useState } from 'react';

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
import { AddToFavorite, Modal, LearnMoreModal } from 'components';
import distanceBetweenDateAndNowWords from 'services/distanceBetweenDateAndNowWords';
import {
  Li,
  ItemsList,
  ItemText,
  Title,
  CategoryLabel,
  NoticeCard,
  Btn,
} from './NoticesCardItem.styled';
import nophoto from 'assets/images/nophoto.gif';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { DialogTitleStyled } from 'components/NoticeAddForm/NoticeAddForm.styled';
import { NoticeAddForm } from 'components/NoticeAddForm/NoticeAddForm';

export default function NoticesCardItem({
  data,
  deleteCard,
  handleChange,
  user = null,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [modalIsShown, setModalIsShown] = useState(false);
  const { t } = useTranslation('common');
  const { categoryName } = useParams()

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
          width: '280px',
          borderRadius: '0 0 40px 40px',
          position: 'relative',
        }}
      >
        <CardMedia
          image={nophoto}
          style={{
            height: '288px',
            width: '100%',
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
          <AddToFavorite handleChange={handleChange}
            bg={'rgba(255, 255, 255, 0.6)'}
            id={_id} favorite={favorite}
            right="50px" top="50px"
            style={{ position: 'absolute', right: '50px', top: '50px' }}
          />
          {categoryName === 'own' && (
            <div>
              <IconButton
                aria-label="edit"
                variant="outlined"
                sx={{
                  color: 'primary.main',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
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
                <DialogContent>
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
          <CardContent style={{ padding: '20px 16px 0px 16px' }}>
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
              id={_id}
              onClick={deleteCard}
              variant="outlined"
              sx={{ width: '100%', color: 'primary.main', mb: '12px', mt: 'auto' }}
              endIcon={<DeleteOutlineIcon />}
            >
              Delete
            </Btn>
          ) : (

            <Btn
              id={_id}
              onClick={toggleModal}
              variant="outlined"
              sx={{ width: '100%', color: 'primary.main' }}
            >
              {t('NoticesPage.card.1btn')}
            </Btn>
          )}
        </Box>
      </NoticeCard>
      {
        modalIsShown && (
          <Modal onModalClose={toggleModal}>
            <LearnMoreModal onModalClose={toggleModal} data={data} />
          </Modal>
        )
      }
    </>
  );
}
