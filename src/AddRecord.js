import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import logo from './assets/vinyl.png';
import { auth } from "./firebase";
import { db } from "./firebase";

import { useGlobalProvider } from './GlobalContext';


function AddRecord() {
    const history = useHistory();
    const [album,setAlbum] = useState('');
    const [artist,setArtist] = useState('');
    const [price,setPrice] = useState('');
    const [image,setImage] = useState('');

 
    const addRecord = async () => {
        
            try {
            await db.collection('records').doc().set({
                album: album,
                artist: artist,
                image: image,
                price: parseFloat(price),
            });
            //dispatch({ type: 'SIGNUP_SUCCESS' });
            //const {products: indexedProducts} = useGlobalProvider();
            history.push('/');
        } catch (err) {
            return alert(err.message);
        }
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
                <h1>Add Record</h1>

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

                
                
                <button  onClick={addRecord} className='login__signInButton'>Add Record</button>
                
            </div>
        </div>
    )
}

export default AddRecord