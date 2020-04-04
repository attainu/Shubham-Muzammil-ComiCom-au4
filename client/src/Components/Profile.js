import React,{Component} from 'react';
import {connect} from 'react-redux'
import { getUserInfo } from "../Redux/action_creators/actions";

class Profile extends Component{
    constructor(props){
        super(props)
        this.props.dispatch(getUserInfo());
    }

    render(){
        return (
             <div>
                <h1>here is your profile </h1>
             </div>
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