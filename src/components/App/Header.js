import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Header = ({ isLoggedIn }) => {
    return (
        <header>
            <div className="logo">
                    <img className="logo-icon" src={require('./logo-transparent.png')} alt='Exchange Lens Logo' />
                    <h1 className="logo-text">Exchange Lens</h1>
                </div>
        </header>
    );
}

export default Header;