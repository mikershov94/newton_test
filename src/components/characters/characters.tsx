import React, { useContext, useEffect, useState } from "react";
import { resourceLimits } from "worker_threads";
import { RaMContext } from "../../contexts";
import { CharactersOnPageInterface, CharacterType } from "../../types/character-type";
import Card from "../card";

interface CharactersPropsInterface {
    className: string;
}

const Characters = (props: CharactersPropsInterface) => {
    const [characters, setCharacters] = useState<CharacterType[]>([])
    const {RaMAPI} = useContext(RaMContext);

    useEffect(() => {
        RaMAPI.getAllCharacters(1)
              .then((data: CharactersOnPageInterface) => {
                  setCharacters(data.results);
              });

        console.log(characters)
    })

    return(
        <div className={props.className} >
            {characters.map((character: CharacterType) => {
                <Card id={character.id} />
            })}
        </div>
    );
};

export default Characters;