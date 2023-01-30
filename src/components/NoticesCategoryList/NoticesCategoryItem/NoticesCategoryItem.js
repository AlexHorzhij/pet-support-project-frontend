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

export default function NoticesCategoryList() {
  return (
    <Card>
      <ImgWrapper>
        <BiImage style={{ width: 'auto' }} />
      </ImgWrapper>
      <Discription>
        <Title>Сute dog looking for a home</Title>
        <List>
          <Li>
            <Key>Breed:</Key>
            <p>Pomeranian</p>
          </Li>
          <Li>
            <Key>Place:</Key>
            <p>Lviv</p>
          </Li>
          <Li>
            <Key>Age:</Key>
            <p>one year</p>
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
