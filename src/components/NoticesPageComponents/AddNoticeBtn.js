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
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function AddNoticeBtn() {
  const [openNotification, setOpenNotification] = React.useState(false);
  const [openAddPetForm, setOpenAddPetForm] = React.useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector(getAuth);
  const params = useParams()
  const { categoryName } = params;
  const { t } = useTranslation('common');

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
        <Typography sx={{ marginRight: '5px' }}> {t('NoticesPage.addBtn')}</Typography>
        <AddCircleIcon color="primary" fontSize="large" />
      </Button>

      <Dialog
        sx={{ backdropFilter: 'blur(5px)' }}
        maxWidth="sm"
        open={openNotification}
        onClose={handleCloseNotification}
      >
        <DialogTitle sx={{ textAlign: 'center' }}>
          {t('NoticesPage.notAuthMsg.title')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ textAlign: 'center' }}>
            {t('NoticesPage.notAuthMsg.text')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid sx={{ mx: 'auto', mb: 2 }} container spacing={2}>
            <Grid item xs={7}>
              <Button onClick={() => navigate('/register')} variant="contained">
                {t('NoticesPage.notAuthMsg.1btn')}
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button onClick={() => navigate('/login')} variant="contained">
                {t('NoticesPage.notAuthMsg.2btn')}
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>

      <Dialog
        sx={{ backdropFilter: 'blur(5px)' }}
        maxWidth="modal"
        open={openAddPetForm}
        onClose={handleCloseAddNotice}
      >
        <DialogContentStyled>
          <DialogTitleStyled>{t('NoticesPage.addBtn')}</DialogTitleStyled>
          <NoticeAddForm handleClose={handleCloseAddNotice} categoryName={categoryName} />
        </DialogContentStyled>
      </Dialog>
    </div>
  );
}
