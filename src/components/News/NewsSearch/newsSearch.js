import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '@mui/material';

import { FormSearch } from './newsSearch.styled';
import { useTranslation } from 'react-i18next';

import { fetchNews, fetchSearchNews } from 'redux/news/newsOperations';


export function NewsSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  const handleChange = event => {
    event.preventDefault();
    setSearchParams({ search: event.target.value });
  }

  const handleSearch = (event) => {
      event.preventDefault();

    if (search?.trim() === '') {
      toast.error('Please, enter search value!');
      return;
    }

    if (search.trim().length < 3 || search.includes('*')) {
      toast.error('Please, enter no less 3 letters for a correct search!');
      return;
    }

    dispatch(fetchSearchNews(search));
  };

  const handleClearSearch = () => {
    document.getElementById('searchForm').reset();
    setSearchParams('')
    dispatch(fetchNews());
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
      onSubmit={handleSearch}
      onChange={handleChange}
      id="searchForm"
    >
      <InputBase
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        sx={{ ml: 1, flex: 1, pl: 1 }}
        placeholder={t('NewsPage.search.input.placeholder')}
        // value={search}
      />

      {search !== '' && <IconButton
                            onClick={handleClearSearch}
                            type="button"
                            sx={{
                              p: '10px',
                              '&:hover': {
                                color: 'text.primary',
                                backgroundColor: 'secondary.main',
                              }
                            }}
                            aria-label="close"
                          >
          <CloseIcon />
        </IconButton>
      }
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />{' '}
      {/* vertical line in input */}
      <IconButton type="submit" sx={{
          p: '10px',
          '&:hover': {
            color: 'text.primary',
            backgroundColor: 'secondary.main',
          }
        }} aria-label="search">
          <SearchIcon />
        </IconButton>

    </FormSearch>
  );
}
