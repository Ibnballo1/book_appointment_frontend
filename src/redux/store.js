import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import roomSlice from './room/roomSlice';
import reservationsSlice from './reservation/reservationsSlice';

const store = configureStore({
  reducer: {
    room: roomSlice,
    reservations: reservationsSlice,
  },
}, applyMiddleware(thunk));

export default store;
