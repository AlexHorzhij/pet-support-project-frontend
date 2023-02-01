import { styled } from '@mui/material/styles';
import styledEmotion from '@emotion/styled';

import { Typography, Box } from '@mui/material';

export const UserDataTitle = styled(Typography)({
  fontSize: '18px',
});

export const UserDataItemBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  fontSize: '18px',
  '&:not(:last-child)': {
    marginBottom: '3px',
  },
});
export const UserDataItemtitle = styled(Box)({
  marginRight: 'auto',
  '@media screen and (max-width: 960px)': {
    width: '120px',
  },
});
export const UserDataItemInput = styledEmotion.input`
         border-width: 1px;
          padding: 5px 10px;
          border-style: solid;
          border-radius: 15px;
          width: 230px;
          margin: 0 15px;
          appearance: none;
          outline: none;
					font-size:18px;
					line-height:25px;
					letter-spacing: 0.8px;

					   @media (min-width: 768px) {
    width: 100%;

  }
  },
`;
