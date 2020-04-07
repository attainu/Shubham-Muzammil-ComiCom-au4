import React,{Component} from 'react';
import {connect} from 'react-redux'
import { getUserInfo } from "../Redux/action_creators/actions";
import Header from './Header';
import '../styles/style.css'
import Home from './Home';
import Footer from './Footer';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

// need to create different components to render pages

class Profile extends Component{
    constructor(props){
        super(props)
        this.props.dispatch(getUserInfo());
    }

    render(){
        return (
            <>
            <Header />
            <ProductList />
            <Footer/>
            </>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log("state here in profile", state)
   return {
       user:state.auth
   }
}

export default connect(mapStateToProps)(Profile);