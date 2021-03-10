import React from 'react';
import { useAlpacaRedirect } from '../state/authProvider';
import styles from './LoginPage.css';

export default function LoginPage() {
  const redirectToAlpaca = useAlpacaRedirect();

  return (
    <div data-testid="alpaca"className={styles.log}>
      <button 
        className={styles.logButton} 
        onClick={redirectToAlpaca}>
          C o n t i n u e
      </button>
    </div>
  );
}
