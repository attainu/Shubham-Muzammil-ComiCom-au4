import React, { Fragment } from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './components/PublicPages/SignIn'
import Signup from './components/PublicPages/Signup'
import AdminLogin from './components/Dashboard/AdminLogin';
import { setUserInfo } from "./Redux/action_creators/actions";
import Header from './components/PublicPages/Header';
import './styles/style.css'
import Home from './components/PublicPages/Home';
import Footer from './components/PublicPages/Footer';
import ProductList from './components/PublicPages/ProductList';
import ProductDetail from './components/PublicPages/ProductDetail';
import NoFound from './components/PublicPages/404Page';
import Cart from './components/PublicPages/Cart';
import decode from 'jwt-decode';
import { setToken } from './Api/users'
import store from './Redux/reducers/index';
import Contact from './components/PublicPages/Contact';
import About from './components/PublicPages/About';
import WishList from './components/PublicPages/WishList';

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
          <Route path='/admin/login' component={AdminLogin} />
          <Route path='/dashboard' component={Dashboard} />
          <Route exact path='/' component={Home} />
          <Route exact path='/product/:tag' component={ProductList} />
          <Route exact path='/product/detail/:id' component={ProductDetail} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/wishlist' component={WishList} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route component={NoFound} />
        </Switch>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;