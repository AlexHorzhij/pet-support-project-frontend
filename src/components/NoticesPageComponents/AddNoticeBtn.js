import React from 'react'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button,  Typography } from '@mui/material';



export default function AddNoticeBtn() {
  const handleBtn = () => {
    alert('Натиснув? Ну й молодець!')
    return
  }

  return (
    <Button
      onClick={handleBtn}
      variant='text'
      sx={{
        display: 'flex',
        alignItems: 'center',
        '&:hover' : {
          cursor: 'pointer'
        }
      }}
    >
      <Typography
        sx={{ marginRight: '5px' }}
      > Add pet
      </Typography>

      <AddCircleIcon
        color='primary'
        fontSize='large'
      />
    </Button>
  )
}

export {
  AddNoticeBtn
}