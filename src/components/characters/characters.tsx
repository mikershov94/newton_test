import React, { useContext, useEffect, useState } from "react";
import { Page } from "../../types/api-client-types";
import { Character, CharactersProps } from "../../types/character-types";
import { RaMAPI } from "../app/app-context";
import Card from "../card";

const Characters = (props: CharactersProps): JSX.Element => {
    const [characters, setCharacters] = useState<Character[]>([]);

    const [numPage, setNumPage] = useState<number>(0);

    useEffect(() => {
        RaMAPI.getAllCharacters(numPage)
              .then((page: Page) => {
                  setCharacters(page.results)
              })
              //console.log(characters)
        
    }, [numPage]);


    return(
        <div>
            <div className={props.className} >
                {characters.map((character: Character) => {
                    return <Card character={character} key={character.id} />
                })}
            </div>
        </div>
    );
};

export default Characters;