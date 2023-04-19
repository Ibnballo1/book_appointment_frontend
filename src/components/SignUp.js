import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.length < 1) {
      setError('name length must be greater than 1 ');
    } else if (user.email.length < 4 && user.email.includes('@')) {
      setError('email is invalid');
    } else if (user.password.length < 5) {
      setError('password length must be greater than 5 ');
    } else {
      axios.post('http://127.0.0.1:3000/users', user)
        .then((response) => {
          if (response.status === 201 || response.status === 200) {
            setError(null);
            navigate('/');
          } else {
            setError('Invalid credential');
          }
        }).catch(() => setError('Invalid credential'));
      setUser({
        name: '',
        email: '',
        password: '',
      });
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="entry-page-components">
      <img src="https://content.pymnts.com/wp-content/uploads/2016/05/Hotel-Room-Secondary-Market-1000x600.jpg" alt="hotel" className="hotel-image" />
      <div className="entry-page-container">
        {error && <p>{error}</p>}
        <h1>
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="form-container">
          <input type="text" placeholder="name" name="name" value={user.name} onChange={handleChange} className="form-input" />
          <input type="text" placeholder="email" name="email" value={user.email} onChange={handleChange} className="form-input" />
          <input type="password" placeholder="password" name="password" value={user.password} onChange={handleChange} className="form-input" />
          <div className="form-action-buttons">
            <Link to="/signin">
              Sign In
            </Link>
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>

  );
}

export default SignUp;
