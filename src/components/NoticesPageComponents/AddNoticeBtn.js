import React from 'react'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Typography } from '@mui/material';
import { DivFlexSpaceBetween } from 'pages/NoticePage.styled';



export default function AddNoticeBtn() {
  const handleBtn = () => {
    alert('Натиснув? Ну й молодець!')
    return
  }

  return (
    <DivFlexSpaceBetween
      onClick={handleBtn}
    >
      <Typography
        sx={{ marginRight: '5px' }}
      > Add pet
      </Typography>

      <AddCircleIcon
        color='primary'
        fontSize='large'
      />
    </DivFlexSpaceBetween>
  )
}

export {
  AddNoticeBtn
}