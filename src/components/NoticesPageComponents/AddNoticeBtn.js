import React from 'react'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Typography } from '@mui/material';
import { DialogContent, Dialog, DialogContentText, DialogTitle, DialogActions } from '@mui/material';
import { NoticeAddForm } from 'components'

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/authSelectors';

export default function AddNoticeBtn() {
  const [openNotification, setOpenNotification] = React.useState(false);
  const [openAddPetForm, setOpenAddPetForm] = React.useState(false);
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector(getAuth);
  // const isLoggedIn = true

  const handleAddNotice = () => {
    if (isLoggedIn) {
      setOpenAddPetForm(true)
      return
    }
    setOpenNotification(true)
  }

  const handleCloseNotification = () => {
    setOpenNotification(false);
  };

  const handleCloseAddNotice = () => {
    setOpenAddPetForm(false)
  }

  return (
    <div>
      <Button
        onClick={handleAddNotice}
        variant='text'
        sx={{
          display: 'flex', alignItems: 'center',
          '&:hover': { cursor: 'pointer' }
        }}
      >
        <Typography sx={{ marginRight: '5px' }}
        > Add pet
        </Typography>
        <AddCircleIcon color='primary' fontSize='large'
        />
      </Button>
      <Dialog
        maxWidth="xs"
        sx={{ backdropFilter: "blur(5px)" }}
        open={openNotification} onClose={handleCloseNotification}>
        <DialogTitle>You are not authorized</DialogTitle>
        <DialogContent
          sx={{ backdropFilter: "blur(5px)", }}>
          <DialogContentText>
            Lorem ipsuur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem  ipsum color sit amet, consectetur  Lorem  ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => navigate('/register')}>Sign Up</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        maxWidth="xl"
        open={openAddPetForm} onClose={handleCloseAddNotice}
      >
        <NoticeAddForm handleClose={handleCloseAddNotice} />
      </Dialog>
    </div>

  )
}

export {
  AddNoticeBtn
}