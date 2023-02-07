import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { FormSearch } from './newsSearch.styled';

export default function NewsSearch({onChange, onSubmit, value}) {

  return (
    <FormSearch
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 400,
      }}
      onSubmit={onSubmit}
    >
      <InputBase
        type='text'
        sx={{ ml: 1, flex: 1, pl: 1 }}
        placeholder="Search news"
        inputProps={{ 'aria-label': 'search' }}
        defaultValue = {value}
        onChange={onChange}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </FormSearch>
  );
}
export { NewsSearch };
