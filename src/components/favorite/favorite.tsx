import React, { useContext, useEffect } from "react";
import { Character } from "../../types/character-types";
import { FavoriteProps } from "../../types/favorite-types";
import { RaMContext } from "../app/app-context";
import Card from "../card";

const Favorite = (props: FavoriteProps): JSX.Element => {
    const {favorites} = useContext(RaMContext);

    return(
        <div className={props.className} >
            {favorites.map((character: Character) => {
                return <Card character={character} key={character.id} />
            })}
        </div>
    );
};

export default Favorite;