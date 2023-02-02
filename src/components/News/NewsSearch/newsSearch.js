import * as React from 'react';
import { FormSearch } from './newsSearch.styled';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { InputStyled } from './newsSearch.styled';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { fetchSearchNews } from 'redux/news/newsOperations';

export default function NewsSearch() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue)
  }

  const handleInputSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchSearchNews(search))
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
      onSubmit={handleInputSubmit}
    >
      <InputStyled
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search News"
        inputProps={{ 'aria-label': 'search news' }}
        value = {search}
        onChange={handleInputChange}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" >
        <SearchIcon />
      </IconButton>
    </FormSearch>
  );
}
export { NewsSearch };
