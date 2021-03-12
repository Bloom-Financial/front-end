import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import TickerPage from '../../../containers/TickerPage';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Link to="/bio">
          <h1 className={styles.BioLink}>Creators</h1>
        </Link>
        {/* <TickerPage /> */}
        <Link to="/">
          <h1 className={styles.LogOut}>Log Out</h1>
        </Link>
      </div>
    </>
  );
};

export default Header;
