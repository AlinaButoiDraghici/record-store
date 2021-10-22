import React from 'react';
import './Header.css';
import logo from './assets/vinyl.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
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

           {/* <div className='header_nav'>
               <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Hello guest
                    </span>
                    <span className='header_optionLineTwo'>
                        Sign in
                    </span>
               </div>
               <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Returns
                    </span>
                    <span className='header_optionLineTwo'>
                        &Orders
                    </span>
               </div>
                <Link to="/checkout"> 
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
         </Link> 
           </div>
        </div> */}
        
        <div className="header__nav">
        <Link to={!user && '/login'} onClick={handleAuthenticaton}>
          
          <div  className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
    );
}

export default Header
