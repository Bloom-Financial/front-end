import React, { setState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Header = ({ onSubmit }) => {
  const [username, setUsername] = setState('');

  return (
    <>
      <form>
        <input id="username" 
          type="text" 
          value={username}> </input>
        <button onSubmit={onSubmit}>Update Profile</button>   
      </form>
      <button onSubmit={onSubmit}>login out</button>
    </>
  );
};
// username: {username}  username: PropTypes.string.isRequired,
Header.propTypes = {

  onSubmit: PropTypes.func.isRequired
};

export default Header;

