import React, { Component } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../../styles/signin.css'
import { loginAdmin } from "../../Redux/action_creators/adminActions";

class AdminLogin extends Component {

    state = {
        email: null,
        password: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        if (this.props.adminAuth) {
            return <Redirect to="/dashboard" />;
        }
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-form flex-sb flex-w">
                            <span className="login100-form-title p-b-53">Admin Signin</span>
                            <div className="p-t-31 p-b-9">
                                <span className="txt1">Email</span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Username is required">
                                <input onChange={(e) => { this.handleChange(e) }} className="input100" type="email" name="email" />
                                <span className="focus-input100"></span>
                            </div>
                            <div className="p-t-13 p-b-9">
                                <span className="txt1">Password</span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input onChange={(e) => { this.handleChange(e) }} className="input100" type="password" name="password" />
                                <span className="focus-input100"></span>
                            </div>
                            <div className="container-login100-form-btn m-t-17">
                                <button onClick={() => { this.props.signinAdmin(this.state) }} className="login100-form-btn">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        adminAuth: state.admin.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signinAdmin: (adminInfo) => dispatch(loginAdmin(adminInfo))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin)