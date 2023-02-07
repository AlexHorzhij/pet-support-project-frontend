import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
  fetchNotices,
  fetchAuthNotices,
} from 'redux/notices/noticesOperations';
import { useParams } from 'react-router-dom';

import { getAuth } from 'redux/auth/authSelectors';

export default function NoticesFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { token } = useSelector(getAuth);
  const params = useParams();
  const dispatch = useDispatch();

  const { categoryName } = params;
  const search = searchParams.get('search') || '';
  const handleFilter = e => {
    e.preventDefault();
    if (token) {
      dispatch(fetchAuthNotices({ token, categoryName, search }));
    } else {
      dispatch(fetchNotices({ categoryName, search }));
    }
  };

  return (
    <Container>
      {
        <Typography
          variant="h2"
          align="center"
          sx={{ mt: 8, mb: 6, mx: 'auto' }}
        >
          Find your favorite pet
        </Typography>
      }
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          mb: 6,
          maxWidth: 608,
          height: 44,
          mx: 'auto',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, pl: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleFilter(e);
            }
          }}
          onChange={e => {
            setSearchParams({ search: e.target.value });
          }}
          value={search}
        />
        <IconButton
          onClick={handleFilter}
          type="button"
          sx={{ p: '10px' }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
}
