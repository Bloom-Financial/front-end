import React, { useState } from 'react';
import { createUser } from '../../../services/userApi';

const Header = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser().then((username) => {
      setUsername(username);
    });
  };
  console.log(username);

  const handleLogOut = () => {
    window.location.assign('/');
    setUsername('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input
          id="username"
          type="text"
          onChange={({ target }) => setUsername(target.value)}
        />
        <button>Update Profile</button>
      </form>
      <button onClick={handleLogOut}>log out</button>
    </>
  );
};

export default Header;
