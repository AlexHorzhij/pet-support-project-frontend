import React from 'react'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Typography } from '@mui/material';
import { DialogContent, Dialog, DialogContentText, DialogTitle, DialogActions } from '@mui/material';

import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getAuth } from 'redux/auth/authSelectors';
import { NoticeAddSellForm } from 'components/NoticeAddSellForm/NoticeAddSellForm';

export default function AddNoticeBtn() {
  const [openNotification, setOpenNotification] = React.useState(false);
  const [openAddPetForm, setOpenAddPetForm] = React.useState(true);
  const navigate = useNavigate()
  // const { isLoggedIn } = useSelector(getAuth);
  const isLoggedIn = true

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
        sx={{ backdropFilter: "blur(5px)" }}
        maxWidth="md"
        open={openNotification} onClose={handleCloseNotification}>
        <DialogTitle>You are not authorized</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsuur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem psum dolor sit amet, consectet sectetur Lorem  ipsum color sit amet, consectetur  Lorem  ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => navigate('/register')}>Sign Up</Button>
        </DialogActions>
      </Dialog>


      <Dialog
        sx={{ backdropFilter: "blur(5px)" }}
        maxWidth='modal'
        open={openAddPetForm} onClose={handleCloseAddNotice}
      >
        <DialogContent sx={{px: 10, py: 5, height: "950px"}}
        >
          <DialogTitle
            sx={{ fontWeight: 600, fontSize: 36, lineHeight: 1.35, textAlign: 'center', }}
          >Add pet</DialogTitle>
          <DialogContentText sx={{ color: 'text.primary', fontSize: 20, fontWeight: 500, lineHeight: 1.37, textAlign: 'center', pb: 2}}
          >Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </DialogContentText>
          <DialogActions sx={{justifyContent: 'center', mb: 2}}>
            <Button
              variant="contained"
              sx={{ textTransform: 'lowercase' }}
            >
              sell
            </Button>
            <Button
              variant="outlined"
              sx={{ textTransform: 'lowercase' }}
            >
              lost/found
            </Button>
            <Button
              variant="outlined"
              sx={{ textTransform: 'lowercase' }}
            >
              in good hands
            </Button>
          </DialogActions>
          <NoticeAddSellForm
            handleClose={handleCloseAddNotice} />
        </DialogContent>
      </Dialog>
    </div>

  )
}