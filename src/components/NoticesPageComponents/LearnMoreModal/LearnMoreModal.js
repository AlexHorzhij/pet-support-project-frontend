import React, { useState } from 'react';
import nophoto from 'assets/images/nophoto.gif';
import { Typography, Box, Checkbox } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Favorite } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/authSelectors';
import { toast } from 'react-hot-toast';
import {
  ModalCard,
  ModalCloseButton,
  BoxFlex,
  Image,
  CategoryLabel,
  Text,
  HeadText,
  OwnerContact,
  ButtonsWrapper,
  AddFavouriteButton,
  ContactButton,
} from './LearnMoreModal.styled';
import { setFavorite } from 'redux/notices/noticesOperations';
import { useTranslation } from 'react-i18next';


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
    owner,
    sex,
    price,
    title,
    favorite = false,
  } = data;

  const [checked, setChecked] = useState(favorite);
  const { token } = useSelector(getAuth);
  const dispatch = useDispatch();
  const { t } = useTranslation('common');

  const onFavoriteClick = () => {
    if (token) {
      const req = checked ? 'delete' : 'post';
      const reqData = { id: _id, token: token, req: req };
      setChecked(prev => !prev);
      dispatch(setFavorite(reqData));
    } else {
      setChecked(false);
      toast.error('To add or remove favorites you have to be LOGGED IN');
    }
  };

  const Contact = ({ children }) => {
    return (
      <OwnerContact
        href={`tel:${owner !== null && owner.phone}`}
        sx={{ mb: 0 }}
      >
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
          {avatarUrl ? <Image image={avatarUrl} /> : <Image src={nophoto} />}

          <CategoryLabel>{category}</CategoryLabel>
        </Box>
        <Box>
          <Typography variant="h3" sx={{ mb: 2, maxWidth: '300px' }}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: '120px' }}>
              {name && <HeadText variant="body2"> {t('LearnMoreModal.1line')}: </HeadText>}
              {birthdate && <HeadText variant="body2">{t('LearnMoreModal.2line')}: </HeadText>}
              {breed && <HeadText variant="body2">{t('LearnMoreModal.3line')}: </HeadText>}
              {location && <HeadText variant="body2">{t('LearnMoreModal.4line')}: </HeadText>}
              {sex && <HeadText variant="body2">{t('LearnMoreModal.5line')}: </HeadText>}
              {owner !== null && owner.name && (
                <HeadText variant="body2">{t('LearnMoreModal.6line')}: </HeadText>
              )}
              {owner !== null && owner.phone && (
                <HeadText variant="body2">{t('LearnMoreModal.7line')}: </HeadText>
              )}
              {price && <HeadText variant="body2">{t('LearnMoreModal.8line')}: </HeadText>}
            </Box>
            <Box>
              {name && <Text>{name}</Text>}
              {birthdate && <Text>{birthdate}</Text>}
              {breed && <Text>{breed}</Text>}
              {location && <Text>{location}</Text>}
              {sex && <Text>{sex}</Text>}
              {owner !== null && owner.name && (
                <OwnerContact
                  underline="hover"
                  href={`mailto:${owner !== null && owner.name}`}
                >
                  <Text>{owner.name}</Text>
                </OwnerContact>
              )}
              {owner !== null && owner.phone && (
                <OwnerContact
                  underline="hover"
                  href={`tel:${owner !== null && owner.phone}`}
                >
                  <Text>{owner.phone}</Text>
                </OwnerContact>
              )}
              {price && <Text>{price}$</Text>}
            </Box>
          </Box>
        </Box>
      </BoxFlex>

      <HeadText variant="body1" sx={{ mb: 4 }}>
        {t('LearnMoreModal.9line')}: {comments}
      </HeadText>

      <ButtonsWrapper>
        <ContactButton variant="contained">
          <Contact>{t('LearnMoreModal.contactBtn')}</Contact>
        </ContactButton>
        <AddFavouriteButton variant="outlined" onClick={onFavoriteClick}>
          {checked ? t('LearnMoreModal.removeBtn') : t('LearnMoreModal.addToBtn')}
          <Checkbox
            sx={{
              width: '16px',
              height: '20px',
              ml: 1,
            }}
            inputProps={{ 'aria-label': 'favorite' }}
            onChange={onFavoriteClick}
            icon={
              <Favorite
                sx={{
                  strokeWidth: '2',
                  stroke: '#F59256',
                  fill: 'white',
                }}
              />
            }
            checked={checked}
            checkedIcon={
              <Favorite
                sx={{
                  color: '#F59256',
                }}
              />
            }
          />
        </AddFavouriteButton>
      </ButtonsWrapper>
    </ModalCard>
  );
}
