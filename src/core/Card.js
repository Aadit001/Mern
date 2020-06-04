import React from 'react'
import Imagehelper from './helper/Imagehelper';

const Card = ({product,addtoCart = true,removeFromCart = false})=> {

const cartTitle = product ?  product.name : "A Photo from Pixels";
const cartDescription = product ?  product.description : "no description found as of now";
const cartPrice = product ?  product.price : "DEFAULT";



   
const showAddtoCart = (addtoCart) =>{
 return (
   addtoCart && <button
   onClick={() => {}}
   className="btn btn-block btn-outline-success mt-2 mb-2"
 >
   Add to Cart
 </button>
 ) 
};
const showremoveFromCart = (removeFromCart) =>{
  return (
    removeFromCart && <button
    onClick={() => {}}
    className="btn btn-block btn-outline-danger mt-2 mb-2"
  >
    Remove from cart
  </button>
  )
};

        return (
          <div className="card text-white bg-dark border border-info ">
            <div className="card-header lead">{cartTitle}</div>
            <div className="card-body">
             <Imagehelper product= {product}/>
              <p className="lead bg-success font-weight-normal text-wrap">
                {cartDescription}
              </p>
              <p className="btn btn-success rounded  btn-sm px-4">${cartPrice}</p>
              <div className="row">
                <div className="col-12">
                 {showAddtoCart(addtoCart )}
                </div>
                <div className="col-12">
                  {showremoveFromCart(removeFromCart )}
                </div>
              </div>
            </div>
          </div>
        );
    };
export default Card;
