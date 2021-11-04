import React from 'react'
import Product from './Product'

//export 
const Products = ({products}) => {

    // console.log(products);
    
    return products.map((product)=>(
        <Product key = {product.ID} product={product}
        // {product.ID} artist={product.artist}
        // album={product.album}
        // //title="Arctic Monkeys-AM"
        // price={product.price}
        // //rating={5}
        // image={product.image}
        />
    ));
}

export {Products}