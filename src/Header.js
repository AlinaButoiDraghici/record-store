//import React from 'react';
import './Header.css';
import logo from './assets/vinyl.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth, db } from "./firebase";
import React, { useState, useEffect } from 'react';

import "./App";

function Header() {
     // getting current user function
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
  //const [loggedUser, setLoggedUser] = useState('');
    const [{ basket }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    return (
        <div className='header'>
           <img className='header_logo' src={logo} alt="logo" /> 
           <div className='header_search'>
               <input className='header_searchInput' type="text" />
               <SearchIcon className="header_searchIcon"/>
           </div>

        
        <div className="header__nav">
        <Link to={!user ?  '/login' : '/'} onClick={handleAuthenticaton}>
          
          <div  className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.username}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        { user!==null && user.admin===true  ? 
          <Link to='/addRecord'>
            <div className="header__option">
              <span className="header__optionLineOne">Add</span>
              <span className="header__optionLineTwo">Record</span>
            </div>
          </Link> :
          <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link> 
      }
        
      { user!==null && user.admin===true ?
      <div> </div> :
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      }
      </div>
    </div>
    );
}

export default Header
