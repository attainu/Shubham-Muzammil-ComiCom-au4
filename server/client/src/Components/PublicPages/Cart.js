import React, { Component } from 'react'
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from 'react-redux';
import { deleteItemFromCart, handleCartQuantity, clearItemFromCart } from "../../Redux/action_creators/featureActions";
import { Link } from 'react-router-dom';


toast.configure();

//fetch cart products from redux


class Cart extends Component {

    handleQuantity = (id, e) => {
        this.props.handleQuantity(id, e.target.value)
    }

    deleteItem = (id) => {
        this.props.deleteItem(id)
    }

    handleToken = async (token) => {
        // cart item clear
        const {user, cart} = this.props
        const subTotal = cart.reduce((acc, cv) => {
            return acc + (cv.discountedPrice * cv.quantity)
        }, 0)
        let products = cart
        const response = await axios.post('http://localhost:9090/payment/checkout', {token, products, user, subTotal})
        const {status} = response.data
        if(status === "success") {
            this.props.clearCart()
            toast('Success, Check email for details', {type: 'success'})
        }else {
            toast('Something went wrong', {type : "error"})
        }
    }

    render() {
        const {cart, auth} = this.props
        const total = cart.reduce((acc, cv) => {
            return acc + (cv.discountedPrice * cv.quantity)
        }, 0)
        return (
            <div className="container">
                <table id="cart" className="table table-hover table-condensed">
                    <thead>
                        <tr>
                            <th >Product</th>
                            <th >Price</th>
                            <th >Quantity</th>
                            <th  className="text-center">Subtotal</th>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart ? cart.map((product, index) => {
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
                                <td data-th="Price">{product.discountedPrice}</td>
                                <td data-th="Quantity">
                                    <input type="number" onChange={(e) => {this.handleQuantity(index, e)}} className="form-control text-center" value={product.quantity} />
                                </td>
                                <td data-th="Subtotal" className="text-center">{product.discountedPrice * product.quantity}</td>
                                <td className="actions" data-th="">
                                    <button className="btn btn-danger btn-sm" onClick={() => this.deleteItem(index)}><i className="fa fa-trash-o"></i></button>								
                                </td>
                            </tr>)
                        })   : <p>No products in cart</p>}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><Link to="/product/all" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</Link></td>
                            <td colSpan="2" className="hidden-xs"></td>
                            <td className="hidden-xs text-center"><strong>Total {total }</strong></td>
                            {auth ? 
                            <td><div className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right">
                                <StripeCheckout
                                stripeKey="pk_test_e0CmhcAm3715JsIVZSwCK0Cl00u6U8GNww"
                                token={this.handleToken}
                                billingAddress
                                shippingAddress
                                amount={total * 100}
                                name={"Comicom order"}
                                currency="INR" />
                            </i></div></td> : <td><Link to='/signin'><button className="btn btn-dark">Login</button></Link></td>}
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user : state.auth.user,
        auth : state.auth.isAuthenticated,
        cart  : state.feature.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleQuantity : (id, val) => dispatch(handleCartQuantity(id, val)),
        deleteItem : (id) =>dispatch(deleteItemFromCart(id)),
        clearCart : () =>dispatch(clearItemFromCart())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)