import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddRoomImg from '../../components/AddRoomImg';

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
    if (formRoomData.name.length < 1
      || formRoomData.description.length < 1
       || formRoomData.photo.length < 1
        || formRoomData.photo.length < 1) {
      setError("Input field can't be blank");
    } else if (formRoomData.price < 1) {
      setError('Price value should be grater than zero');
    } else {
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
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormRoomData({ ...formRoomData, [name]: value });
  };

  return (
    <>
      {error && error}
      <div className="entry-page-components">
        <AddRoomImg />
        <div className="entry-page-container">
          <h2 className="add-heading">Add Room</h2>
          <form onSubmit={handleSubmit} className="form-container">
            <input
              type="text"
              name="name"
              value={formRoomData.name}
              onChange={handleChange}
              placeholder="Name"
              className="form-input"
            />
            <input
              type="text"
              name="description"
              value={formRoomData.description}
              onChange={handleChange}
              placeholder="Description"
              className="form-input"
            />
            <input
              type="text"
              name="photo"
              value={formRoomData.photo}
              onChange={handleChange}
              placeholder="Photo Link"
              className="form-input"
            />
            <input
              type="text"
              name="city"
              value={formRoomData.city}
              onChange={handleChange}
              placeholder="City"
              className="form-input"
            />
            <input
              type="number"
              name="price"
              value={formRoomData.price}
              onChange={handleChange}
              placeholder="Price"
              className="form-input"
            />
            <div className="form-action-buttons">
              <button type="submit" className="add-btn">Submit</button>
            </div>
            <div className="d-flex flex-row arrowCont">
              <span className="arr" />
              <Link to="/">Back</Link>
            </div>
          </form>
        </div>
      </div>

    </>

  );
};

export default AddRoom;
