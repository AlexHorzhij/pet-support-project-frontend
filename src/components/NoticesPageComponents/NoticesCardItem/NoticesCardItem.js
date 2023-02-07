import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getUser } from 'redux/userData/userDataSelectors';
import { CardMedia, CardContent } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { AddToFavorite, Modal, LearnMoreModal } from 'components';
import distanceBetweenDateAndNowWords from 'services/distanceBetweenDateAndNowWords';
import {
  Li,
  ItemsList,
  ItemText,
  Title,
  CategoryLable,
  NoticeCard,
  Btn,
} from './NoticesCardItem.styled';
import nophoto from 'assets/images/nophoto.gif';

const userId = '63dd4ec90739cae4a8edb372';

export default function NoticesCardItem({
  data,
  deleteCard,
  // openModal,
  token,
}) {
  // const { user } = useSelector(getUser);
  // console.log('user', user);

  const [modalIsShown, setModalIsShown] = useState(false);
  const {
    owner,
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
  const age = distanceBetweenDateAndNowWords(birthdate);

  const toggleModal = () => {
    setModalIsShown(prev => !prev);
  };

  // console.log('userId === owner._id', userId === owner._id);

  return (
    <>
      <NoticeCard variant="notice" sx={{ width: '280px' }}>
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
              objectFit: 'cover',
            }}
          />
          <CategoryLable>{category}</CategoryLable>
          {token && (
            <AddToFavorite
              bg={'rgba(255, 255, 255, 0.6)'}
              id={_id}
              favorite={favorite}
              right="50px"
              top="50px"
              style={{ position: 'absolute', right: '50px', top: '50px' }}
            />
          )}
        </CardMedia>
        <CardContent style={{ padding: '20px 16px 0px 16px' }}>
          <Title>{title}</Title>
          <ItemsList>
            <Li>
              <ItemText>Breed:</ItemText>
              <ItemText>{breed}</ItemText>
            </Li>
            <Li>
              <ItemText>Place::</ItemText>
              <ItemText>{location}</ItemText>
            </Li>
            <Li>
              <ItemText>Age:</ItemText>
              <ItemText>{age}</ItemText>
            </Li>
            {price && (
              <Li>
                <ItemText>Price:</ItemText>
                <ItemText>{price} $</ItemText>
              </Li>
            )}
          </ItemsList>
        </CardContent>
        <Btn
          id={_id}
          onClick={toggleModal}
          variant="outlined"
          sx={{ width: '100%', color: '#F59256', mt: 'auto' }}
        >
          Learn more
        </Btn>
        {userId === owner._id && (
          <Btn
            id={_id}
            onClick={deleteCard}
            variant="outlined"
            sx={{ width: '100%', color: '#F59256', mb: '12px', mt: 'auto' }}
            endIcon={<DeleteOutlineIcon />}
          >
            Delete
          </Btn>
        )}
      </NoticeCard>
      {modalIsShown && (
        <Modal onModalClose={toggleModal}>
          <LearnMoreModal onModalClose={toggleModal} data={data} />
        </Modal>
      )}
    </>
  );
}
