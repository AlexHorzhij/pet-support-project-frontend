import { styled } from '@mui/material/styles';
import styledEmotion from '@emotion/styled';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import { Typography, Box } from '@mui/material';

export const UserDataTitle = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
  },
}));

export const ModeEditOutlineRoundedIconStyled = styled(
  ModeEditOutlineRoundedIcon
)(({ theme }) => ({
  width: '20px',
  color: theme.palette.primary.main,
}));

export const DoneRoundedIconStyled = styled(DoneRoundedIcon)(({ theme }) => ({
  width: '25px',
  color: theme.palette.primary.main,
}));

export const UserDataItemBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  fontSize: '18px',
  '&:not(:last-child)': {
    marginBottom: '3px',
  },
  '@media screen and (max-width: 500px)': {
    flexDirection: 'column',
  },
});
export const ItemWrapper = styled(Box)({
  display: 'flex',
});

export const UserDataItemtitle = styled(Box)(({ theme }) => ({
  marginRight: 'auto',
  [theme.breakpoints.down('md')]: {
    minWidth: '80px',
  },
}));

export const UserDataItemInput = styledEmotion.input`
         border-width: 1px;
          padding: 5px 10px;
          border-style: solid;
          border-radius: 20px;
          width: 230px;
          margin: 0 15px;
          appearance: none;
          outline: none;
					font-size:18px;
					line-height:25px;
					letter-spacing: 0.8px;



					   @media (max-width: 500px) {
    			margin-left: 0px;
					margin-right: auto;
					font-size:12px;
  }

					   @media (max-width: 767.98px) {
    			width: 100%;
					font-size:12px;
					line-height:16px;
  }
  },
`;
