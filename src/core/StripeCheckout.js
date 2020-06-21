import React, {useEffect,useState} from 'react';
import {isAuthenticated} from '../auth/helper';
import {cartEmpty,loadCart} from './helper/cartHelper';
import { Link } from 'react-router-dom';
import StripeCheckoutButton from 'react-stripe-checkout';
import {API} from "../backend";
import {createOrder} from "./helper/orderHelper"

const  StripeCheckout = ({products, setReload = f => f ,reload= undefined})=> {

const [data, setData] = useState({
    loading:false,
    success:false,
    error : "",
    address:""
});

const token = isAuthenticated() && isAuthenticated().token
const userId = isAuthenticated() && isAuthenticated().user._id

const getFinalAmount= () => {
let amount=0;
products.map(p =>{
amount = amount + p.price ;
});
return amount;
};

const makePayment = (token) =>{
   const body = {
       token,
       products
   }
   const headers = {
       "Content-Type":"application/json"
   }
   return fetch(`${API}/stripepayment`,{
       method:"POST",
       headers,
       body:JSON.stringify(body)
   }).then(response =>{
console.log(response);
//we can call further methods here
const {status} = response;
console.log("STATUS",status);
cartEmpty()
  }).catch(error => console.log(error));
};

const showStripeButton =() =>{
return isAuthenticated() ? (
    <StripeCheckoutButton
    stripeKey="pk_test_51Gs0hzBmeoKgJhNub9YMbNSPPzV8Hr6BGW4QkbxIEJc4t50K0fK34hNs58T3cpuBYkhX4i7D4AhmrnIWJioPlPFU00K9dDbPVQ"
    token={makePayment}
    amount={getFinalAmount()*100}
    name="Buy T-shirts"
    shippingAddress
    billingAddress
    >
    <button className="btn btn-success">Pay with Stripe</button>
    </StripeCheckoutButton>
) : (
  <Link to ="/signin">  
  <button className="btn btn-warning">Signin</button>
  </Link>
)
};

    return (
        <div>
        <h3 className="text-white">Your Total Amount is:{getFinalAmount()}</h3>
       {showStripeButton()}
        </div>
    )
}

export default StripeCheckout;