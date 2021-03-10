import React from 'react';
import Header from '../../components/app/header/Header';

// import AlpacaForm from '../../components/forms/AlpacaForm';
// import News from '../../components/app/news/News';

//import News from '../../components/app/news/News';

import UserPagePositions from '../../containers/UserPaperPositions';
import styles from './home.css';

function Home() {
  return (
    <div>
      <Header className={styles.Header}/>
      {/* <News className={styles.News}/> */}
      <UserPagePositions className={styles.Holdings}/>
      
    </div>
  );
}

export default Home;
