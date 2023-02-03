import { Button, CardMedia, CardContent } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { AddToFavorite } from 'components';
import distanceBetwenDateAndNowWords from 'servises/distanceBetwenDateAndNowWords';
import {
  Li,
  ItemsList,
  ItemText,
  Title,
  CategoryLable,
  NoticeCard,
} from './NoticesCardItem.styled';
import nophoto from 'assets/images/nophoto.gif';

export default function NoticesCardItem({ data }) {
  const {
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
          image={avatarUrl}
          style={{
            height: '288px',
            position: 'relative',
            objectFit: 'cover',
            backgroundImage: `url(${nophoto})`,
          }}
        >
          <CategoryLable>{status}</CategoryLable>
          <AddToFavorite
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
          <Button variant="outlined" sx={{ width: '100%', color: '#F59256' }}>
            Learn more
          </Button>
          <Button
            variant="outlined"
            sx={{ width: '100%', color: '#F59256' }}
            endIcon={<DeleteOutlineIcon />}
          >
            Delete
          </Button>
        </CardContent>
      </NoticeCard>
    </>
  );
}
