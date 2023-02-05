import React from 'react';
import { AddToFavorite } from 'components';
import nophoto from 'assets/images/nophoto.gif';
import { Typography, Box } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  ModalCard,
  ModalCloseButton,
  BoxFlex,
  Image,
  CategoryLable,
  Text,
  HeadText,
  OwnerContact,
  ButtonsWrapper,
  AddFavouriteButton,
  ContactButton,
} from './LearnMoreModal.styled';

export default function LearnMoreModal({ onModalClose, data }) {
  const {
    _id,
    avatarUrl,
    birthdate,
    breed,
    comments,
    category,
    location,
    name,
    owner: { email, phone },
    sex,
    price,
    title,
  } = data;

  const Contact = ({ children }) => {
    return (
      <OwnerContact href={`tel:${phone}`} sx={{ mb: 0 }}>
        {children}
      </OwnerContact>
    );
  };

  return (
    <ModalCard>
      <ModalCloseButton onClick={onModalClose}>
        <CloseOutlinedIcon sx={{ fontSize: '30px' }} />
      </ModalCloseButton>
      <BoxFlex>
        <Box style={{ position: 'relative' }}>
          <Image image={`${nophoto}`} sx={{ position: 'relative' }} />
          <Image image={`${avatarUrl}`} />
          <CategoryLable>{category}</CategoryLable>
        </Box>
        <Box>
          <Typography variant="h3" sx={{ mb: 2, maxWidth: '300px' }}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: '120px' }}>
              {name && <HeadText variant="body2">Name: </HeadText>}
              {birthdate && <HeadText variant="body2">Birthday: </HeadText>}
              {breed && <HeadText variant="body2">Breed: </HeadText>}
              {location && <HeadText variant="body2">Location: </HeadText>}
              {sex && <HeadText variant="body2">The sex: </HeadText>}
              {email && <HeadText variant="body2">Email: </HeadText>}
              {phone && <HeadText variant="body2">Phone: </HeadText>}
              {price && <HeadText variant="body2">Sell: </HeadText>}
            </Box>
            <Box>
              {name && <Text>{name}</Text>}
              {birthdate && <Text>{birthdate}</Text>}
              {breed && <Text>{breed}</Text>}
              {location && <Text>{location}</Text>}
              {sex && <Text>{sex}</Text>}
              {email && (
                <OwnerContact underline="hover" href={`mailto:${email}`}>
                  <Text>{email}</Text>
                </OwnerContact>
              )}
              {phone && (
                <OwnerContact underline="hover" href={`tel:${phone}`}>
                  <Text>{phone}</Text>
                </OwnerContact>
              )}
              {price && <Text>{price}$</Text>}
            </Box>
          </Box>
        </Box>
      </BoxFlex>
      <Text>
        <HeadText variant="body1" sx={{ mb: 4 }}>
          Comments: {comments}
        </HeadText>
      </Text>
      <ButtonsWrapper>
        <ContactButton variant="contained">
          <Contact>Contact</Contact>
        </ContactButton>
        <AddFavouriteButton variant="outlined">
          Add to{<AddToFavorite id={_id} />}
        </AddFavouriteButton>
      </ButtonsWrapper>
    </ModalCard>
  );
}
