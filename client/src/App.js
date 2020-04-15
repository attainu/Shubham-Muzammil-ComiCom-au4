import React, { Fragment } from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './Components/SignIn'
import Signup from './Components/Signup'
//import Pages from './Components/PublicPages/Pages';
import { setUserInfo } from "./Redux/action_creators/actions";
import Header from './Components/PublicPages/Header';
import './styles/style.css'
import Home from './Components/PublicPages/Home';
import Footer from './Components/PublicPages/Footer';
import ProductList from './Components/PublicPages/ProductList';
import ProductDetail from './Components/PublicPages/ProductDetail';
import Cart from './Components/Cart';
import decode from 'jwt-decode';
import { setToken } from './Api/users'
import store from './Redux/reducers/index';
import Contact from './Components/PublicPages/Contact';
import About from './Components/PublicPages/About';

// need to create different components to render pages
// currently in testing period

// testing auth thing
if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setUserInfo(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setUserInfo({}));
  }
}


function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/signin' component={Signin} />
          {/* <Route path='/' component={Pages} /> */}
          <Route path='/dashboard' component={Dashboard} />
          <Route exact path='/' component={Home} />
          <Route exact path='/product/:tag' component={ProductList} />
          <Route exact path='/product/detail/:id' component={ProductDetail} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
        </Switch>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;