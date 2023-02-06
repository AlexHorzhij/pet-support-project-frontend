import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  requestNotices,
  removeNoticesById,
  requestFavoriteNotices,
  requestOwnNotices,
} from 'API/api';

export const fetchNotices = createAsyncThunk(
  'fetchNotices',
  async (request, { rejectWithValue }) => {
    try {
      const notices = await requestNotices({
        category: request.categoryName,
        search: request.search || null,
      });
      return notices;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const fetchPrivateNotices = createAsyncThunk(
  'fetchNotices',
  async (request, { rejectWithValue }) => {

    const { flag, search } = request

    if (flag === 'favorite') {
      try {
        const notices = await requestFavoriteNotices(search);
        return notices;
      } catch (error) {
        rejectWithValue(error.message);
      }
    }

    if (flag === 'own') {
      try {
        const notices = await requestOwnNotices(search);
        return notices;
      } catch (error) {
        rejectWithValue(error.message);
      }
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
      rejectWithValue(error.message);
    }
  }
);
