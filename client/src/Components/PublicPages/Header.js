import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import '../../styles/style.css'
import { logoutUser } from '../../Redux/action_creators/actions';
import { getProducts} from "../../Redux/action_creators/productActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons"

let Background1 = `https://res.cloudinary.com/comicom/image/upload/c_scale,h_450,w_350/v1586205284/Pages%20Image/webofsm2020001_cov_e5kalf.jpg`
class Header extends Component {
	state= {
		query: '',
		redirect: false
	}
	
	handleChange = (e) => {
		this.setState({
			query : e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const {query} = this.state
		if(query && query !== ' '){
			this.props.getProducts(query)
			this.setState({redirect : true})
		}
	}

	renderRedirect = () => {
		const {query, redirect} = this.state
		if (redirect) {
		  return <Redirect to={`/product/${query}`} />
		}
	}

	render() {
		let {wishlist, cartItems} = this.props.feature
		return (
			<>
				{this.renderRedirect()}
				<div className="top-bar d-none d-sm-block">
					<div className="container">
						<div className="row">
							<div className="col-sm-4 col-md-3">
							</div>
							<div className="col-sm-8 col-md-9 text-right account-details">
								<ul className="list-inline">
									<li className="list-inline-item"> <a href="/a">My Account</a></li>
									<li className="list-inline-item"><Link to="/cart">Order History</Link></li>
									{ !this.props.user.isAuthenticated ?
										<li className="list-inline-item"><Link to="/signin">Login</Link></li>
										:
										<li className="list-inline-item"><button onClick={this.props.logout} className='btn btn-logout'>Logout</button></li>
									}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<nav className="navbar navbar-expand-lg px-lg-0">
					<div className="container position-relative">
						<Link to="/" className="navbar-brand"> <img
							src="https://res.cloudinary.com/comicom/image/upload/v1586170469/logo_aytppa.png" alt="logo" />
						</Link>
						<button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
							className="navbar-toggler navbar-toggler-right">Menu <i className="fa fa-bars"></i></button>
						<div id="navbarSupportedContent" className="collapse navbar-collapse">
							<div className="navbar-nav ml-auto align-items-lg-center">
								<div className="nav-item">
									<Link to="/" className="nav-link">Home</Link>
								</div>
								<div className="nav-item dropdown">
									<a id="navbarCategory" data-target="#" href="index.html"
									data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
									className="nav-link">Category<i className="fa fa-caret-down"></i></a>
									<div aria-labelledby="navbarCategory" className="dropdown-menu">
										<Link to="/product/indian" className="dropdown-item">Indian</Link>
										<Link to="/product/western" className="dropdown-item">Western</Link>
										<Link to="/product/manga" className="dropdown-item">Manga</Link>
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
															<li className="megamenu-list-item"><Link to="/product/iron man"
																className="megamenu-list-link">Ironman </Link>
															</li>
															<li className="megamenu-list-item"><Link to="/product/captain america"
																className="megamenu-list-link">Captain America </Link>
															</li>
															<li className="megamenu-list-item"><Link to="/product/spiderman"
																className="megamenu-list-link">Spiderman </Link>
															</li>
															<li className="megamenu-list-item"><Link to="/product/hulk"
																className="megamenu-list-link">Hulk </Link>
															</li>
														</ul>
														<h6 className="heading-line">DC</h6>
														<ul className="megamenu-list list-unstyled">
															<li className="megamenu-list-item"><Link to="/product/batman"
																className="megamenu-list-link">Batman </Link>
															</li>
															<li className="megamenu-list-item"><Link to="/product/superman"
																className="megamenu-list-link">Superman </Link>
															</li>
															<li className="megamenu-list-item"><Link to="/product/aquaman"
																className="megamenu-list-link">Aquaman </Link>
															</li>
															{/* <li className="megamenu-list-item"><a href="detail.html"
																className="megamenu-list-link">Product detail </a>
															</li> */}
														</ul>
													</div>
													<div className="col-lg-6">

														<h6 className="heading-line">Diamond</h6>
														<ul className="megamenu-list list-unstyled">
															<li className="megamenu-list-item"><Link to="/product/chacha choudhary"
																className="megamenu-list-link">Chacha Choudary </Link>
															</li>
															<li className="megamenu-list-item"><Link to="/product/pinky"
																className="megamenu-list-link">Pinky </Link>
															</li>
															<li className="megamenu-list-item"><Link to="/product/billu"
																className="megamenu-list-link">Billu </Link>
															</li>
														</ul>
														<h6 className="heading-line">Pages</h6>
														<ul className="megamenu-list list-unstyled">
															<li className="megamenu-list-item"><Link to="/about"
																className="megamenu-list-link">About Us </Link>
															</li>
															<li className="megamenu-list-item"><Link to="/contact"
																className="megamenu-list-link">Contact </Link>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* <div className="nav-item"><a href="contact.html" className="nav-link">Latest Comics</a></div>
								<div className="nav-item"><a href="contact.html" className="nav-link">Contact Us</a></div> */}
								<div className="nav-item" >
									<form onSubmit={this.handleSubmit} className="form-inline input-group">
									<input type="text" onChange={this.handleChange} className="form-control mx-sm-3" placeholder="Search" />
									<div className="input-group-append">
										<button type="submit" formAction='' className="pr-1">
										<FontAwesomeIcon icon={faSearch} style={{color:"#ffd900"}}/>
										</button>
									</div>
									</form>
								</div>
			
								<div className="nav-item">
									<ul className="list-inline">
										<li className="list-inline-item">
											<Link  to="/wishlist" className="nav-link">
												<div className="icon search"><FontAwesomeIcon icon={faHeart} style={{color:"#ffd900"}}/><sup style={{color:"#ffd900"}}>{wishlist.length}</sup>
												</div>
											</Link>
										</li>
										<li className="list-inline-item">
											<Link to='/cart' className="nav-link">
												<div className="icon cart"><FontAwesomeIcon icon={faShoppingCart} style={{color:"#000000"}}/><sup style={{color:"#000000"}}>{cartItems.length}</sup>
												</div>
											</Link>
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
		feature: state.feature,
		user: state.auth
	}
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (tag) => dispatch(getProducts(tag)),
        logout: () => dispatch(logoutUser()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);