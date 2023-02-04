import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  requestNotices,
  removeNoticesById,
  // requestPrivateNotices
} from 'API/api';

export const fetchNotices = createAsyncThunk(
  'fetchNotices',
  async (request, { rejectWithValue }) => {
    try {
      const notices = await requestNotices({
        category: request.categoryName,
        search: request.search || null,
      });
      return notices;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

// export const fetchPrivateNotices = createAsyncThunk(
//   'fetchNotices',
//   async (request, { rejectWithValue }) => {
//     try {
//       const notices = await requestPrivateNotices({
//         category: request.categoryName,
//         search: request.filterValue,
//       });
//       return notices;
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   }
// );

export const removeNoticeFromUserById = createAsyncThunk(
  'removNotices',
  async (id, { rejectWithValue }) => {
    try {
      const notices = await removeNoticesById(id);
      return notices;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
