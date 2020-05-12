import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import { signUser } from '../../Redux/action_creators/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGooglePlusG } from "@fortawesome/free-brands-svg-icons"
import '../../styles/signin.css'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

let comic = 'https://res.cloudinary.com/comicom/image/upload/v1586243313/Pages%20Image/Signin-Signup/back_umhv8x.jpg';

class Signin extends Component {

    state={
        email: null,
        password: null
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitSignin=(e)=>{
        this.props.dispatch(signUser(this.state))
        if(this.props.error) {
            toast('SuccessFully logged in', {type: 'success'})
        }else {
            toast('Sorry, invalid credientials', {type : "error"})
        }
    }

    render() {
        if (this.props.auth.isAuthenticated) {
            return <Redirect to="/" />;
        }
        return (
            <div className="limiter">
                <div className="container-login100" style={{backgroundImage:`url(${comic})`}}>
                    <div className="wrap-login100">
                        <div className="login100-form flex-sb flex-w">
                            <span className="login100-form-title p-b-53">Sign In With</span>
                            <a href="/auth/facebook" className="btn-face m-b-20"><FontAwesomeIcon icon={faFacebookSquare}/>FaceBook</a>
                            <a href="/auth/google" className="btn-google m-b-20"><FontAwesomeIcon icon={faGooglePlusG} color="red" />Google</a>
                            <div className="p-t-31 p-b-9">
						        <span className="txt1">Email</span>
					        </div>
                            <div className="wrap-input100 validate-input" data-validate = "Username is required">
						        <input onChange={(e)=>{this.handleChange(e)}} className="input100" type="email" name="email" />
						        <span className="focus-input100"></span>
					        </div>
                            <div className="p-t-13 p-b-9">
						        <span className="txt1">Password</span>
					        </div>
                            <div className="wrap-input100 validate-input" data-validate = "Password is required">
						        <input onChange={(e)=>{this.handleChange(e)}} className="input100" type="password" name="password" />
						        <span className="focus-input100"></span>
					        </div>
					        <div className="container-login100-form-btn m-t-17">
						        <button onClick={()=>{this.submitSignin()}} className="login100-form-btn">Sign In</button>
					        </div>
                            <div className="w-full text-center p-t-55">
						        <span className="txt2">Not a member?</span>
						        <a href="/signup" className="txt2 bo1">Sign up now</a>
					        </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state)=>{
    return {
        auth : state.auth,
        error : state.error.message
    }
}

export default connect(mapStateToProps)(Signin);