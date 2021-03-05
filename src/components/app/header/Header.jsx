import React, { setState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ username, onSubmit }) => {
  // const [username, setUsername ] = setState('');
  // const [profile, setProfile ] = setState('');

  return (
    <>
      <form>
        <input id="username" 
          type="text" 
          value={username}>username: {username} </input>
        <button onSubmit={onSubmit}>Update Profile</button>   
      </form>
      <button onSubmit={onSubmit}>login out</button>
    </>
  );
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Header;

