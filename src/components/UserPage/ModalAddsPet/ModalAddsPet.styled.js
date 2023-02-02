import { styled } from '@mui/material/styles';
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  IconButton,
} from '@mui/material';
import { Field } from 'formik';

// export const ModalCloseButton = styled(IconButton)({
//   position: 'absolute',
//   top: '24px',
//   right: '24px',
//   backgroundColor: '#FDF7F2',
//   width: '44px',
//   height: '44px',
// });

export const ModalCloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '24px',
  right: '24px',
  backgroundColor: theme.palette.background.default,
  width: '44px',
  height: '44px',
}));

export const ModalTyporgaphy = styled(Typography)({
  fontSize: '24px',
  fontWeight: '500',
  lineHeight: '27px',
  letterSpacing: ' 0px',
  textAlign: 'left',
  marginBottom: '12px',
});
export const AddPetTitle = styled(Typography)({
  fontSize: '36px',
  textAlign: 'center',
  marginBottom: '25px',
});
export const AddPetComment = styled(Typography)({
  fontSize: '20px',
  textAlign: 'center',
  marginBottom: '23px',
});
export const ModalCard = styled(Card)({
  width: '608px',
});
export const ModalCardContent = styled(CardContent)({
  position: 'relative',
  paddingBottom: '39px!important',
  padding: '39px 80px',
});
export const ModalGrid = styled(Grid)({
  '&:not(:last-child)': {
    marginBottom: '26px',
  },
});
// export const ModalField = styled(Field)({
//   backgroundColor: '#FDF7F2',
//   borderRadius: '40px',
//   '&>label': {
//     top: '-2px',
//     left: '1px',
//     color: 'rgba(17, 17, 17, 0.6)',
//   },
//   '&>label+div>input+fieldset': {
//     borderColor: 'rgba(245, 146, 86, 0.5)',
//   },
//   '&>label+div>input': {
//     padding: '5px',
//     height: '40px',
//   },
// });
export const ModalField = styled(Field)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '40px',
  '&>label': {
    top: '-2px',
    left: '1px',
    color: theme.palette.text.label,
  },
  '&>label+div>input+fieldset': {
    borderColor: theme.palette.outlines.inputBorder,
  },
  '&>label+div>input': {
    padding: '5px',
    height: '40px',
  },
}));

// export const ModalMultiLineField = styled(Field)({
//   backgroundColor: '#FDF7F2',
//   width: '395px',
//   borderRadius: '20px',

//   '&>label': {
//     color: 'rgba(17, 17, 17, 0.6)',
//   },
//   '&>label+div>textarea+textarea+fieldset': {
//     borderColor: 'rgba(245, 146, 86, 0.5)',
//   },
//   '&>label+div': {
//     borderRadius: '20px',
//   },
// });
export const ModalMultiLineField = styled(Field)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,

  width: '395px',
  borderRadius: theme.shape.borderRadius20,
  '&>label': {
    color: theme.palette.text.label,
  },
  '&>label+div>textarea+textarea+fieldset': {
    borderColor: theme.palette.outlines.inputBorder,
  },
  '&>label+div': {
    borderRadius: theme.shape.borderRadius20,
  },
}));

export const SecondStepBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});
// export const DropZoneBox = styled(Box)({
//   '&:hover': { cursor: 'pointer' },
//   boxSizing: 'border-box',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   width: '182px',
//   height: '182px',
//   borderRadius: '40px',
//   backgroundColor: '#FDF7F2',
//   margin: '0',
// });
export const DropZoneBox = styled(Box)(({ theme }) => ({
  '&:hover': { cursor: 'pointer' },
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '182px',
  height: '182px',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  margin: '0',
}));
// export const DropZonePreviewBox = styled(Box)({
//   height: '100%',
//   borderRadius: '40px',
//   overflow: 'hidden',
// });
export const DropZonePreviewBox = styled(Box)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
}));
