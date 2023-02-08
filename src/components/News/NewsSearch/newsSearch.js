import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { FormSearch } from './newsSearch.styled';

import { toast } from 'react-hot-toast';

export default function NewsSearch({ onSubmit, value}) {
  
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    if (form.elements.search.value.trim() === '') {
            toast.error('Enter search value')
            return
        }
    onSubmit(form.elements.search.value)
  }

  return (
    <FormSearch
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 400,
      }}
      onSubmit={handleSubmit}
    >
      <InputBase
        type='text'
        name='search'
        autoComplete='off'
        autoFocus
        sx={{ ml: 1, flex: 1, pl: 1 }}
        placeholder="Search news"
        defaultValue={value}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </FormSearch>
  );
}
export { NewsSearch };
