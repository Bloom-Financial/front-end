import React from 'react';
import Header from '../../components/app/header/Header';
import News from '../../components/app/news/News';
import UserPagePositions from '../../containers/UserPaperPositions';
import styles from './home.css';
import TickerWidget from '../../components/TickerWidget';

function Home() {
  return (
    <div>
      <Header className={styles.Header} />
      <TickerWidget />
      <UserPagePositions className={styles.Holdings} />
      <News className={styles.News} />
    </div>
  );
}

export default Home;
