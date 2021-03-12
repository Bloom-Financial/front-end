import React from 'react';
import { useAlpacaRedirect } from '../state/authProvider';
import styles from './LoginPage.css';
import contbutton from '../assets/contbutton.png';

export default function LoginPage() {
  const redirectToAlpaca = useAlpacaRedirect();

  return (
    <div data-testid="alpaca" className={styles.log}>
      <h1 className={styles.title}>BLOOM</h1>
      <h3 className={styles.motto}>BREAKING LIMITS ON OUR MONEY</h3>
      <h3 className={styles.est}>est. 2021</h3>
      <button className={styles.button} onClick={redirectToAlpaca}>
        CONTINUE
      </button>
    </div>
  );
}
