
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { db, auth } from './firebase';
import Home from './Home';
import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react';


//id
function Product({ product }) {
  const history = useHistory();
  const {ID, album, artist, image, price} = product;
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
  
  const [{ basket }, dispatch] = useStateValue();
    //const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            //ID: ID,
            product: product,
            //count:
            // artist: artist,
            // album: album,
            // image: image,
            // price: price,
          },
        });
        console.log("BASKET");
        console.log(basket);
      };

      const removeProduct = async () => {
       
        try {
          var currentRecord = db.collection("records").doc(ID);
          currentRecord.delete();
        // var query =  db.collection('records').
        // where('album','==',album);
        // query.get().then(function (querySnapshot) {
        //   querySnapshot.forEach(function (doc) {
        //     db.collection('records').doc(doc.id).delete();
            
        //     // dispatch({
        //     //   type: "DELETE ELEMENT",
        //     //   item: null,
        //     // });
        //   });
        // });
        
      } catch(err) {
        return alert(err.message);
      }
    }


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

      {(user!=null && user.admin==true) ?
      <div className="admin__buttons">
      <Link to=
      {`/editRecord/${ID}`}>
        <div className="admin__buttons">
          <button>Edit</button>
        </div >
      </Link>
      <button onClick={removeProduct}>Remove</button>
      </div>
      :
      <button onClick={addToBasket}>Add to Basket</button>
      }
    </div>
  );
}

export default Product;