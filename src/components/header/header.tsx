import React  from "react";
import './header.css';
import logo from './logo.png';

const Header = () => {
    return(
        <div className="header">
            <img className="header__logo" src={logo} alt="logo"/>
            <div className="header__nav">
                <div className="header__item">Главная</div>
                <div className="header__item">Любимые персонажи</div>
            </div>
        </div>
    );
};

export default Header;