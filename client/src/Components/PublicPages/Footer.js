import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import '../../styles/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faDollarSign, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"

class Footer extends Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="page-links">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <h3>Site Map</h3>
                                <ul className="list-unstyled">
                                    <li> <Link to="/">Home</Link></li>
                                    <li> <Link to="/about">About Us</Link></li>
                                    <li> <Link to="/">Latest</Link></li>
                                    <li> <Link to="/product/all">See all</Link></li>
                                    <li> <Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <h3>Charaters</h3>
                                <ul className="list-unstyled">
                                    <li> <Link to="/product/iron man">Iron Man</Link></li>
                                    <li> <Link to="/product/batman">Batman</Link></li>
                                    <li> <Link to="/product/chacha choudhary">Chacha Choudhary</Link></li>
                                    <li> <Link to="/product/superman">Superman</Link></li>
                                    <li> <Link to="/product/hulk">Hulk</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <h3>Extras</h3>
                                <ul className="list-unstyled">
                                    <li> <Link to="/admin/login">Admin Panel</Link></li>
                                    <li> <Link to="/footer">Footer Link</Link></li>
                                    <li> <Link to="/footer">Footer Link</Link></li>
                                    <li> <Link to="/footer">Footer Link</Link></li>
                                    <li> <Link to="/footer">Footer Link</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-sm-6 details js-pull">
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center">
                                        <div className="icon"><FontAwesomeIcon icon={faTruck} style={{color:"#ffd900"}}/></div>
                                        <div className="text">
                                            <h3>Free Shipping Worldwide</h3>
                                            <p>On orders over $200</p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="icon"><FontAwesomeIcon icon={faDollarSign} style={{color:"#ffd900"}}/></div>
                                        <div className="text">
                                            <h3>30 days money back</h3>
                                            <p>Money back guarantee</p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="icon"><FontAwesomeIcon icon={faPhoneAlt} style={{color:"#ffd900"}}/></div>
                                        <div className="text">
                                            <h3>Phone: 123-456-789</h3>
                                            <p>Contact with us</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(Footer);