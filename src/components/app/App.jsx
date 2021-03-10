import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../../containers/LoginPage';
import Home from '../../containers/home/Home';
import { AuthProvider } from '../../state/authProvider';
import { AlpacaProvider } from '../../state/AlpacaProvider';
import BioPage from '../../containers/bio/BioPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AlpacaProvider>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/home" component={Home} />
            <Route exact path="/bio" component={BioPage}/>
          </Switch>
        </AlpacaProvider>
      </AuthProvider>
     
    </Router>
  );
}

export default App;
