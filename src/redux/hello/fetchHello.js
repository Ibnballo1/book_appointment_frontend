import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchHello = createAsyncThunk('hello', async () => {
  try {
    const text = await fetch('http://127.0.0.1:3000/');
    const data = await text.json();
    if (data.message) {
      return {
        success: true,
        data,
      };
    }
    return { success: true, data };
  } catch (err) {
    return { sucess: false, err: err.response.data.message };
  }
});

export default fetchHello;
