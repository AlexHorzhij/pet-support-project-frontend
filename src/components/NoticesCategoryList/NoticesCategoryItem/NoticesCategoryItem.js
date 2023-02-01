import {
  Card,
  ImgWrapper,
  Li,
  List,
  Key,
  Title,
  Btn,
  Discription,
} from './NoticesCategoryItem.styled';

import { BiImage } from 'react-icons/bi';
import { AutoAwesomeMotion } from '@mui/icons-material';

export default function NoticesCategoryList({ title, breed, place, age }) {
  return (
    <Card>
      <ImgWrapper>
        <BiImage style={{ width: 'auto' }} />
      </ImgWrapper>
      <Discription>
        <Title>{title}</Title>
        <List>
          <Li>
            <Key>Breed:</Key>
            <p>{breed}</p>
          </Li>
          <Li>
            <Key>Place:</Key>
            <p>{place}</p>
          </Li>
          <Li>
            <Key>Age:</Key>
            <p>{age}</p>
          </Li>
          <Li>
            <Key>Price:</Key>
            <p>50$</p>
          </Li>
        </List>
        <Btn>Learn more</Btn>
      </Discription>
    </Card>
  );
}
