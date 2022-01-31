import React, { useContext, useEffect } from "react";
import { RaMContext } from "../../contexts";
import { FavoritePropsInterface } from "../../types/favorite-types";
import Card from "../card";

const Favorite = (props: FavoritePropsInterface) => {
    const { favorites } = useContext(RaMContext);

    console.log(favorites)

    return(
        <div className={props.className} >
            {favorites.map((favorite: number) => {
                return <Card id={favorite} key={favorite} />
            })}
        </div>
    );
};

export default Favorite;