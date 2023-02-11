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

export function NewsSearch({ onSubmit, onClear }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const { t } = useTranslation('common');

  const handleChange = event => {
    event.preventDefault();
    setSearchParams({ search: event.target.value });
  }

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
                            onClick={onClear}
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
