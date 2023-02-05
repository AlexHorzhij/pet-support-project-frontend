import React, { useEffect, useState } from 'react';
import { requestUserData } from 'API/api';
import { AddToFavorite } from 'components';
import nophoto from 'assets/images/nophoto.gif';
import { Button, Typography, Box } from '@mui/material';
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
} from './LearnMoreModal.styled';

export default function LearnMoreModal({ onModalClose, data }) {
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const {
    _id,
    avatarUrl,
    birthdate,
    breed,
    comments,
    category,
    location,
    name,
    owner,
    sex,
    price,
    title,
  } = data;

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestUserData(owner);
      return data;
    };

    fetchData()
      .then(({ email, phone }) => {
        setEmail(email);
        setPhone(phone);
      })
      .catch(console.error);
  }, [owner]);

  const onContactClick = () => {
    console.log('show me contacts');
  };

  return (
    <ModalCard>
      <ModalCloseButton onClick={onModalClose}>
        <CloseOutlinedIcon sx={{ fontSize: '30px' }} />
      </ModalCloseButton>
      <BoxFlex>
        <Box style={{ position: 'relative' }}>
          <Image image={nophoto} src={avatarUrl} />
          <CategoryLable>{category}</CategoryLable>
        </Box>
        <Box>
          <Typography variant="h3" sx={{ mb: 2 }}>
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
                <OwnerContact underline="hover" href="mailto:{email}">
                  <Text>{email}</Text>
                </OwnerContact>
              )}
              {phone && (
                <OwnerContact underline="hover" href="tel:{phone}">
                  <Text>{phone}</Text>
                </OwnerContact>
              )}
              {price && <Text>{price}$</Text>}
            </Box>
          </Box>
        </Box>
      </BoxFlex>
      <Text>
        <HeadText variant="body1">Comments: </HeadText>
        {comments}
      </Text>
      <Button variant="outlined">
        Add to <AddToFavorite id={_id} />
      </Button>
      <Button variant="contained" onClick={onContactClick}>
        Contact
      </Button>
    </ModalCard>
  );
}
