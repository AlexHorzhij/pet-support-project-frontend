import { createAsyncThunk } from '@reduxjs/toolkit';

import { getOurFriends } from 'API/api';

export const fetchFriends = createAsyncThunk(
  'fetchFriends',
  async (_, { rejectWithValue }) => {
    try {
      const friends = await getOurFriends();
      return friends;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
