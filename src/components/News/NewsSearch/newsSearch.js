import * as React from 'react';
import { FormSearch } from './newsSearch.styled';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { InputStyled } from './newsSearch.styled';
import { useDispatch} from 'react-redux';
import { fetchSearchNews } from 'redux/news/newsOperations';
import { useSearchParams } from "react-router-dom";

export default function NewsSearch() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = !searchParams.get("search") ? '' : searchParams.get("search");

  const handleInputChange = (event) => {
    setSearchParams({ search: event.currentTarget.value })
  }

  const handleInputSubmit = (event) => {
    event.preventDefault()
    console.log(search)
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
        inputProps={{ 'aria-label': 'searchNews' }}
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
