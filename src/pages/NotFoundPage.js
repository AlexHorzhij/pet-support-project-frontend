import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeContainer } from './HomePage/HomePage.styled';
import { Typography, Button, Box } from '@mui/material';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/notices/sell');
  };

  return (
    <HomeContainer>
      <Box textAlign="center">
        <Typography variant="h3" sx={{ mb: 5 }}>
          Oops! We haven't content on this path
        </Typography>
        <Button variant="contained" onClick={onButtonClick}>
          Find pet
        </Button>
      </Box>
    </HomeContainer>
  );
}
