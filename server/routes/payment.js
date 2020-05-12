import {Router} from 'express'
const router = Router();
import {Orders, Users} from '../models/index'
const stripe = require("stripe")("sk_test_CqyxBnAz2fE8UjfMCUQGs5Ga00RXl5TJPi");
import { v4 as uuid } from 'uuid';

router.get("/", (req, res) => {
    res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});
  
router.post("/checkout", async (req, res) => {
    let error;
    let status;
    try {
      const { products, token, subTotal, user } = req.body;
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
    });
    //console.log("user in payment backend", user)
  
    const idempotencyKey = uuid();
    const charge = await stripe.charges.create(
        {
          amount: subTotal,
          currency: "inr",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the Comic books from comicom`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotencyKey
        }
    );
    //console.log("Charge:", { charge });
    status = "success";
    // console.log(user, "user from session")
    // console.log(products)
    const newOrder = {userId : user.email, totalPrice : subTotal, products}
        const orderResponse = await Orders.create(newOrder)
        const deleteResponse = await Users.findOneAndUpdate({email : user.email}, {cartItems : []})
        const userResponse = await Users.findOneAndUpdate({email : user.email}, { $push : {orders : newOrder}})
        // console.log(orderResponse, userResponse, deleteResponse)
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
  
    res.json({ error, status });
});
  

export default router;