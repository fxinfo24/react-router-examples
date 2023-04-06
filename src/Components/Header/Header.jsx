import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            {/* <a href="/">Home</a>
            <a href="about">About</a>
            <a href="contact">Contact</a> */}
            <Link to= '/'>Home</Link>
            <Link to = 'friends'>Friends</Link>
            <Link to= '/about'>About</Link>
            <Link to = 'comments'>Comments</Link>
            <Link to= 'contact'>Contact</Link>
        </nav>
    );
};

export default Header;