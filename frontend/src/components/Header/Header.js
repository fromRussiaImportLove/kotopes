import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">Teddy Food</Link>
            </div>  
        </header>
    )
}

export default Header;