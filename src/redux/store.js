import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filterReducer from './filtersSlice.js';
import contactsReducer from './contactsSlice.js';

const contactsConfig = {
  key: 'contacts',
  storage: storage,
  whitelist: ['contacts'], // only navigation will be persisted
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, contactsReducer),
    filters: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
