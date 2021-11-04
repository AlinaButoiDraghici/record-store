
import "./CheckoutProduct.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Product from './Product';
import "./Product.css";
import logo from './assets/vinyl.png';
import { auth, db } from "./firebase";
import React, { useState, useEffect } from 'react';

function Checkout() {
  //,user
  const [{ basket }, dispatch] = useStateValue();
  function GetCurrentUser(){
    const [user, setUser]=useState(null);
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                db.collection('users').doc(user.uid).get().then(snapshot=>{
                    setUser(snapshot.data());
                })
            }
            else{
                setUser(null);
            }
        })
    },[])
    return user;
}

const user = GetCurrentUser();
console.log('-------');
console.log(basket);

  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* <img
          className="checkout__ad"
          src={logo}
          alt=""
        /> */}

        <div>
          <h3>Hello, {user?.username}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(product => (
            <CheckoutProduct key = {product.ID}
            product = {product}
              // id={item.ID}
              // title={item.title}
              // image={item.image}
              // price={item.price}
              // rating={item.rating}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;