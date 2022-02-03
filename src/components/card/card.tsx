import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addFavorite from "../../store/action-creators/add-favorite";
import deleteFavorite from "../../store/action-creators/delete-favorite";
import { FavoriteActions } from "../../types/action-types";
import { CardProps } from "../../types/card-types";
import { FavoriteState, GlobalState } from "../../types/state-types";
import Like from "../like";
import './card.css';

const Card = (props: CardProps): JSX.Element => {
    const [isCharacterLiked, setIsCharacterLiked] = useState(false);
    const favorites: FavoriteState = useSelector((state: GlobalState) => state.favorites);

    const dispatch: Dispatch<FavoriteActions> = useDispatch();

    const handleLike = (): void => {
        dispatch(addFavorite(props.character.id));
        setIsCharacterLiked(true);
    };

    const handleDislike = (): void => {
        dispatch(deleteFavorite(props.character.id));
        setIsCharacterLiked(false);
    };

    useEffect(() => {
        favorites.forEach((characterID: number) => {
            if (characterID == props.character.id) {
                setIsCharacterLiked(true);
            }
        })
    })

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