import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './contacts/reducers';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: customizedMiddleware,
});

//export default store;
