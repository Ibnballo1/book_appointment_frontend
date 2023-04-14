import { createSlice } from '@reduxjs/toolkit';
import fetchRoom from './fetchRoom';

const roomSlice = createSlice({
  name: 'room',
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRoom.fulfilled, (state, action) => {
      if (action.payload.success) {
        return { ...state, data: action.payload.data };
      }
      return { ...state, error: action.payload.err };
    });
  },
});

export default roomSlice.reducer;
