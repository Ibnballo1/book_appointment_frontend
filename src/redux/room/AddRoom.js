import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddRoom = () => {
  const [error, setError] = useState(null);
  const [formRoomData, setFormRoomData] = useState({
    name: '',
    description: '',
    photo: '',
    city: '',
    price: 0,
  });
  const navigate = useNavigate();

  const accessToken = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const jsonRoomData = JSON.stringify(formRoomData);

      await axios.post(
        'http://127.0.0.1:3000/api/v1/rooms',
        jsonRoomData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      navigate('/');
    } catch (error) {
      if (error.response.status === 401) {
        setError(error.response.data.error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormRoomData({ ...formRoomData, [name]: value });
  };

  return (
    <>
      {error && error}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formRoomData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="description"
          value={formRoomData.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="text"
          name="photo"
          value={formRoomData.photo}
          onChange={handleChange}
          placeholder="Photo Link"
        />
        <input
          type="text"
          name="city"
          value={formRoomData.city}
          onChange={handleChange}
          placeholder="City"
        />
        <input
          type="number"
          name="price"
          value={formRoomData.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <button type="submit">Submit</button>
        <div><Link to="/">Back</Link></div>
      </form>
    </>

  );
};

export default AddRoom;
