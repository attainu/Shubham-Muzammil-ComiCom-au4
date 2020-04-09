import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUserInfo } from "../../Redux/action_creators/actions";
import '../../styles/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons"

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.props.dispatch(getUserInfo());
    }

    render() {
        return (
            <div className="category-page">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item text-uppercase"> <a href="index.html" className="text-primary">Home</a></li>
                        <li className="breadcrumb-item active text-uppercase">Cameras</li>
                    </ol>
                </div>
                <section className="products p-t-small">
                    <div className="container">
                        <header>
                            <div className="row d-flex align-items-center">
                                <div className="col-md-6">
                                    <h1 className="heading-line">Cameras</h1>
                                </div>
                                <div className="col-md-6">
                                    <div className="filters d-flex justify-content-end">
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
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className="my-5">
                            <div className="row">
                                {this.props.product && this.props.product.map((data, index) => {
                                    return (
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="item text-center">
                                                <div className="product-image">
                                                    <img src={data.imgURL.main} alt="comic" />
                                                    <div className="overlay">
                                                        <a href='/s' className="wishlist"><FontAwesomeIcon icon={faHeart} style={{ color: "#000" }} /></a>
                                                        <ul className="list-unstyled">
                                                            <li><a href="detail.html" className="btn btn-unique">View Detail</a></li>
                                                            <li><a href='/s' className="btn btn-dark">Add To Cart</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <a href="detail.html" className="item-name">
                                                    <h4>{data.name}</h4>
                                                </a>

                                                <ul className="price list-inline">
                                                    <li className="list-inline-item"> <span className="price-old">{data.regularPrice}</span></li>
                                                    <li className="list-inline-item"> <span className="price-new">{data.discountedPrice}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="pagination pagination-custom mt-5">
                        <nav aria-label="...">
                            <ul className="pagination pagination-sm d-flex justify-content-between">
                                <li className="page-item disabled"><a href='/s' tabindex="-1" className="page-link">Previous</a></li>
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
                    </div>
                </section>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state here in profile", state.product)
    return {
        product: state.product.displayProducts
    }
}

export default connect(mapStateToProps)(ProductList);