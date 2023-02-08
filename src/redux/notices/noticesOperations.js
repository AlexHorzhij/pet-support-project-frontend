import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestPublicNotices,
  // requestRegisterNotices,
  removeNoticesById,
  getRegisterNotices,
  // requestOwnNotices,
  writeNewNotice,
  toggleFavorite,
} from 'API/api';

export const fetchNotices = createAsyncThunk(
  'fetchNotices',
  async ({ categoryName, search }, { rejectWithValue }) => {
    try {
      const notices = await requestPublicNotices(categoryName, search);
      // console.log('requestPublicNotices', notices);
      return notices;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAuthNotices = createAsyncThunk(
  'fetchAuthNotices',
  async ({ token, categoryName, search = null }, { rejectWithValue }) => {
    // console.log('tokenOper', token);

    try {
      const notices = await getRegisterNotices(token, categoryName, search);
      // console.log('fetchAuthNotices', notices);
      return notices;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const setFavorite = createAsyncThunk(
  'setFavorite',
  async (data, { rejectWithValue }) => {
    try {
      const favorite = await toggleFavorite(data);
      // console.log('favorite Oper', favorite);
      return favorite;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewNotice = createAsyncThunk(
  'addNotice',
  async (data, { rejectWithValue }) => {

    try {
      const newNotice = await writeNewNotice(data);
      return newNotice;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeNoticeFromUserById = createAsyncThunk(
  'removeNotices',
  async (id, { rejectWithValue }) => {
    try {
      const notices = await removeNoticesById(id);
      return notices;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//     if (categoryName === 'own') {
//       try {
//         const notices = await requestOwnNotices(search, token);
//         console.log('notices own', notices);

//         return notices;
//       } catch (error) {
//         return rejectWithValue(error.message);
//       }
//     }

//     if (token) {
//       try {
//         const notices = await requestRegisterNotices(
//           categoryName,
//           search,
//           token
//         );

//         console.log('Register else', notices);
//         return notices;
//       } catch (error) {
//         return rejectWithValue(error.message);
//       }
//     }

//     try {
//       const notices = await requestPublicNotices({
//         category: categoryName,
//         search: search || null,
//       });
//       console.log('notices else', notices);

//       return notices;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchNotices = createAsyncThunk(
//   'fetchNotices',
//   async ({ categoryName, search }, token, { rejectWithValue }) => {
//     console.log('tokenOper', token);
//     if (categoryName === 'favorite') {
//       try {
//         const notices = await requestFavoriteNotices(search);
//         console.log('notices favorite', notices);
//         return notices;
//       } catch (error) {
//         return rejectWithValue(error.message);
//       }
//     }

//     if (categoryName === 'own') {
//       try {
//         const notices = await requestOwnNotices(search, token);
//         console.log('notices own', notices);

//         return notices;
//       } catch (error) {
//         return rejectWithValue(error.message);
//       }
//     }

//     if (token) {
//       try {
//         const notices = await requestRegisterNotices(
//           categoryName,
//           search,
//           token
//         );

//         console.log('Register else', notices);
//         return notices;
//       } catch (error) {
//         return rejectWithValue(error.message);
//       }
//     }

//     try {
//       const notices = await requestPublicNotices({
//         category: categoryName,
//         search: search || null,
//       });
//       console.log('notices else', notices);

//       return notices;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
