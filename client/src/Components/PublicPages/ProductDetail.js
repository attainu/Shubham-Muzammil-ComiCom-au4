import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getProductDetail, addComicToCart } from "../../Redux/action_creators/productActions";
import '../../styles/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons"


class ProductDetail extends Component {
    constructor(props) {
        super(props)
        let id = this.props.match.params.id;
        this.props.getProductDetail(id);
    }

    addToCart = () => {
        this.props.addToCart(this.props.detail)
    }

    render() {
        let { detail } = this.props
        return (
            <div className="details-page">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item text-uppercase"> <Link to='/' className="text-primary">Home</Link></li>
                        <li className="breadcrumb-item text-uppercase"> Detail</li>
                        <li className="breadcrumb-item active text-uppercase">{detail.name}</li>
                    </ol>
                </div>
                <section className="item-details p-t-small p-b-small">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div data-slider-id="1" className="owl-carousel item-slider">
                                    <div className="item">
                                        <img src={detail.imgURL && detail.imgURL.main} alt="poster" />
                                    </div>
                                    {detail.imgURL && detail.imgURL.posters.map((data, index)=>{
                                        return(
                                            <div className="item" key={index}>
                                                <img src={data} alt="poster" />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div data-slider-id="1" className="owl-thumbs">
                                    <button className="owl-thumb-item">
                                        <img src={detail.imgURL && detail.imgURL.main} alt="thumb" />
                                    </button>
                                    {detail.imgURL && detail.imgURL.posters.map((data, index)=>{
                                        return(
                                            <button className="owl-thumb-item" key={index}>
                                                <img src={data} alt="thumb" />
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h1 className="h2">{detail.name}</h1>
                                <div className="price d-flex align-items-center"><del className="mr-3">Rs. {detail.regularPrice}</del>  Rs. {detail.discountedPrice}</div>
                                <div className="description">
                                    <p>{detail.description}</p>
                                </div>
                                <div className="model">
                                    <ul className="list-unstyled">
                                        <li><span className="text-uppercase">Characters: </span>{detail.characters && detail.characters.join(" , ")}</li>
                                        <li><span className="text-uppercase">Category: </span>{detail.category && detail.category.join(" , ")}</li>
                                        <li><span className="text-uppercase">Availability: </span>{detail.itemsInStock>0 ? "In Stock" : "Out of Stock"}</li>
                                    </ul>
                                </div>
                                <>
                                    <div className="row d-flex justify-content-between">
                                        <div className="col-lg-6">
                                            <ul className="product-quantity list-inline">
                                                <li className="list-inline-item">
                                                    <h3 className="h5">Quantity</h3>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="counter d-flex align-items-center justify-content-start">
                                                        <div className="minus-btn"><FontAwesomeIcon icon={faArrowLeft} style={{color:"#ffd900"}}/></div>
                                                        <span className="quantity">1</span>
                                                        <div className="plus-btn"><FontAwesomeIcon icon={faArrowRight} style={{color:"#ffd900"}}/></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                        </div>
                                    </div>
                                    <div className="CTAs">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <button onClick={this.addToCart} className="btn btn-unique">Add To Cart</button>
                                            </li>
                                            <li className="list-inline-item"><a href="/g" className="btn btn-dark">Add to wishlist<FontAwesomeIcon icon={faHeart} style={{color:"#ffd900"}}/></a></li>
                                        </ul>
                                    </div>
                                </>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state here in profile", state)
    return {
        detail: state.product.displayProductsDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductDetail: (id) => dispatch(getProductDetail(id)),
        addToCart : (product) => dispatch(addComicToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);