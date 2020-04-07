import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'
import '../styles/signin.css'

let comic= 'https://res.cloudinary.com/comicom/image/upload/v1586243312/Pages%20Image/Signin-Signup/back2_ubkwo5.jpg';

class Signup extends Component {

    render() {
        return (
            <div className="limiter">
                <div className="container-login100" style={{backgroundImage:`url(${comic})`}}>
                    <div className="wrap-login100">
                        <form className="login100-form flex-sb flex-w">
                            <span className="login100-form-title p-b-53">"Be ComiComer"</span>
                            <div className="p-t-31 p-b-9">
						        <span className="txt1">Fullname</span>
					        </div>
                            <div className="wrap-input100 validate-input" data-validate = "Username is required">
						        <input className="input100" type="text" name="username" />
						        <span className="focus-input100"></span>
					        </div>
                            <div className="p-t-31 p-b-9">
						        <span className="txt1">Email</span>
					        </div>
                            <div className="wrap-input100 validate-input" data-validate = "Email is required">
						        <input className="input100" type="email" name="email" />
						        <span className="focus-input100"></span>
					        </div>
                            <div className="p-t-13 p-b-9">
						        <span className="txt1">Password</span>
					        </div>
                            <div className="wrap-input100 validate-input" data-validate = "Password is required">
						        <input className="input100" type="password" name="pass" />
						        <span className="focus-input100"></span>
					        </div>
                            <div className="p-t-13 p-b-9">
						        <span className="txt1">Confirm Password</span>
					        </div>
                            <div className="wrap-input100 validate-input" data-validate = "Confirm Password is required">
						        <input className="input100" type="password" name="cnfrm-pass" />
						        <span className="focus-input100"></span>
					        </div>
					        <div className="container-login100-form-btn m-t-17">
						        <button className="login100-form-btn">Signup</button>
					        </div>
                            <div class="w-full text-center p-t-55">
						        <span class="txt2">Already a member?</span>
						        <a href="/signin" class="txt2 bo1">Sign In now</a>
					        </div>
                        </form>
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

export default connect(mapStateToProps)(Signup);