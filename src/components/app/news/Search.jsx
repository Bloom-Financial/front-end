import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onChange }) => (
  <input
    // className={}
    type="text"
    placeholder="Search here..."
    value={search}
    onChange={onChange}
  />
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
