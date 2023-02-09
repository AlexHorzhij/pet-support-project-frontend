import { Button, Typography, Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { verifyUser } from 'redux/auth/authOperations';
import { HomeContainer } from './HomePage/HomePage.styled';

export default function VerificationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { verificationToken } = useParams();

  useEffect(() => {
    dispatch(verifyUser(verificationToken));
  }, [dispatch, verificationToken]);

  const onButtonClick = () => {
    navigate('/login');
  };

  return (
    <HomeContainer>
      <Box textAlign="center">
        <Typography variant="h3" sx={{ mb: 5 }}>
          Click to switch to the login page
        </Typography>
        <Button variant="contained" onClick={onButtonClick}>
          Login
        </Button>
      </Box>
    </HomeContainer>
  );
}
