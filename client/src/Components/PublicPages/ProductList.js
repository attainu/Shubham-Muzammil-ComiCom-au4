import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getProducts } from "../../Redux/action_creators/productActions";
import { addComicToCart, addComicToWishlist } from "../../Redux/action_creators/featureActions";
import '../../styles/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

class ProductList extends Component {
    constructor(props) {
        super(props)
        let tag = this.props.match.params.tag;
        this.props.getProducts(tag);
    }

    addToCart = (i) => {
        this.props.addToCart(this.props.product[i], this.props.userEmail)
    }

    addToWishlist = (i) => {
        this.props.addToWishlist(this.props.product[i], this.props.userEmail)
    }

    componentDidUpdate() {
        let tag = this.props.match.params.tag;
        this.props.getProducts(tag)
    }
    render() {
        return (
            <div className="category-page">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item text-uppercase"> <Link to="/" className="text-primary">Home</Link></li>
                        <li className="breadcrumb-item active text-uppercase">{this.props.match.params.tag}</li>
                    </ol>
                </div>
                <section className="products p-t-small">
                    <div className="container">
                        <header>
                            <div className="row d-flex align-items-center">
                                <div className="col-md-6">
                                    <h1 className="heading-line text-uppercase">{this.props.match.params.tag}</h1>
                                </div>
                                <div className="col-md-6">
                                    {/* <div className="filters d-flex justify-content-end">
                                        <select title="Brand" name="brand" className="filter-branselect form-control">
                                            <option value="">Brand: Nikon</option>
                                            <option value="">Brand: Canon</option>
                                            <option value="">Brand: Sample</option>
                                            <option value="">Brand: Sample</option>
                                        </select>
                                        <select title="Alphabetically A-Z" name="alphabetically" className="filter-nameselect form-control">
                                            <option value="">Alphabetically A-Z</option>
                                            <option value="">Alphabetically Z-A</option>
                                        </select>
                                    </div> */}
                                </div>
                            </div>
                        </header>
                        <div className="my-5">
                            <div className="row">
                                {this.props.product.length>0 ? this.props.product.map((data, index) => {
                                    return (
                                        <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                                            <div className="item text-center">
                                                <div className="product-image">
                                                    <img src={data.imgURL.main} alt="comic" />
                                                    <div className="overlay">
                                                        <button onClick={() => this.addToWishlist(index)} className="wishlist"><FontAwesomeIcon icon={faHeart} style={{ color: "#000" }} /></button>
                                                        <ul className="list-unstyled">
                                                            <li><Link to={`/product/detail/${data._id}`} className="btn btn-unique">View Detail</Link></li>
                                                            <li><div onClick={() => this.addToCart(index)} className="btn btn-dark">Add To Cart</div></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <Link to={`/product/detail/${data._id}`} className="item-name">
                                                    <h4>{data.name}</h4>
                                                </Link>

                                                <ul className="price list-inline">
                                                    <li className="list-inline-item"> <span className="price-old">{data.regularPrice}</span></li>
                                                    <li className="list-inline-item"> <span className="price-new">{data.discountedPrice}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                }) : 
                                    <h3 className="align-items-center">No Result</h3>
                                }
                            </div>
                        </div>
                    </div>
                    {/* <div className="pagination pagination-custom mt-5">
                        <nav aria-label="...">
                            <ul className="pagination pagination-sm d-flex justify-content-between">
                                <li className="page-item disabled"><a href='/s' className="page-link">Previous</a></li>
                                <li>
                                    <ul className="pages list-inline">
                                        <li className="page-item active list-inline-item"><a href='/s' className="page-link">1</a></li>
                                        <li className="page-item list-inline-item"><a href='/s' className="page-link">2</a></li>
                                        <li className="page-item list-inline-item"><a href='/s' className="page-link">3</a></li>
                                    </ul>
                                </li>
                                <li className="page-item"><a href='/s' className="page-link">Next</a></li>
                            </ul>
                        </nav>
                    </div> */}
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product.displayProducts,
        userEmail : state.auth.user.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : (product, userEmail) => dispatch(addComicToCart(product, userEmail)),
        addToWishlist : (product, userEmail) => dispatch(addComicToWishlist(product, userEmail)),
        getProducts: (tag) => dispatch(getProducts(tag))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);