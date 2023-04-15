import { createSlice } from '@reduxjs/toolkit';
import fetchReservations from './fetchReservations';

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      if (action.payload.success) {
        return { ...state, data: action.payload.data };
      }
      return { ...state, error: action.payload.err };
    });
  },
});

export default reservationsSlice.reducer;
