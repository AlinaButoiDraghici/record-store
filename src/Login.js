import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import logo from './assets/vinyl.png';
import { auth } from "./firebase";
import { db } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const signIn = e => {
    //     e.preventDefault();

    //     auth()
    //         .signInWithEmailAndPassword(email, password)
    //         .then(auth => {
    //             history.push('/')
    //         })
    //         .catch(error => alert(error.message))
    // }
    const signIn = async (email, password) => {
        try {
          await 
          auth.signInWithEmailAndPassword(email, password);
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };

      const register= async (name, email, password) => {
        try {
          const res = await auth()
          .createUserWithEmailAndPassword(email, password);
          const user = res.user;
        //   await db.collection("users").add({
        //     uid: user.uid,
        //     name,
        //     authProvider: "local",
        //     email,
        //   });
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };

    // const register = e => {
    //     e.preventDefault();

    //     auth()
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             // it successfully created a new user with email and password
    //             if (auth) {
    //                 history.push('/')
    //             }
    //         })
    //         .catch(error => alert(error.message))
    // }

    return (
        <div className='login'>
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

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                

                <button onClick={register} className='login__registerButton'>Create Account</button>
            </div>
        </div>
    )
}

export default Login