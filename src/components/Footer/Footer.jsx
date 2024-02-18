import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__rights">&copy; 2024 <Link to="https://github.com/ddsed" className="footer__link">code</Link> and photos by Daria Sedova. All rights reserved.</p>
        </footer>   
    );
}

export default Footer;