// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import { getUserInfo } from "../../Redux/action_creators/actions";
// import Header from './Header';
// import '../../styles/style.css'
// import Home from './Home';
// import Footer from './Footer';
// import ProductList from './ProductList';
// import ProductDetail from './ProductDetail';
// import Cart from './Cart';

// // need to create different components to render pages

// class Pages extends Component {
//     constructor(props) {
//         super(props)
//         this.props.dispatch(getUserInfo());
//     }

//     render() {
//         return (
//                 <BrowserRouter>
//                     <Header />
//                     <Switch>
//                         <Route exact path='/' component={Home} />
//                         <Route exact path='/product/:tag' component={ProductList} />
//                         <Route exact path='/product/detail/:id' component={ProductDetail} />
//                         <Route exact path='/cart' component={Cart} />
//                         {/* below routes will be add later */}
//                         {/* <Route exact path='/profile' component={Profile} />
//                         <Route exact path='/wishlists' component={Wislist} />
//                         <Route exact path='/cart/checkout' component={Checkout} /> */}
//                     </Switch>
//                     <Footer />
//                 </BrowserRouter>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     console.log("state here in profile", state)
//     return {
//         user: state.auth
//     }
// }

// export default connect(mapStateToProps)(Pages);