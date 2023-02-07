import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useDispatch } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { FormSearch } from './newsSearch.styled';
import { fetchSearchNews } from 'redux/news/newsOperations';


export default function NewsSearch() {
  const dispatch = useDispatch();
  // const [searchParams, setSearchParams] = useSearchParams({});
  const [text, setText] = useState('')

  // const searchValue = searchParams.get('search')


  const handleInputChange = event => {
    setText(event.currentTarget.value)
    // setSearchParams( {'search':event.currentTarget.value});
    };

  const handleInputSubmit = event => {
    event.preventDefault();

    if (text?.trim() === "" || !text) {
      toast.error("Please, enter search value!")
      return
    }
    if (text.trim().length < 3) {
      toast.error("Please, enter no less 3 letters for a correct search!")
      return
    }

    dispatch(fetchSearchNews(text));
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
        inputProps={{ 'aria-label': 'search', 'minlenghts': 3 }}
        defaultValue = {text}
        onChange={handleInputChange}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </FormSearch>
  );
}
export { NewsSearch };
