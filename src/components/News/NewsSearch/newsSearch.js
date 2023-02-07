import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { FormSearch } from './newsSearch.styled';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function NewsSearch({ onSubmit, }) {
  const [searchParams] = useSearchParams();

  const searchValue = searchParams.get('search')
  const [inputValue, setInputValue] = useState(searchValue)
  
  useEffect(() => {
    if (searchValue) {
      setInputValue(searchValue)
    }
  }, [searchValue])

  const handleInputChange = event => {
    setInputValue(event.currentTarget.value)
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(inputValue)
    // setInputValue('')
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
        sx={{ ml: 1, flex: 1, pl: 1 }}
        placeholder="Search news"
        inputProps={{ 'aria-label': 'search' }}
        value={inputValue}
        onChange={handleInputChange}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </FormSearch>
  );
}
export { NewsSearch };
