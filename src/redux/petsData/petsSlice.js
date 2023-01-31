import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPetsData,
  deletePetFromList,
  addPetToList,
} from './petsOperations';

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
      // ============Fetch all pets from DB==================
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
      })
      // ============Delete pet from DB==================
      .addCase(deletePetFromList.pending, state => {
        state.isLoading = true;
      })
      .addCase(deletePetFromList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.pets = payload;
      })
      .addCase(deletePetFromList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ============Add pet to DB==================
      .addCase(addPetToList.pending, state => {
        state.isLoading = true;
      })
      .addCase(addPetToList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.pets = payload;
      })
      .addCase(addPetToList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
