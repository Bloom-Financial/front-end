import React from 'react';

import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
//import LoginPage from '../../containers/LoginPage';
import TickerDetailPage from '../../containers/TickerDetailPage';
import { AuthProvider } from '../../state/authProvider';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../../containers/LoginPage';

import Home from '../../containers/home/Home';

import { AuthProvider } from '../../state/authProvider';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch> feature/08-ticker-stuff
          <Route exact path = "/" component={LoginPage}/> 
          <Route exact path = "/" component={TickerDetailPage}/>
          
  

          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={Home} />
 dev
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
