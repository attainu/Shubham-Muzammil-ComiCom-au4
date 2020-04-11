import React, { Component } from 'react'
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from 'react-redux';
import { getUserInfo } from "../Redux/action_creators/actions";


toast.configure();

//fetch cart products from redux


class Cart extends Component {
    constructor(props) {
        super(props)
        this.props.dispatch(getUserInfo());
    }

    state = {
        products: [], 
        subTotal : null
    }
    async componentDidMount() {
        await this.updateState()
    }

    updateState = () => {
        const {cart} = this.props
        this.setState({
            products : cart,
        })
    }
    calculateTotal = () => {
        const {products, subTotal} = this.state
        console.log(products)
        const total = products.reduce((acc, cv) => {
            return acc + (cv.discountedPrice * cv.quantity)
        }, 0)
        if(subTotal !== total) {
            this.setState({
                subTotal : total
            })
        }
        return total
    }


    handleQuantity = (id, e) => {
        const {products} = this.state
        console.log("input number value", e.target.value)
        if(e.target.value == 0 ){
            this.deleteItem(id)
        }else {
            products[id].quantity = e.target.value
        }
        this.setState({
            products
        }) 
    }

    deleteItem = (id) => {
        const {products} = this.state
        products.splice(id, 1)
        this.setState({
            products
        })
    }

    handleToken = async (token) => {
        const {products, subTotal} = this.state
        const {user} = this.props
        const response = await axios.post('http://localhost:9090/payment/checkout', {token, products, user, subTotal})
        const {status} = response.data
        if(status === "success") {
            toast('Success, Check email for details', {type: 'success'})
        }else {
            toast('Something went wrong', {type : "error"})
        }
    }

    render() {
        const {products, subTotal} = this.state
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
                        {products ? products.map((product, index) => {
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
                            <td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
                            <td colSpan="2" className="hidden-xs"></td>
                            <td className="hidden-xs text-center"><strong>Total {this.calculateTotal()}</strong></td>
                            <td><a href="#" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right">
                                <StripeCheckout
                                stripeKey="pk_test_e0CmhcAm3715JsIVZSwCK0Cl00u6U8GNww"
                                token={this.handleToken}
                                billingAddress
                                shippingAddress
                                amount={subTotal * 100}
                                name={products[0].name}
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
    console.log(state, " state in cart")
    return {
        user : state.auth.user,
        cart  : state.feature.cartItems
    }
}
export default connect(mapStateToProps)(Cart)