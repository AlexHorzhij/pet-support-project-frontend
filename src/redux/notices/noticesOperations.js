import { createAsyncThunk } from "@reduxjs/toolkit";

import { requestNotices, removNoticesById } from 'API/api';

export const fetchNoticesByCategory = createAsyncThunk(
  'fetchNotices',
  async (categoryName, { rejectWithValue }) => {
    try {
      const notices = await requestNotices({ category: categoryName })
      console.log(notices)
      return notices
    } catch (error) {
      rejectWithValue(error.message)
    }

  }
);

export const fetchNoticesBySearch = createAsyncThunk(
  'fetchNotices',
  async (query, { rejectWithValue }) => {
    try {
      const notices = await requestNotices({
        status: query.categoryName,
        search: query.filterValue,
      });
      return notices;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const removNoticefromUserById = createAsyncThunk(
  'removNotices',
  async (id, { rejectWithValue }) => {
    try {
      const notices = await removNoticesById(id);
      return notices;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
