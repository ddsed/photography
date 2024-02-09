import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to='/' className='header__link'>
                <h1 className="header__title">Daria Sedova</h1>
            </Link>
            <div className="header__contacts">
                <p className="header__email">dashassed@gmail.com</p>
                <Link to="https://www.instagram.com/_sedova___/" className="header__insta" rel="noreferrer" target="_blank"></Link>
            </div>
        </header>   
    );
}

export default Header;