import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './components/feauters/quote/quoteSlice';

export const store=configureStore({
  reducer:{
    quote:quoteReducer,
  },
});