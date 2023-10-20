import { configureStore } from "@reduxjs/toolkit";

// redux-persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./authSlice";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import { findQueryReducer } from "./findQuerySlice";
import { themeReducer } from "./themeSlice";


const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const contactsConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
}

const filtersConfig = {
  key: 'filters',
  storage,
  whitelist: ['status'],
}

// redux-persist + store
export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    contacts: persistReducer(contactsConfig, contactsReducer),
    filters: persistReducer(filtersConfig, filtersReducer),
    findQuery: findQueryReducer,
    theme: themeReducer,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);




