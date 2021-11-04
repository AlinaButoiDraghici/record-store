import "./Product.css";
import React, { useState, useEffect } from 'react';
function BasketProduct({ product }) {
    const {ID, album, artist, image, price} = product;
    return (
        <div className="product">
          {/* <img src={image} alt="" /> */}
          <div className="product__info">
            <div className="product__title">
            <p>{album}</p>
            </div>
            {/* <p>{album}</p> */}
            <p >{artist}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
          </div>
    
          <img src={image=='' ? 'https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png' : image} alt="" />
          </div>
    );
}

export default BasketProduct;