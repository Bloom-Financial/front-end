import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../../../services/userApi';
import styles from './Header.css';

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
      <Link to="/bio">
        <p className={styles.BioLink}>Creators</p>
      </Link>
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
