import { createAsyncThunk } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';

const fetchDetails = createAsyncThunk('room', async () => {
  try {
    const token = localStorage.getItem('token');
    const { id } = useParams();
    const text = await fetch(`http://127.0.0.1:3000/api/v1/rooms/${id}`, { headers: { Authorization: `Bearer ${token}` } });
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

export default fetchDetails;
