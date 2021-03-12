import React from 'react';
import { useAlpacaRedirect } from '../state/authProvider';
import styles from './LoginPage.css';

export default function LoginPage() {
  const redirectToAlpaca = useAlpacaRedirect();

  return (
    <div data-testid="alpaca" className={styles.log} onClick={redirectToAlpaca}>
      <h1 className={styles.title}>BLOOM</h1>
      <h3 className={styles.motto}>BREAKING LIMITS ON OUR MONEY</h3>
      <h3 className={styles.est}>est. 2021</h3>
      <p className={styles.login}>CLICK TO LOGIN</p>
    </div>
  );
}
