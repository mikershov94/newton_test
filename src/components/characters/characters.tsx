import React, { useContext, useEffect, useState } from "react";
import { RaMContext } from "../../contexts";
import { usePagination } from "../../hooks/usePagination";
import { CharactersOnPageInterface, CharacterType } from "../../types/character-type";
import { IPaginationInfo } from "../../types/paginator-types";
import Card from "../card";
import Paginator from "../paginator";

interface CharactersPropsInterface {
    className: string;
}

const Characters = (props: CharactersPropsInterface) => {
    const defaultInfo: IPaginationInfo = {
        count: 0,
        pages: 0,
        next: null,
        prev: null
    }
    const [infoPagination, setInfoPagination] = useState<IPaginationInfo>(defaultInfo)
    const [data, setData] = useState<CharacterType[]>([])

    const {
        pageCount,
        numsAfterPrev,
        numsBeforeNext,
        numsBetweenPass,
        page,
        prevPage,
        nextPage,
        changePage} = usePagination(infoPagination)

    const { RaMAPI } = useContext(RaMContext);

    useEffect(() => {
        RaMAPI.getAllCharacters()
              .then((characters: CharactersOnPageInterface) => {
                  setInfoPagination(characters.info);
                  setData(characters.results);
              })
    });

    

    return(
        <div>
            <div className={props.className} >
                {data.map((character: CharacterType) => {
                    <Card id={character.id}
                          key={character.id} />
                })}
            </div>
            <Paginator pageCount={pageCount}
                       numsAfterPrev={numsAfterPrev}
                       numsBeforeNext={numsBeforeNext}
                       numsBetweenPass={numsBetweenPass}
                       page={page}
                       prevPage={prevPage}
                       nextPage={nextPage}
                       changePage={changePage} />
        </div>
    );
};

export default Characters;