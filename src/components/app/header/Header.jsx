import React, { useState, useEffect } from 'react';
import { getUser } from '../../../services/userApi';

const Header = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
  };

  useEffect(() => {
    getUser().then((username) => {
      setUsername(username);
      
    });
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="username" 
          type="text" 
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <button>Update Profile</button>   
      </form>
      <button onSubmit={handleSubmit}>log out</button>
    </>
  );
};

export default Header;

