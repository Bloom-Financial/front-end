import React from 'react';
import PropTypes from 'prop-types';

function Login({ email }) {
  return (
    <div>
      Email: {email}
    </div>
  );
}

Login.propTypes = {
  email: PropTypes.string.isRequired
};

export default Login;
