import React from 'react';
import './App.css';
import Signin from './Components/SignIn'
import Signup from './Components/Signup'
import {BrowserRouter,Route} from 'react-router-dom';
import Profile from './Components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Route path='/signup' component={Signup} />
      <Route path='/signin' component={Signin} />
      <Route path='/profile' component={Profile} />
    </BrowserRouter>
  );
}

export default App;