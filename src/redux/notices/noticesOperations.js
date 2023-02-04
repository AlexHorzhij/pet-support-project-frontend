import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  requestPublicNotices, removNoticesById,
  requestPrivatNotices
} from 'API/api';


export const fetchNoticesByCategory = createAsyncThunk(
  'fetchNotices',
  async (categoryName, { rejectWithValue }) => {
    try {
      const notices = await requestPublicNotices({ category: categoryName })
      return notices
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const fetchNoticesBySearch = createAsyncThunk(
  'fetchNotices',
  async (query, { rejectWithValue }) => {
    try {
      const notices = await requestPublicNotices({
        status: query.categoryName,
        search: query.filterValue,
      });
      return notices;
    } catch (error) {
      rejectWithValue(error.message);
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
      rejectWithValue(error.message);
    }
  }
);
