import React from 'react';
import { useAlpacaRedirect } from '../state/authProvider';
import styles from './LoginPage.css';
import buttonImg from '../assets/continue.png';
import landingBg from '../assets/landingbg.png';

export default function LoginPage() {
  const redirectToAlpaca = useAlpacaRedirect();

  return (
    <>
      <div>
        <img className={styles.bgImg} src={landingBg} alt="Bloom" />
      </div>
      <div data-testid="alpaca"className={styles.log}>
        <button 
          className={styles.logButton} 
          onClick={redirectToAlpaca}>
          <img src={buttonImg} alt="continue"/>
        </button>
      </div>
    </>
  );
}
