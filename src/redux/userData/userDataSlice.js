import { createSlice } from '@reduxjs/toolkit';
import {
  fetchUserData,
  updateUser,
  addPetToList,
  deletePetFromList,
} from './userDataOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    birthday: null,
    phone: null,
    city: null,
    picture: null,
    pets: [],
  },
  isLoading: false,
  error: null,
};

export const fetchUserDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //==========GET /user ====================
      //Працює
      // OK
      .addCase(fetchUserData.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(fetchUserData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //==========GET /user ====================

      //==========PATCH /user ====================
      //Працює але тілки з прикріпленим файлом картинки
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //==========PATCH /user ====================

      //==========POST /user/pets ====================
      // Працює
      // OK
      .addCase(addPetToList.pending, state => {
        state.isLoading = true;
      })
      .addCase(addPetToList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.pets = [...state.user.pets, payload.pet];
      })
      .addCase(addPetToList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //==========POST /user/pets ====================

      // ============Delete pet from DB==================
      // Працює
      // OK
      .addCase(deletePetFromList.pending, state => {
        state.isLoading = true;
      })
      .addCase(deletePetFromList.fulfilled, (state, { payload }) => {
        const newPetList = state.user.pets.filter(
          item => item._id !== payload.petID
        );
        state.user.pets = newPetList;
        state.isLoading = false;
      })
      .addCase(deletePetFromList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
    // ============Delete pet from DB==================
  },
});
