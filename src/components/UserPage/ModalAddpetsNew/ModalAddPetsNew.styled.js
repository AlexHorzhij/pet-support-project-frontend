import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { Field } from 'formik';

export const StyledInput = styled(Field)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: '100%',
  height: '40px',
  border: `1px solid ${theme.palette.outlines.inputBorder}`,
  borderRadius: theme.shape.borderRadius,
  padding: '0 32px',

  '&::placeholder': {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.36',
    letterSpacing: '0.04em',
    color: theme.palette.text.label,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    height: '48px',

    '&::placeholder': {
      fontSize: '18px',
      lineHeight: '1.39',
    },
  },
}));

export const ErrorText = styled(Box)(({ theme }) => ({
  fontSize: '12px',
  position: 'absolute',
  padding: '5px 5px',
  color: theme.palette.warning.main,
  textAlign: 'center',
}));

export const FormButton = styled(Button)(({ theme }) => ({
  minWidth: '180px',
  '&:not(:last-child)': {
    marginRight: '20px',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '100%',
    '&:not(:last-child)': {
      marginRight: 'unset',
      marginTop: '12px',
    },
  },
}));
export const StepperBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
    minWidth: '100%',
  },
}));
export const AddPetTitle = styled(Typography)({
  fontSize: '36px',
  textAlign: 'center',
  marginBottom: '25px',
});
export const ModalCard = styled(Card)(({ theme }) => ({
  width: '608px',
  [theme.breakpoints.down('md')]: {
    width: '270px',
  },
}));
export const ModalCardContent = styled(CardContent)(({ theme }) => ({
  position: 'relative',
  paddingBottom: '39px!important',
  padding: '39px 80px',
  [theme.breakpoints.down('md')]: {
    paddingBottom: '39px!important',
    padding: '39px 20px',
  },
}));
export const ModalCloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '-20px',
  right: '-55px',
  justifySelf: 'flex-end',
  backgroundColor: theme.palette.background.default,
  width: '44px',
  height: '44px',
  [theme.breakpoints.down('md')]: {
    top: '-10px',
    right: '-10px',
  },
}));
export const ModalGrid = styled(Grid)({
  position: 'relative',
  width: '100%',
  textAlign: 'center',
  '&:not(:last-child)': {
    marginBottom: '25px',
  },
});
export const ModalTypography = styled(Typography)({
  fontSize: '24px',
  fontWeight: '500',
  lineHeight: '27px',
  letterSpacing: ' 0px',
  textAlign: 'left',
  marginBottom: '12px',
});
export const AddPetComment = styled(Typography)({
  fontSize: '20px',
  textAlign: 'center',
  marginBottom: '23px',
});
export const SecondStepBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

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

export const DropZonePreviewBox = styled(Box)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
}));

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
  '&>label+div+p': {
    display: 'none',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
