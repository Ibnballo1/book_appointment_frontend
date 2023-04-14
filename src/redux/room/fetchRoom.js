import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchRoom = createAsyncThunk('room', async () => {
  try {
    const token = localStorage.getItem('token');
    const text = await fetch('http://127.0.0.1:3000/api/v1/rooms', { headers: { Authorization: `Bearer ${token}` } });
    const data = await text.json();

    if (data) {
      return {
        success: true,
        data,
      };
    }
    return { success: false, error: 'Data not found' };
  } catch (err) {
    return { success: false, error: err.response.data.name };
  }
});

export default fetchRoom;
