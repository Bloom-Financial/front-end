import React from 'react';
import PropTypes from 'prop-types';
import style from './Search.css';

const Search = ({ search, onChange }) => (
  <input
    style={{ height: '2vh', width: '10vw' }}
    className={style.searchInput}
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
