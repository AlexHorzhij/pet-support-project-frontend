import {
  Background,
  ContentWrapper,
  Text,
  // NewsTextFound,
} from './NoNewsItem.styled';
import { NavLink } from 'react-router-dom';

export const NoNewsItem = () => {





  return (
    // <Background>
    //     <ContentWrapper>
    //         <Text sx={{ textAlign: 'center', mb: '40px' }} variant="h3">
    //             SORRY!
    //         </Text>
    //          <Text sx={{ textAlign: 'center', mb: '40px' }} variant="h3">
    //             But we don't have news about {topic}
    //         </Text>
    //     </ContentWrapper>
    // </Background>
    <Background>
      <ContentWrapper>
        <Text sx={{ textAlign: 'center', mb: '40px' }} variant="h3">
          SORRY!
        </Text>
        <Text sx={{ textAlign: 'center', mb: '40px' }} variant="h3">
          But we don't have news for this topic
          {/* <NewsTextFound component="div">"{search}"</NewsTextFound> */}
        </Text>
        <NavLink to='/news'>News</NavLink>
        <NavLink to='/notices/sell'>Find pet</NavLink>
        <NavLink to='/friends'>Our friends</NavLink>
      </ContentWrapper>

    </Background>
  );
};
