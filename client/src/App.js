import React from 'react';
//import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Signin from './components/SignIn'
import Signup from './components/Signup'
import {BrowserRouter,Route} from 'react-router-dom';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Route path='/signup' component={Signup} />
      <Route path='/signin' component={Signin} />
      <Route path='/profile' component={Profile} />
      <Route path='/dashboard' component={Dashboard} />
    </BrowserRouter>
  );
}

export default App;