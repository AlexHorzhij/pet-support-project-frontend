import { styled } from '@mui/material/styles';
import styledEmotion from '@emotion/styled';

import { Typography, Box, ListItem } from '@mui/material';

export const PetListItem = styled(ListItem)({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'start',
  backgroundColor: 'white',
  borderRadius: '40px',
  boxShadow: '7px 14px 11px 0px rgba(49, 21, 4, 0.07)',
  padding: '20px',
  '&:not(:last-child)': {
    marginBottom: '22px',
  },
  '@media screen and (max-width: 768px)': {
    flexDirection: 'column',
  },
});
export const PetImageBox = styled(Box)({
  minWidth: '161px',
  height: '161px',
  '@media screen and (max-width: 768px)': {
    marginBottom: '20px',
  },
});
export const PetInfoBox = styled(Box)({
  marginLeft: '32px',
  marginRight: 'auto',
  '@media screen and (max-width: 768px)': {
    marginLeft: 'unset',
  },
});
export const PetInfoTypography = styled(Typography)({
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
  letterSpacing: '0.6px',
  '&:not(:last-child)': {
    marginBottom: '13px',
  },
  '@media screen and (max-width: 768px)': {
    fontSize: '14px',
    lineHeight: '18px',
    '&:not(:last-child)': {
      marginBottom: '12px',
    },
  },
});
export const PetImage = styledEmotion.img`
  width: 161px;
  height: 161px;
  border-radius: 40px;
  object-fit: cover;
`;
export const PetInfoTitleSpan = styledEmotion.span`
 font-weight: 500;
`;
