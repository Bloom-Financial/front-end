import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LoginPage from '../../containers/LoginPage';
import News from '../app/news/News';
import { AuthProvider } from '../../state/authProvider';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path = "/" component={LoginPage}/>
          <Route exact path = "/news" component={News}/>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
