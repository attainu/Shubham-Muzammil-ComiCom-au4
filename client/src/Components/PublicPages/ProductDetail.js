import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUserInfo } from "../../Redux/action_creators/actions";
import '../../styles/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons"


class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.props.dispatch(getUserInfo());
    }

    render() {
        let { detail } = this.props
        return (
            <div className="details-page">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item text-uppercase"> <a href="index.html" className="text-primary">Home</a></li>
                        <li className="breadcrumb-item text-uppercase"> <a href="category.html" className="text-primary">Lorem</a></li>
                        <li className="breadcrumb-item active text-uppercase">Detail</li>
                    </ol>
                </div>
                <section className="item-details p-t-small p-b-small">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div data-slider-id="1" className="owl-carousel item-slider">
                                    <div className="item">
                                        <img src={detail.imgURL.main} alt="poster" />
                                    </div>
                                    {detail.imgURL.posters.map((data, index)=>{
                                        return(
                                            <div className="item">
                                                <img src={data} alt="poster" />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div data-slider-id="1" className="owl-thumbs">
                                    <button className="owl-thumb-item">
                                        <img src={detail.imgURL.main} alt="thumb" />
                                    </button>
                                    {detail.imgURL.posters.map((data, index)=>{
                                        return(
                                            <button className="owl-thumb-item">
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
                                        <li><span className="text-uppercase">Characters: </span>{detail.characters.join(" , ")}</li>
                                        <li><span className="text-uppercase">Category: </span>{detail.category.join(" , ")}</li>
                                        <li><span className="text-uppercase">Availability: </span>{detail.itemsInStock>0 ? "In Stock" : "Out of Stock"}</li>
                                    </ul>
                                </div>
                                <form action="#" method="get">
                                    <div className="row d-flex justify-content-between">
                                        <div className="col-lg-6">
                                            <ul className="product-quantity list-inline">
                                                <li className="list-inline-item">
                                                    <h3 className="h5">Quantity</h3>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="counter d-flex align-items-center justify-content-start">
                                                        <div className="minus-btn"><FontAwesomeIcon icon={faArrowLeft} style={{color:"#ffd900"}}/></div>
                                                        <input type="text" value="1" className="quantity" />
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
                                                <button href="#" className="btn btn-unique">Add To Cart</button>
                                            </li>
                                            <li className="list-inline-item"><a href="/g" className="btn btn-dark">Add to wishlist<FontAwesomeIcon icon={faHeart} style={{color:"#ffd900"}}/></a></li>
                                        </ul>
                                    </div>
                                </form>
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

export default connect(mapStateToProps)(ProductDetail);