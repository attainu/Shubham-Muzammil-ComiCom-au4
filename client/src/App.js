import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import { BrowserRouter, Route } from 'react-router-dom';
import Signin from './Components/SignIn'
import Signup from './Components/Signup'
import Pages from './Components/PublicPages/Pages';
import Cart from './Components/Cart';

// need to create different components to render pages
// currently in testing period

function App() {
  return (
    <BrowserRouter>
      <Route path='/signup' component={Signup} />
      <Route path='/signin' component={Signin} />
      <Route exact path='/' component={Pages} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/cart' component={Cart} />
    </BrowserRouter>
  );
}

export default App;