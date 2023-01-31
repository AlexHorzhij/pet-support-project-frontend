import * as React from 'react';
import { FormSearch } from './newsSearch.styled';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { InputStyled } from './newsSearch.styled';
// , width: 400
export default function NewsSearch() {
  return (
    <FormSearch
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 400,
      }}
    >
      <InputStyled
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search News"
        inputProps={{ 'aria-label': 'search news' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </FormSearch>
  );
}
export { NewsSearch };
