import { createSlice } from '@reduxjs/toolkit';
import { fetchPetsData } from './petsOperations';

const initialState = {
  pets: [
    {
      id: null,
      name: null,
      dateOfBirth: null,
      breed: null,
      avatarURL: null,
      comment: null,
      owner: null,
    },
  ],
  isLoading: false,
  error: null,
};

export const fetchPetsDataSlice = createSlice({
  name: 'petsData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPetsData.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchPetsData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.pets = payload;
      })
      .addCase(fetchPetsData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
