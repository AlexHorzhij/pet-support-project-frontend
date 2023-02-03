import React from 'react'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button,  Typography } from '@mui/material';

import PropTypes from 'prop-types';


export default function AddNoticeBtn({onModalOpen}) {
  return (
    <Button
      onClick={onModalOpen}
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

AddNoticeBtn.propTypes = {
  onModalOpen: PropTypes.func.isRequired
}

export {
  AddNoticeBtn
}