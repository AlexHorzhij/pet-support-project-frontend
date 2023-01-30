import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestPetsData } from 'API/api';

export const fetchPetsData = createAsyncThunk(
  'petsData/fetchPetsData',
  async (_, { rejectWithValue }) => {
    try {
      const petsData = await requestPetsData();
      console.log('petsData: ', petsData);
      return petsData;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
// export const updateUser = createAsyncThunk(
//   'userData/updateUserData',
//   async (data, { rejectWithValue }) => {
//     try {
//       const updatedUserData = await updateUserData(data);
//       return updatedUserData;
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   }
// );
