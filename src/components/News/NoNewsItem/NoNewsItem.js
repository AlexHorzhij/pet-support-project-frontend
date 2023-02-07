import {
  Background,
  ContentWrapper,
  Text,
  // NewsTextFound,
} from './NoNewsItem.styled';
import { NavLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';

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
        <Box
        sx={{textAlign: 'center'}}>
          <NavLink to='/news' style={{ textDecoration: 'none'}}>
            <Button
              variant="outlined">
              News
            </Button>
          </NavLink>
          <NavLink to='/notices/sell' style={{ textDecoration: 'none'}}>
            <Button
              variant="outlined">
              Find pet
            </Button>         
          </NavLink>
          <NavLink to='/friends' style={{ textDecoration: 'none'}}>
            <Button
              variant="outlined">
              Our friends
            </Button>          
          </NavLink>  
        </Box>
      </ContentWrapper>

    </Background>
  );
};
