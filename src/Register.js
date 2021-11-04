import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import logo from './assets/vinyl.png';
import { auth } from "./firebase";
import { db } from "./firebase";


function Register() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');

 
    const register = () => {
        //return
        //  (dispatch, getState, {getFirebase, getFirestore}) 
        // => {
        //   const firebase = getFirebase();
        //   const firestore = getFirestore();
      
          auth.createUserWithEmailAndPassword(
            email, 
            password
          ).then(resp => {
            return db.collection('users').doc(resp.user.uid).set({
              email: email, 
              username: username,
              phone: phone,
              address: address,
              admin: false
            });
          }).then(() => {
            //dispatch({ type: 'SIGNUP_SUCCESS' });
            history.push('/');
          }).catch((err) => alert(err.message));
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
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <h5>Username</h5>
                    <input type='text' value={username} onChange={e => setUsername(e.target.value)} />

                    <h5>Phone</h5>
                    <input type='text' value={phone} onChange={e => setPhone(e.target.value)} />

                    <h5>Address</h5>
                    <input type='text' value={address} onChange={e => setAddress(e.target.value)} />

                    <Link to='/login'>
                    <button type='submit'  className='login__registerButton'>Already have an account?</button>
                    </Link >
                </form>

                
                
                <button  onClick={register} className='login__signInButton'>Register</button>
                
            </div>
        </div>
    )
}

export default Register