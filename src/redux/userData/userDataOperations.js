import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestUserData, updateUserData } from 'API/api';

export const fetchUserData = createAsyncThunk(
  'userData/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const userData = await requestUserData();
      return userData;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const updateUser = createAsyncThunk(
  'userData/updateUserData',
  async (data, { rejectWithValue }) => {
    try {
      const updatedUserData = await updateUserData(data);
      return updatedUserData;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const updateUserAvatar = createAsyncThunk(
  'userData/updateUserAvatar',
  async (data, { rejectWithValue }) => {
    try {
      const updatedUserData = await updateUserData(data);
      return updatedUserData;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
