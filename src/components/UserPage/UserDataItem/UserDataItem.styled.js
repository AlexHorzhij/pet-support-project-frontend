import { styled } from '@mui/material/styles';
import styledEmotion from '@emotion/styled';

import { Typography, Box, ListItem } from '@mui/material';

export const UserDataItemBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  mb: '10px',
  fontSize: '18px',

  ':last-child': {
    marginBottom: '0',
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
`;
