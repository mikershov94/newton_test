import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addFavorite from "../../store/action-creators/add-favorite";
import deleteFavorite from "../../store/action-creators/delete-favorite";
import { FavoriteActions } from "../../types/action-types";
import { CardProps } from "../../types/card-types";
import { Character } from "../../types/character-types";
import { FavoriteState, GlobalState } from "../../types/state-types";
import Like from "../like";
import './card.css';

const Card = (props: CardProps): JSX.Element => {
    const [isCharacterLiked, setIsCharacterLiked] = useState(false);
    const favorites: FavoriteState = useSelector((state: GlobalState) => state.favorites);

    const dispatch: Dispatch<FavoriteActions> = useDispatch();

    const handleLike = (): void => {
        dispatch(addFavorite(props.character));
        setIsCharacterLiked(true);
    };

    const handleDislike = (): void => {
        dispatch(deleteFavorite(props.character));
        setIsCharacterLiked(false);
    };

    useEffect(() => {
        favorites.forEach((character: Character) => {
            if (character.id == props.character.id) {
                setIsCharacterLiked(true);
            }
        })
    })

    return(
        <div className={isCharacterLiked ? 'card card_liked' : 'card'} >
            <img src={props.character.image} 
                 alt="картинка"
                 className="card__img"/>
            <div className="card__text">
                <div className="card__infoblock">
                    <div className="card__label">Имя:</div>
                    <div className="card__info">{props.character.name}</div>
                </div>
                <div className="card__infoblock">
                    <div className="card__label">Пол:</div>
                    <div className="card__info">{props.character.gender}</div>
                </div>
                <div className="card__infoblock">
                    <div className="card__label">Раса:</div>
                    <div className="card__info">{props.character.species}</div>
                </div>
                <div className="card__like">
                    <Like isLiked={isCharacterLiked}
                          handleLike={handleLike}
                          handleDislike={handleDislike} /> 
                </div>
            </div>
        </div>
    );
}

export default Card;