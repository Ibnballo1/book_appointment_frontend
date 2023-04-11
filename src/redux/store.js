import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import roomSlice from './room/roomSlice';

const store = configureStore({
  reducer: {
    room: roomSlice,
  },
}, applyMiddleware(thunk));

export default store;
