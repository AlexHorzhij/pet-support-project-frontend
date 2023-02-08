import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  requestPublicNotices,
  removeNoticesById,
  getRegisterNotices,
  writeNewNotice,
  toggleFavorite,
} from 'API/api';

export const fetchNotices = createAsyncThunk(
  'fetchNotices',
  async ({ categoryName, search }, { rejectWithValue }) => {
    try {
      const notices = await requestPublicNotices(categoryName, search);
      return notices;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAuthNotices = createAsyncThunk(
  'fetchAuthNotices',
  async ({ token, categoryName, search = null }, { rejectWithValue }) => {
    try {
      const notices = await getRegisterNotices(token, categoryName, search);
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
      return favorite;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewNotice = createAsyncThunk(
  'addNotice',
  async (data, { rejectWithValue }) => {
    try {
      const newNotice = await writeNewNotice(data);
      return newNotice;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeNoticeFromUserById = createAsyncThunk(
  'removeNotices',
  async (id, { rejectWithValue }) => {
    try {
      const notices = await removeNoticesById(id);
      return notices;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
