import { configureStore } from '@reduxjs/toolkit'
import booksSlice from './features/booksSlice'
import { booksApi, hadithsApi } from './api'
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    books: booksSlice,
    booksApi: booksApi.reducer,
    hadithsApi: hadithsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([booksApi.middleware, hadithsApi.middleware]),
})

setupListeners(store.dispatch);
