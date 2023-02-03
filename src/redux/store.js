import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authSlice } from './auth/authSlice';
import { noticesSlice } from 'redux/notices/noticesSlice';
import { newsSlice } from './news/newsSlice';
import { fetchUserDataSlice } from 'redux/userData/userDataSlice';
import { fetchPetsDataSlice } from 'redux/petsData/petsSlice';
import { friendsSlice } from './friends/friendsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    notices: noticesSlice.reducer,
    news: newsSlice.reducer,
    userData: fetchUserDataSlice.reducer,
    petsData: fetchPetsDataSlice.reducer,
    friends: friendsSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
