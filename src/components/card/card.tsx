import React, { useContext, useEffect, useState } from "react";
import { RaMContext } from "../../contexts";
import { ICardProps } from "../../types/card-types";
import { ICharacter } from "../../types/character-types";
import Like from "../like";
import './card.css';

const Card = (props: ICardProps) => {
    const [isCharacterLiked, setIsCharacterLiked] = useState(false);

    const handleLike = (): void => {
        setIsCharacterLiked(true);
    };
    const handleDislike = (): void => {
        setIsCharacterLiked(false)
    };

    return(
        <div className="card">
            <img src={props.character.image} 
                 alt="картинка"
                 className="card__img"/>
            <div className="card__text">
                <div>{props.character.name}</div>
                <div>
                    <Like isLiked={isCharacterLiked}
                          handleLike={handleLike}
                          handleDislike={handleDislike} /> 
                </div>
            </div>
        </div>
    );
}

export default Card;