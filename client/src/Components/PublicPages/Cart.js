import React, { Component } from 'react'
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserInfo } from "../../Redux/action_creators/actions";


toast.configure();


class Cart extends Component {
    // constructor(props) {
    //     super(props)
    //     this.props.dispatch(getUserInfo());
    // }

    state = {
        product: {
            name: "product 1",
            price: 400,
            quantity: 2
        },
        subTotal: 800
    }

    handleToken = async (token) => {
        const { product, subTotal } = this.state
        const { user } = this.props
        console.log(user, "user in cart frontend")
        const response = await axios.post('http://localhost:9090/payment/checkout', { token, product, user, subTotal })
        const { status } = response.data
        if (status === "success") {
            toast('Success, Check email for details', { type: 'success' })
        } else {
            toast('Something went wrong', { type: "error" })
        }
    }

    render() {
        if (!this.props.auth.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { product, subtotal } = this.state
        return (
            <div className="container">
                <table id="cart" className="table table-hover table-condensed">
                    <thead>
                        <tr>
                            <th >Product</th>
                            <th >Price</th>
                            <th >Quantity</th>
                            <th className="text-center">Subtotal</th>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-th="Product">
                                <div className="row">
                                    <div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." className="img-responsive" /></div>
                                    <div className="col-sm-10">
                                        <h4 className="nomargin">{product.name}</h4>
                                        <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </td>
                            <td data-th="Price">{product.price}</td>
                            <td data-th="Quantity">
                                <input type="number" className="form-control text-center" value={product.quantity} />
                            </td>
                            <td data-th="Subtotal" className="text-center">{subtotal}</td>
                            <td className="actions" data-th="">
                                <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
                            <td colSpan="2" className="hidden-xs"></td>
                            <td className="hidden-xs text-center"><strong>Total {subtotal}</strong></td>
                            <td><a href="#" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right">
                                <StripeCheckout
                                    stripeKey="pk_test_e0CmhcAm3715JsIVZSwCK0Cl00u6U8GNww"
                                    token={this.handleToken}
                                    billingAddress
                                    shippingAddress
                                    amount={subtotal * 100}
                                    name={product.name}
                                    currency="INR" />
                            </i></a></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("state auth here", state.auth)
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Cart)