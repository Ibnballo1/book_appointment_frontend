import { createSlice } from '@reduxjs/toolkit';
import fetchHello from './fetchHello';

const helloSlice = createSlice({
  name: 'message',
  initialState: {
    data: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHello.fulfilled, (state, action) => {
      if (action.payload.success) {
        return { ...state, data: action.payload.data };
      }
      return { ...state, error: action.payload.err };
    });
  },
});

export default helloSlice.reducer;
