import React from 'react';
import Header from '../../components/app/header/Header';
import News from '../../components/app/news/News';
import UserPagePositions from '../../containers/UserPaperPositions';
import TickerPage from '../TickerPage';
import styles from './home.css';

function Home() {
  return (
    <div>
      <Header className={styles.Header} />
      <TickerPage className={styles.Ticker} />
      <UserPagePositions className={styles.Holdings} />
      <News className={styles.News} />
    </div>
  );
}

export default Home;
