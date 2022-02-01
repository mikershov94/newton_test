import React, { useContext, useEffect, useState } from "react";
import { RaMAPI } from "../app/app-context";
import { ICharacter, ICharactersProps } from "../../types/character-types";
import { IPage, IPaginationInfo } from "../../types/paginator-types";
import Card from "../card";

const Characters = (props: ICharactersProps): JSX.Element => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);

    const defaultInfo: IPaginationInfo = {
        count: 0,
        pages: 0,
        next: null,
        prev: null
    }

    const [infoPagination, setInfoPagination] = useState<IPaginationInfo>(defaultInfo)
    const [numPage, setNumPage] = useState<number>(0);

    useEffect(() => {
        RaMAPI.getAllCharacters(numPage)
              .then((page: IPage) => {
                  setInfoPagination(page.info);
                  setCharacters(page.results)
              })
              //console.log(characters)
        
    }, [numPage]);


    return(
        <div>
            <div className={props.className} >
                {characters.map((character: ICharacter) => {
                    return <Card character={character} key={character.id} />
                })}
            </div>
        </div>
    );
};

export default Characters;