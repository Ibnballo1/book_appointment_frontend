import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Greeting() {
  const [text, setText] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchText() {
      const text = await axios.get('http://127.0.0.1:3000/');
      setText(text.data.message);
    }
    fetchText();
  }, []);

  const signOut = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <div>
      <p>
        {' '}
        {text}
      </p>
      <button onClick={signOut} type="button">
        SignOut
      </button>
    </div>
  );
}

export default Greeting;
