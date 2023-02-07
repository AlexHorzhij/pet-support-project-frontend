import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { FormSearch } from './newsSearch.styled';
import { fetchSearchNews } from 'redux/news/newsOperations';


export default function NewsSearch() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams({});

  const searchValue = searchParams.get('search')


  const handleInputChange = event => {

    setSearchParams( {'search':event.currentTarget.value});
    };

  const handleInputSubmit = event => {
    event.preventDefault();

    if (searchValue?.trim() === "" || !searchValue) {

  
      toast.error("Please, enter search value!")
      return
    }

    dispatch(fetchSearchNews(searchValue));

  };

  return (
    <FormSearch
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 400,
      }}
      onSubmit={handleInputSubmit}
    >
      <InputBase
        type='text'
        sx={{ ml: 1, flex: 1, pl: 1 }}
        placeholder="Search news"
        inputProps={{ 'aria-label': 'search' }}
        defaultValue = {searchValue}
        onChange={handleInputChange}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </FormSearch>
  );
}
export { NewsSearch };
