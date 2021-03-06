import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
//import LoginPage from '../../containers/LoginPage';
import TickerDetailPage from '../../containers/TickerDetailPage';
import { AuthProvider } from '../../state/authProvider';




function App() {

  return (

    <Router>
      <AuthProvider>
        <Switch>
          {/* <Route exact path = "/" component={LoginPage}/> */}
          <Route exact path = "/" component={TickerDetailPage}/>
          
  
        </Switch>
      </AuthProvider>
    </Router>
    
  );
}

export default App;
