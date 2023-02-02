import { Button, CardMedia, CardContent } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { AddToFavorite } from 'components';
import {
  Li,
  ItemsList,
  ItemText,
  Title,
  CategoryLable,
  NoticeCard,
} from './NoticesCardItem.styled';

export default function NoticesCardItem({ data }) {
  const { title, breed, place, age, price, url, favorite } = data;
  return (
    <>
      <NoticeCard variant="notice" sx={{ width: '280px' }}>
        <CardMedia
          style={{ height: '288px', position: 'relative' }}
          image={url}
        >
          <CategoryLable>In good hands</CategoryLable>
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
              <ItemText>{place}</ItemText>
            </Li>
            <Li>
              <ItemText>Age:</ItemText>
              <ItemText>{age}</ItemText>
            </Li>
            <Li>
              <ItemText>Price:</ItemText>
              <ItemText>{price} $</ItemText>
            </Li>
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
