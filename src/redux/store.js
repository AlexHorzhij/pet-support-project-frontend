import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authSlice } from "./auth/authSlice";
// import noticesReducer from 'redux/notices/noticesSlice'

const authPersistConfig = {
  key: "auth", 
  storage,
  whitelist: ["token"],
};



export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    // notices: noticesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
