import { Button } from '@mui/material';

import styled from '@emotion/styled';


import {
    accentColor,
} from 'common-styles.styled';

const Btn = styled(Button)({
    borderRadius: '40px',
    border: `2px solid ${accentColor}`,
    color: "#000",
    backgroundColor: '#FFFFFF',
    textTransform: 'lowercase',
    fontSize: '20px',
    padding: '0px 28px',
    '&:hover': {
        backgroundColor: accentColor
    }
})

export {
    Btn,

}