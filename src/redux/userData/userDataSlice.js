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
    birthdate: null,
    phone: null,
    city: null,
    picture: null,
    pets: [],
  },
  isLoading: false,
  isLoadingUpdate: false,
  isLoadingUpdatePet: false,
  isDeletingPet: false,
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
        if (!payload) {
          return state;
        }
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(fetchUserData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //==========GET /user ====================

      //==========PATCH /user ====================
      //Працює
      // OK
      .addCase(updateUser.pending, state => {
        state.isLoadingUpdate = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        if (!payload) {
          return state;
        }
        state.isLoadingUpdate = false;
        state.user.user = payload;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoadingUpdate = false;
        state.error = payload;
      })
      //==========PATCH /user ====================

      //==========POST /user/pets ====================
      // Працює
      // OK
      .addCase(addPetToList.pending, state => {
        state.isLoadingUpdatePet = true;
      })
      .addCase(addPetToList.fulfilled, (state, { payload }) => {
        if (!payload) {
          return state;
        }
        state.isLoadingUpdatePet = false;
        state.user.pets = [...state.user.pets, payload.pet];
      })
      .addCase(addPetToList.rejected, (state, { payload }) => {
        state.isLoadingUpdatePet = false;
        state.error = payload;
      })
      //==========POST /user/pets ====================

      // ============Delete pet from DB==================
      // Працює
      // OK
      .addCase(deletePetFromList.pending, (state, action) => {
        state.isDeletingPet = `${action.meta.arg}`;
      })
      .addCase(deletePetFromList.fulfilled, (state, { payload }) => {
        if (!payload) {
          return state;
        }
        const newPetList = state.user.pets.filter(
          item => item._id !== payload.petID
        );
        state.user.pets = newPetList;
        state.isDeletingPet = false;
      })
      .addCase(deletePetFromList.rejected, (state, { payload }) => {
        state.isDeletingPet = false;
        state.error = payload;
      });
    // ============Delete pet from DB==================
  },
});
