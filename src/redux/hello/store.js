import { configureStore } from '@reduxjs/toolkit';
import helloSlice from './helloSlice';

const store = configureStore({
  reducer: {
    message: helloSlice,
  },
});

export default store;
