import React from 'react'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button,  Typography } from '@mui/material';

import PropTypes from 'prop-types';

import { manageModalWin } from 'redux/modalWin/modalWinOperations';
import { useDispatch } from 'react-redux';


export default function AddNoticeBtn({onModalOpen}) {

  const dispatch = useDispatch()
  const openModalWindow = () => {
    dispatch(manageModalWin(true))
  }

  
  return (
    <Button
      onClick={openModalWindow}
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
  onModalOpen: PropTypes.func
}

export {
  AddNoticeBtn
}