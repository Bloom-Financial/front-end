import React, { setState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ username, profile, onSubmit }) => {
  // const [username, setUsername ] = setState('');
  // const [profile, setProfile ] = setState('');

  return (
    <>
      <form>
        <input id="username" 
          type="text" 
          value={username}>username: {username} </input>
        <input id="profile"
          type="text"
          value={profile}>profile:{profile}</input>
        <button onSubmit={onSubmit}>Update Profile</button>   
      </form>
      <button onSubmit={onSubmit}>login out</button>
    </>
  );
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Header;

