import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

import { toast } from 'react-hot-toast';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '@mui/material';

import { FormSearch } from './newsSearch.styled';
import { useTranslation } from 'react-i18next';

export function NewsSearch({ onSubmit }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const { t } = useTranslation();

  const handleClearSearch = event => {
    event.preventDefault();
    setSearchParams('');
    document.getElementById('searchForm').reset();
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    if (form.elements.search.value.trim() === '') {
      toast.error('Enter search value');
      return;
    }
    onSubmit(form.elements.search.value);
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
      onSubmit={handleSubmit}
      id="searchForm"
    >
      <InputBase
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        sx={{ ml: 1, flex: 1, pl: 1 }}
        placeholder={t('SearchNews')}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />{' '}
      {/* vertical line in input */}
      {search !== '' ? (
        <IconButton
          onClick={handleClearSearch}
          type="submit"
          sx={{ p: '10px' }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      ) : (
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      )}
    </FormSearch>
  );
}
