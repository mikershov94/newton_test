import React from "react";
import './card.css';

const Card = () => {
    return(
        <div className="card">
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" 
                 alt="картинка"
                 className="card__img"/>
            <div className="card__text">
                <div>Morty Smith</div>            
            </div>
        </div>
    );
}

export default Card;