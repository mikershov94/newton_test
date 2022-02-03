import React  from "react";
import { Link, Location, useLocation } from "react-router-dom";
import './header.css';
import logo from './logo.png';

const Header = (): JSX.Element => {
    const location: Location = useLocation();

    console.log(location)

    return(
        <div className="header">
            <img className="header__logo" src={logo} alt="logo"/>
            <div className="header__nav">
                <Link to="/"
                      className={location.pathname == '/' ? 
                                'header__item_active' : 
                                'header__item'}>Главная</Link>

                <Link to="/favorite"
                      className={location.pathname == '/favorite' ? 
                                'header__item_active' :
                                'header__item'}>Любимые персонажи</Link>
            </div>
        </div>
    );
};

export default Header;