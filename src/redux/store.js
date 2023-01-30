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

import { authSlice } from "./auth/authSlice";
import { noticesSlice } from 'redux/notices/noticesSlice'
import { newsApi } from "./news/newsSlice";
import { fetchUserDataSlice } from 'redux/userData/userDataSlice';
import { fetchPetsDataSlice } from 'redux/petsData/petsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    notices: noticesSlice.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      newsApi.middleware
  ]

    userData: fetchUserDataSlice.reducer,
    petsData: fetchPetsDataSlice.reducer,
  },
 
});

export const persistor = persistStore(store);
