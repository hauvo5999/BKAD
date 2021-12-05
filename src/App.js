import React from 'react';
import Login from './components/login';
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/homepage';
import './css/layout.css'
import AppContent from './components/AppContent';

class App extends React.Component {
  render() {
    return (
      < Switch >
        <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
        {/* <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} /> */}
        <Route path="/" name="Home" render={(props) => <AppContent {...props} />} />
      </Switch >
    );
  }
}

export default App;
