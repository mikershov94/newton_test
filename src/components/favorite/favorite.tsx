import React from "react";
import { useSelector } from "react-redux";
import { Character } from "../../types/character-types";
import { FavoriteProps } from "../../types/favorite-types";
import { FavoriteState, GlobalState } from "../../types/state-types";
import Card from "../card";

const Favorite = (props: FavoriteProps): JSX.Element => {
    const characters: Character[] = useSelector((state: GlobalState) => state.characters.characters);
    const favorites: FavoriteState = useSelector((state: GlobalState) => state.favorites);

    if (favorites.length !== 0) {
        console.log(characters)
        return(
            <div className={props.className} >
                {favorites.map((character: Character) => {
                    return <Card character={character} key={character.id} />
                })}
            </div>
        );
    }

    return <div className={props.className}></div>

};

export default Favorite;