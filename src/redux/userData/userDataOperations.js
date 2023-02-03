import { createAsyncThunk } from '@reduxjs/toolkit';

import { addPet, deletePet, requestUserData, updateUserData } from 'API/api';

export const fetchUserData = createAsyncThunk(
  'userData/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const userData = await requestUserData();
      if (!userData) {
        console.log('message');
      }
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
export const deletePetFromList = createAsyncThunk(
  'petsData/deletePetFromList',
  async (_id, { rejectWithValue }) => {
    try {
      const updatedPetsData = await deletePet(_id);
      return updatedPetsData;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
