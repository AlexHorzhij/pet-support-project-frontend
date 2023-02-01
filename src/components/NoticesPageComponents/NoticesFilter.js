import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Container, Typography } from '@mui/material';

import { useDispatch } from 'react-redux';
import { fetchNotices } from 'redux/notices/noticesOperations';
import useMediaQuery from "@mui/material/useMediaQuery";

export default function NoticesFilter() {

  const dispatch = useDispatch()


  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Container    >

      {matches && (<Typography variant='h2'
        align='center'
        sx={{ mt: 8, mb: 6, mx: 'auto' }}
      >
        Find your favorite pet
      </Typography>)}
      <Paper
        component="form"
        sx={{
          p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, mb: 6,
          maxWidth: 608, height: 44, mx: 'auto',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, pl: 1, }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
}