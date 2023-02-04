import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllNews, getSearchNews } from 'API/api';

export const fetchNews = createAsyncThunk(
  'fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      const news = await getAllNews();
      return news;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const fetchSearchNews = createAsyncThunk(
  'fetchSearchNews',
  async (searchValue, { rejectWithValue }) => {
    try {
      const news = await getSearchNews(searchValue);
      return news;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
