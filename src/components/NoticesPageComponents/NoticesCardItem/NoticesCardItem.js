import { CardMedia, CardContent } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { AddToFavorite } from 'components';
import distanceBetwenDateAndNowWords from 'services/distanceBetwenDateAndNowWords';
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

export default function NoticesCardItem({ data, deleteCard, openModal }) {
  const {
    _id,
    title,
    breed,
    location,
    birthdate,
    price,
    avatarUrl,
    status,
    favorite,
  } = data;
  const age = distanceBetwenDateAndNowWords(birthdate);
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
          <CategoryLable>{status}</CategoryLable>
          <AddToFavorite
            id={_id}
            favorite={favorite}
            right="50px"
            top="50px"
            style={{ position: 'absolute', right: '50px', top: '50px' }}
          />
        </CardMedia>
        <CardContent style={{ padding: '20px 16px 32px 16px' }}>
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
          <Btn
            id={_id}
            onClick={openModal}
            variant="outlined"
            sx={{ width: '100%', color: '#F59256' }}
          >
            Learn more
          </Btn>
          <Btn
            id={_id}
            onClick={deleteCard}
            variant="outlined"
            sx={{ width: '100%', color: '#F59256' }}
            endIcon={<DeleteOutlineIcon />}
          >
            Delete
          </Btn>
        </CardContent>
      </NoticeCard>
    </>
  );
}
