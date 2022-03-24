import React from 'react';
import './Header.css'
import { BsFillCartFill } from "react-icons/bs";
const Header = ({cartButton,cartCount}) => {
    return (
        <div>
            <nav className='navbar'>
                <h1>Gun Bazar</h1>
                <div onClick={cartButton} className='cart-counter'>
                    <span>{cartCount.length}</span>
                    <BsFillCartFill className='icon' color='#fff' />
                </div>
            </nav>
        </div>
    );
};

export default Header;