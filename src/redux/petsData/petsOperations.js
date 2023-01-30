import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestPetsData, deletePet, addPet } from 'API/api';

export const fetchPetsData = createAsyncThunk(
  'petsData/fetchPetsData',
  async (_, { rejectWithValue }) => {
    try {
      const petsData = await requestPetsData();
      return petsData;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const deletePetFromList = createAsyncThunk(
  'petsData/deletePetFromList',
  async (id, { rejectWithValue }) => {
    try {
      const updatedPetsData = await deletePet(id);
      return updatedPetsData;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const addPetToList = createAsyncThunk(
  'petsData/addPetToList',
  async (pet, { rejectWithValue }) => {
    try {
      const updatedPetsData = await addPet(pet);
      return updatedPetsData;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
