import React from 'react';
//import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Signin from './components/SignIn'
import Signup from './components/Signup'
import {BrowserRouter,Route} from 'react-router-dom';
import Profile from './Components/Profile';
import Header from './Components/Header';

// need to create different components to render pages
// currently in testing period

function App() {
  return (
    <BrowserRouter>
      <Route path='/signup' component={Signup} />
      <Route path='/signin' component={Signin} />
      <Route path='/profile' component={Profile} />
      <Route path='/header' component={Header} />
      <Route path='/dashboard' component={Dashboard} />
    </BrowserRouter>
  );
}

export default App;