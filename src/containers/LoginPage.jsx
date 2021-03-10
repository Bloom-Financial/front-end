import React from 'react';
import { useAlpacaRedirect } from '../state/authProvider';
import styles from './LoginPage.css';

export default function LoginPage() {
  const redirectToAlpaca = useAlpacaRedirect();

  return (
    <div className={styles.log}>
      <button 
        className={styles.logButton} 
        onClick={redirectToAlpaca}>
          Continue to login
      </button>
    </div>
  );
}
