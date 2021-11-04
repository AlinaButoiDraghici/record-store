import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import logo from './assets/vinyl.png';
import { auth } from "./firebase";
import { db } from "./firebase";
import { useParams } from "react-router-dom";
import Product from './Product'
import { useGlobalProvider, GlobalContext } from './GlobalContext';



function EditRecord() {
    const { productId } = useParams();
    const history = useHistory();

    const {products} = useGlobalProvider();
    const crtProduct = products[productId];

    const [album,setAlbum] = useState(crtProduct.album);
    const [artist,setArtist] = useState(crtProduct.artist);
    const [price,setPrice] = useState(crtProduct.price);
    const [image,setImage] = useState(crtProduct.image);

    

        const editRecord = async () => {
            var currentRecord = db.collection("records").doc(productId);
            console.log(currentRecord);

            return currentRecord.update({
                    album: album,
                    artist: artist,
                    image: image,
                    price: parseFloat(price),
            })
            .then(() => {
                console.log("Document successfully updated!");
                history.push('/');
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
            
           
        }


    return (
        <div className='register'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src={logo}
                />
            </Link>

            <div className='login__container'>
                <h1>Edit Record</h1>

                <form>
                    <h5>Album</h5>
                    <input type='text' value={album} onChange={e => setAlbum(e.target.value)} />

                    <h5>Artist</h5>
                    <input type='text' value={artist} onChange={e => setArtist(e.target.value)} />

                    <h5>Image link</h5>
                    <input type='url' value={image} onChange={e => setImage(e.target.value)} />

                    <h5>Price</h5>
                    <input type="number" step="any" value={price} onChange={e => setPrice(e.target.value)} />


                </form>

                
                
                <button  onClick={editRecord} className='login__signInButton'>Edit Record</button>
                
            </div>
        </div>
    )
}

export default EditRecord