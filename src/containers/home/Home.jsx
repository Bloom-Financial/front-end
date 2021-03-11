import React from 'react';
import Header from '../../components/app/header/Header';

// import AlpacaForm from '../../components/forms/AlpacaForm';
//import News from '../../components/app/news/News';
//import News from '../../components/app/news/News';

import UserPagePositions from '../../containers/UserPaperPositions';
// import TickerPage from '../TickerPage';
import styles from './home.css';

function Home() {
  return (
    <div>
      <Header className={styles.Header}/>
      <News className={styles.News}/>
      {/* <TickerPage className={styles.Ticker} /> */}
      <UserPagePositions className={styles.Holdings}/>
      
    </div>
  );
}

export default Home;
