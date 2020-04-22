import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteItemFromWishList, addComicToCart } from "../../Redux/action_creators/featureActions";


class WishList extends Component {
    deleteItem = (id) => {
        this.props.deleteItemFromWishList(id)
    }
    addToCart = (i) => {
        this.props.addToCart(this.props.wishList[i], this.props.userEmail)
        this.deleteItem(i)
    }

    render() {
        const {wishList} = this.props
        if(!wishList.length) {
            return (<p className="text-center"> <h3>No products in WishList </h3></p>)
        }
        return (
            <div className="container">
                <table id="cart" className="table table-hover table-condensed">
                    <thead>
                        <tr>
                            <th >Product</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishList ? wishList.map((product, index) => {
                           return (
                               <tr key = {index}>
                                <td data-th="Product">
                                    <div className="row">
                                        <div className="col-sm-2 hidden-xs"><img style={{width: '100px', height: '100px'}} src={product.imgURL.main} alt="main poster" className="img-responsive"/></div>
                                        <div className="col-sm-10">
                                            <h4 className="nomargin">{product.name}</h4>
                                            <p>{product.description}</p>
                                        </div>
                                    </div>
                                </td>
                                {/* <td data-th="Add to cart">	</td> */}
                                <td className="actions" data-th="">
                                    <div className="row">
                                        <div className="col-sm-3 m-3">
                                            <button className="btn btn-primary btn-sm" onClick={() => this.addToCart(index)}>Add to Cart</button>
                                        </div>
                                        <div className="col-sm-2">
                                            <button className="btn btn-danger btn-sm" onClick={() => this.deleteItem(index)}><i className="fa fa-trash-o"></i></button>
                                        </div>                                    
                                    </div>
                                </td>
                            </tr>)
                        })   : <p>No products in WishList</p>}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user : state.auth.user,
        auth : state.auth.isAuthenticated,
        wishList  : state.feature.wishlist
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItemFromWishList : (id) =>dispatch(deleteItemFromWishList(id)),
        addToCart : (product, userEmail) => dispatch(addComicToCart(product, userEmail)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WishList)