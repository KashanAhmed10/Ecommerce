import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom"
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{ basket,user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    return (
        <div className="header">
          <Link to="/">  <img className="header_logo" src="./img/amazon_logo.png" alt="" /> </Link>
            <div className="header_search">
                <input type="text" className="header_searchinput" />
                <SearchIcon className="header_searchlogo" />

            </div>
          
            <div className="header__nav">
             <Link to={!user && '/login'}>
            <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
           </div>
            </Link>
                 <Link to="/Orders">   <div className="header_option">
                    <span className="header_optionone">Return</span>
                    <span className="header_optiontwo"> &Order</span>
                </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionone">your</span>
                    <span className="header_optiontwo"> price</span>
                </div>
               <Link to="/checkout">
                <div className="header_basketicon">
                    <ShoppingBasketIcon />
                    <span className="header_optiontwo header_count">{basket.length}</span>
                </div>
                </Link>
            </div>


        </div>

    )
}

export default Header
