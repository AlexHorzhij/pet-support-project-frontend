import { Button, CardActionArea } from '@mui/material';
import { CardMedia, CardContent } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  Li,
  ItemsList,
  ItemText,
  Title,
  Lable,
} from './NoticesCategoryItem.styled';
import { AddToFavorite } from 'components';
export default function NoticesCategoryItem({ data }) {
  const { title, breed, place, age, price, url } = data;

  return (
    <>
      <CardActionArea variant="notice" style={{ marginTop: '50px' }}>
        <CardMedia
          style={{ height: '288px', position: 'relative' }}
          image={url}
        >
          <Lable>In good hands</Lable>
          <AddToFavorite
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
          <Button
            variant="outlined"
            style={{ width: '100%', color: '#F59256' }}
          >
            Learn more
          </Button>
          <Button
            variant="outlined"
            style={{ width: '100%', color: '#F59256' }}
            endIcon={<DeleteOutlineIcon />}
          >
            Delete
          </Button>
        </CardContent>
      </CardActionArea>
    </>
  );
}
