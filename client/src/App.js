import React from 'react';
import './App.css';
import Signin from './Components/SignIn'
import Signup from './Components/Signup'
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
    </BrowserRouter>
  );
}

export default App;