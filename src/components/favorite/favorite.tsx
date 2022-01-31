import React, { useContext, useEffect } from "react";
import { ICharacter } from "../../types/character-types";
import { IFavoriteProps } from "../../types/favorite-types";
import { RaMContext } from "../app/app-context";
import Card from "../card";

const Favorite = (props: IFavoriteProps): JSX.Element => {
    const {favorites} = useContext(RaMContext);

    return(
        <div className={props.className} >
            {favorites.map((character: ICharacter) => {
                return <Card character={character} key={character.id} />
            })}
        </div>
    );
};

export default Favorite;