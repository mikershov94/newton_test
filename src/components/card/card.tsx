import React, { useContext, useEffect, useState } from "react";
import { RaMContext } from "../../contexts";
import { CharacterType } from "../../types/character-type";
import Like from "../like";
import './card.css';

interface CardPropsInterface {
    id: number;
}

const Card = (props: CardPropsInterface) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [isCharacterLiked, setIsCharacterLiked] = useState(false);

    const { RaMAPI, addToFavorite } = useContext(RaMContext);

    const handleLike = (): void => {
        setIsCharacterLiked(true);
        addToFavorite(id);
    };
    const handleDislike = (): void => {
        setIsCharacterLiked(false)
    };

    useEffect(() => {
        RaMAPI.getCharacter(props.id)
              .then((character: CharacterType) => {
                  setId(character.id);
                  setName(character.name);
                  setImage(character.image);
              })
    })

    return(
        <div className="card">
            <img src={image} 
                 alt="картинка"
                 className="card__img"/>
            <div className="card__text">
                <div>{name}</div>
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