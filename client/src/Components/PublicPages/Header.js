import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../styles/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons"

let Background1 = `https://res.cloudinary.com/comicom/image/upload/c_scale,h_450,w_350/v1586205284/Pages%20Image/webofsm2020001_cov_e5kalf.jpg`
class Header extends Component {

	render() {
		let {wishlist, cartItems} = this.props.feature
		return (
			<>
				<div className="top-bar d-none d-sm-block">
					<div className="container">
						<div className="row">
							<div className="col-sm-4 col-md-3">
							</div>
							<div className="col-sm-8 col-md-9 text-right account-details">
								<ul className="list-inline">
									<li className="list-inline-item"> <a href="/a">My Account</a></li>
									<li className="list-inline-item"><a href="/a">Order History</a></li>
									<li className="list-inline-item"><a href="/a">Login</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<nav className="navbar navbar-expand-lg px-lg-0">
					<div className="container position-relative">
						<a href="index.html" className="navbar-brand"> <img
							src="https://res.cloudinary.com/comicom/image/upload/v1586170469/logo_aytppa.png" alt="logo" />
						</a>
						<button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
							className="navbar-toggler navbar-toggler-right">Menu <i className="fa fa-bars"></i></button>
						<div id="navbarSupportedContent" className="collapse navbar-collapse">
							<div className="navbar-nav ml-auto align-items-lg-center">
								<div className="nav-item">
									<a href="contact.html" className="nav-link">Home</a>
								</div>
								<div className="nav-item dropdown">
									<a id="navbarCategory" data-target="#" href="index.html"
									data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
									className="nav-link">Category<i className="fa fa-caret-down"></i></a>
									<div aria-labelledby="navbarCategory" className="dropdown-menu">
										<a href="category.html" className="dropdown-item">Indian</a>
										<a href="category-left.html" className="dropdown-item">Western</a>
										<a href="category-right.html" className="dropdown-item">Manga</a>
									</div>
								</div>
								<div className="nav-item">
									<a href="/a" data-toggle="dropdown" className="nav-link">Charaters<i className="fa fa-caret-down"></i></a>
									<div className="dropdown-menu megamenu">
										<div className="row">
											<div className="col-lg-4 d-none d-lg-block">
												<div style={{backgroundImage: `url(${Background1})`}} className="w-100 h-100"></div>
											</div>
											<div className="col-lg-8">
												<div className="row px-lg-3 py-lg-5">
													<div className="col-lg-6">
														<h6 className="heading-line">Marvel</h6>
														<ul className="megamenu-list list-unstyled">
															<li className="megamenu-list-item"><a href="index.html"
																className="megamenu-list-link">Ironman </a>
															</li>
															<li className="megamenu-list-item"><a href="index2.html"
																className="megamenu-list-link">Captain America </a>
															</li>
															<li className="megamenu-list-item"><a href="index.html"
																className="megamenu-list-link">Spiderman </a>
															</li>
															<li className="megamenu-list-item"><a href="index2.html"
																className="megamenu-list-link">Hulk </a>
															</li>
														</ul>
														<h6 className="heading-line">DC</h6>
														<ul className="megamenu-list list-unstyled">
															<li className="megamenu-list-item"><a href="category.html"
																className="megamenu-list-link">Batman </a>
															</li>
															<li className="megamenu-list-item"><a href="category-right.html"
																className="megamenu-list-link">Superman </a>
															</li>
															<li className="megamenu-list-item"><a href="category-left.html"
																className="megamenu-list-link">Aquaman </a>
															</li>
															<li className="megamenu-list-item"><a href="detail.html"
																className="megamenu-list-link">Product detail </a>
															</li>
														</ul>
													</div>
													<div className="col-lg-6">

														<h6 className="heading-line">Diamond</h6>
														<ul className="megamenu-list list-unstyled">
															<li className="megamenu-list-item"><a href="cart.html"
																className="megamenu-list-link">Chacha Choudary </a>
															</li>
															<li className="megamenu-list-item"><a href="cart.html"
																className="megamenu-list-link">Pinky </a>
															</li>
															<li className="megamenu-list-item"><a href="cart.html"
																className="megamenu-list-link">Billu </a>
															</li>
														</ul>
														<h6 className="heading-line">Pages</h6>
														<ul className="megamenu-list list-unstyled">
															<li className="megamenu-list-item"><a href="text.html"
																className="megamenu-list-link">About Us </a>
															</li>
															<li className="megamenu-list-item"><a href="contact.html"
																className="megamenu-list-link">Contact </a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="nav-item"><a href="contact.html" className="nav-link">Latest Comics</a></div>
								<div className="nav-item"><a href="contact.html" className="nav-link">Contact Us</a></div>
								<div className="nav-item">
									<ul className="list-inline">
										<li className="list-inline-item">
											<a id="search" href="/a" className="nav-link">
												<div className="icon search"><FontAwesomeIcon icon={faHeart} style={{color:"#ffd900"}}/><sup style={{color:"#ffd900"}}>{wishlist.length}</sup>
												</div>
											</a>
										</li>
										<li className="list-inline-item">
											<a href="cart.html" className="nav-link">
												<div className="icon cart"><FontAwesomeIcon icon={faShoppingCart} style={{color:"#000000"}}/><sup style={{color:"#000000"}}>{cartItems.length}</sup>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		feature: state.feature
	}
}

export default connect(mapStateToProps)(Header);