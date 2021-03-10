import React from 'react';
import Header from '../../components/app/header/Header';
<<<<<<< HEAD

// import AlpacaForm from '../../components/forms/AlpacaForm';
import News from '../../components/app/news/News';
//import News from '../../components/app/news/News';

=======
import News from '../../components/app/news/News';
>>>>>>> c776b6cca9b199fb5f6b41800508016a691b53ea
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
