import { configureStore } from '@reduxjs/toolkit';
import CVSlice from '../features/cv/CVSlice';

export const store = configureStore({
  reducer: {
    cvslice: CVSlice
  },
});
