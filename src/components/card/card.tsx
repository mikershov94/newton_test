import React, { useContext, useEffect, useState } from "react";
import { APIContext } from "../../contexts";
import CharacterType from "../../types/character-type";
import Like from "../like";
import './card.css';

const Card = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const [isCharacterLiked, setIsCharacterLiked] = useState(false);

    const handleLike = (): void => {
        setIsCharacterLiked(!isCharacterLiked);
    };

    const RaMAPI = useContext(APIContext)

    useEffect(() => {
        RaMAPI.getCharacter(3)
              .then((character: CharacterType) => {
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
                          handleLike={handleLike} /> 
                </div>
            </div>
        </div>
    );
}

export default Card;