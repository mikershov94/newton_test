import React  from "react";
import { Link } from "react-router-dom";
import './header.css';
import logo from './logo.png';

const Header = () => {
    return(
        <div className="header">
            <img className="header__logo" src={logo} alt="logo"/>
            <div className="header__nav">
                <Link className="header__item" to="/">Главная</Link>
                <Link className="header__item" to="/favorite">Любимые персонажи</Link>
            </div>
        </div>
    );
};

export default Header;