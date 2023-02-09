import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeContainer, RelativeContainer } from './HomePage/HomePage.styled';
import { Typography, Button } from '@mui/material';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/notices/sell');
  };

  return (
    <HomeContainer>
      <RelativeContainer>
        <Typography variant="h3" sx={{ mb: 5 }}>
          Oops! We haven't content on this path
        </Typography>
        <Button variant="contained" onClick={onButtonClick}>
          Find pet
        </Button>
      </RelativeContainer>
    </HomeContainer>
  );
}
