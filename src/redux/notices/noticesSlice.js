import { createSlice, current } from '@reduxjs/toolkit';
import {
  fetchNotices,
  removeNoticeFromUserById,
  addNewNotice,
  setFavorite,
} from './noticesOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchNotices.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(removeNoticeFromUserById.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeNoticeFromUserById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(removeNoticeFromUserById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addNewNotice.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNewNotice.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(addNewNotice.rejected, state => {
        state.isLoading = false;
      })
      .addCase(setFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(setFavorite.fulfilled, (state, { payload }) => {
        console.log('slice payload', current(state.items));
        console.log('slice payload', state);

        state.items = state.items.map(item => {
          console.log('slice payload22', item._id);
          return item._id === payload.result.notice
            ? (item.favorite = payload.favorite)
            : item;
        });
      })
      .addCase(setFavorite.rejected, state => {
        state.isLoading = false;
      });
  },
});
