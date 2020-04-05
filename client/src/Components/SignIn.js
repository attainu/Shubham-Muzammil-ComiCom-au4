import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'
import comic from '../styles/back.jpg'
import { signUser } from '../Redux/action_creators/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGooglePlusG } from "@fortawesome/free-brands-svg-icons"
import '../styles/signin.css'

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

    submitSignin=()=>{
        this.props.dispatch(signUser(this.state))
    }

    render() {
        return (
            <div className="limiter">
                <div className="container-login100" style={{backgroundImage:`url(${comic})`}}>
                    <div className="wrap-login100">
                        <div className="login100-form flex-sb flex-w">
                            <span className="login100-form-title p-b-53">Sign In With</span>
                            <a href="http://localhost:9090/auth/facebook" className="btn-face m-b-20"><FontAwesomeIcon icon={faFacebookSquare}/>FaceBook</a>
                            <a href="http://localhost:9090/auth/google" className="btn-google m-b-20"><FontAwesomeIcon icon={faGooglePlusG} color="red" />Google</a>
                            <div className="p-t-31 p-b-9">
						        <span className="txt1">Email</span>
					        </div>
                            <div className="wrap-input100 validate-input" data-validate = "Username is required">
						        <input onChange={(e)=>{this.handleChange(e)}} className="input100" type="email" name="email" />
						        <span className="focus-input100"></span>
					        </div>
                            <div className="p-t-13 p-b-9">
						        <span className="txt1">Password</span>
        						<a href="#" className="txt2 bo1 m-l-5">Forgot?</a>
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
        user : state.auth
    }
}

export default connect(mapStateToProps)(Signin);