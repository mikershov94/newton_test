import React, { useContext, useEffect, useState } from "react";
import { ICardProps } from "../../types/card-types";
import { ICharacter } from "../../types/character-types";
import { RaMContext } from "../app/app-context";
import Like from "../like";
import './card.css';

const Card = (props: ICardProps): JSX.Element => {
    const [isCharacterLiked, setIsCharacterLiked] = useState(false);

    const {addFavorite} = useContext(RaMContext);

    const handleLike = (): void => {
        setIsCharacterLiked(true);
        addFavorite(props.character)
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
                <div>{props.character.gender}</div>
                <div>{props.character.species}</div>
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