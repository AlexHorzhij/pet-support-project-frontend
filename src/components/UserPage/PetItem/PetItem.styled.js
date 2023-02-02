import { styled } from '@mui/material/styles';
import styledEmotion from '@emotion/styled';
import DeleteIcon from '@mui/icons-material/Delete';

import { Typography, Box, ListItem } from '@mui/material';

// export const PetListItem = styled(ListItem)({
//   boxSizing: 'border-box',
//   display: 'flex',
//   alignItems: 'start',
//   backgroundColor: 'white',
//   borderRadius: '40px',
//   boxShadow: '7px 14px 11px 0px rgba(49, 21, 4, 0.07)',
//   padding: '20px',
//   '&:not(:last-child)': {
//     marginBottom: '22px',
//   },
//   '@media screen and (max-width: 768px)': {
//     flexDirection: 'column',
//   },
// });
export const PetListItem = styled(ListItem)(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'start',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '40px',
  boxShadow: theme.palette.boxShadow.main,
  padding: '20px',
  '&:not(:last-child)': {
    marginBottom: '22px',
  },

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const PetImageBox = styled(Box)(({ theme }) => ({
  minWidth: '161px',
  height: '161px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '20px',
  },
}));

export const PetInfoBox = styled(Box)(({ theme }) => ({
  marginLeft: '32px',
  marginRight: 'auto',
  [theme.breakpoints.down('md')]: {
    marginLeft: 'unset',
  },
}));

export const PetInfoBoxWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  width: '100%',
}));
export const IconButtonWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    position: 'relative',
  },
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));
export const DaleteIconStyled = styled(DeleteIcon)(({ theme }) => ({
	
  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
}));

export const PetInfoTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
  letterSpacing: '0.6px',
  '&:not(:last-child)': {
    marginBottom: '13px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    lineHeight: '18px',
    '&:not(:last-child)': {
      marginBottom: '12px',
    },
  },
}));

export const PetImage = styledEmotion.img`
  width: 161px;
  height: 161px;
  border-radius: 40px;
  object-fit: cover;
`;
export const PetInfoTitleSpan = styledEmotion.span`
 font-weight: 500;
`;
