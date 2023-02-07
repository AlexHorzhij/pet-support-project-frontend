import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Typography, Grid } from '@mui/material';
import {
  DialogContent,
  Dialog,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from '@mui/material';
import {
  DialogContentStyled,
  DialogTitleStyled,
} from 'components/NoticeAddForm/NoticeAddForm.styled';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/authSelectors';
import { NoticeAddForm } from 'components/NoticeAddForm/NoticeAddForm';

export default function AddNoticeBtn() {
  const [openNotification, setOpenNotification] = React.useState(false);
  const [openAddPetForm, setOpenAddPetForm] = React.useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector(getAuth);

  const handleAddNotice = () => {
    if (isLoggedIn) {
      setOpenAddPetForm(true);
      return;
    }
    setOpenNotification(true);
  };

  const handleCloseNotification = () => {
    setOpenNotification(false);
  };

  const handleCloseAddNotice = () => {
    setOpenAddPetForm(false);
  };

  return (
    <div>
      <Button
        onClick={handleAddNotice}
        variant="text"
        sx={{
          display: 'flex',
          alignItems: 'center',
          '&:hover': { cursor: 'pointer' },
        }}
      >
        <Typography sx={{ marginRight: '5px' }}> Add pet</Typography>
        <AddCircleIcon color="primary" fontSize="large" />
      </Button>

      <Dialog
        sx={{ backdropFilter: 'blur(5px)' }}
        maxWidth="sm"
        open={openNotification}
        onClose={handleCloseNotification}
      >
        <DialogTitle sx={{ textAlign: 'center' }}>
          You are not authorized!
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ textAlign: 'center' }}>
            To add a notice you should be registered and logged in! Press the
            button below with your paw!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid sx={{ mx: 'auto', mb: 2 }} container spacing={2}>
            <Grid item xs={7}>
              <Button onClick={() => navigate('/register')} variant="contained">
                Sign Up
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button onClick={() => navigate('/login')} variant="contained">
                Login
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>

      <Dialog
        sx={{ backdropFilter: 'blur(5px)'}}
        maxWidth="modal"
        open={openAddPetForm}
        onClose={handleCloseAddNotice}
      >
        <DialogContentStyled>
          <DialogTitleStyled>Add pet</DialogTitleStyled>
          <NoticeAddForm handleClose={handleCloseAddNotice} />
        </DialogContentStyled>
      </Dialog>
    </div>
  );
}
