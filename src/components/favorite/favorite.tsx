import React, { useContext } from "react";
import { RaMContext } from "../../contexts";
import Card from "../card";

const Favorite = () => {
    const { RaMAPI, favorites } = useContext(RaMContext);

    return(
        <div>
            {favorites.map((favorite: number) => {
                <Card id={favorite} />
            })}
        </div>
    );
};

export default Favorite;