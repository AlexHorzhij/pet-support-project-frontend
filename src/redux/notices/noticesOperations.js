import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  requestPublicNotices,
  removeNoticesById,
  requestFavoriteNotices,
  requestOwnNotices,
  writeNewNotice,
  toggleFavorite,
} from 'API/api';

export const fetchNotices = createAsyncThunk(
  'fetchNotices',
  async ({ categoryName, search }, { rejectWithValue }) => {
    if (categoryName === 'favorite') {
      try {
        const notices = await requestFavoriteNotices(search);
        return notices;
      } catch (error) {
        rejectWithValue(error.message);
      }
    }

    if (categoryName === 'own') {
      try {
        const notices = await requestOwnNotices(search);
        return notices;
      } catch (error) {
        rejectWithValue(error.message);
      }
    }

    try {
      const notices = await requestPublicNotices({
        category: categoryName,
        search: search || null,
      });
      return notices;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const addNewNotice = createAsyncThunk(
  'addNotice',
  async (data, { rejectWithValue }) => {
    console.log('dataOperation: ', data);
    try {
      const res = await writeNewNotice(data);
      console.log('res', res);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeNoticeFromUserById = createAsyncThunk(
  'removNotices',
  async (id, { rejectWithValue }) => {
    try {
      const notices = await removeNoticesById(id);
      return notices;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const setFavorite = createAsyncThunk(
  'setFavorite',
  async (data, { rejectWithValue }) => {
    try {
      const favorite = await toggleFavorite(data);
      console.log('favorite Oper', favorite);
      return favorite;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
