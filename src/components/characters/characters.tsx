import React, { useContext, useEffect, useState } from "react";
import { usePagination } from "../../hooks/usePagination";
import { RaMAPI } from "../app/app-context";
import { ICharacter, ICharactersProps } from "../../types/character-types";
import { IPage, IPaginationInfo } from "../../types/paginator-types";
import Card from "../card";
import Paginator from "../paginator";

const Characters = (props: ICharactersProps): JSX.Element => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);

    const defaultInfo: IPaginationInfo = {
        count: 0,
        pages: 0,
        next: null,
        prev: null
    }

    const [infoPagination, setInfoPagination] = useState<IPaginationInfo>(defaultInfo)
    const [numPage, setNumPage] = useState<number>(1);

    const {
        pageCount,
        numsAfterPrev,
        numsBeforeNext,
        numsBetweenPass,
        page,
        prevPage,
        nextPage,
        changePage} = usePagination(infoPagination, setNumPage);

    //const {characters, addCharacters} = useContext(RaMContext);

    useEffect(() => {
        RaMAPI.getAllCharacters(numPage)
              .then((page: IPage) => {
                  setInfoPagination(page.info);
                  setCharacters(page.results)
                  changePage(1, setNumPage)
              })
              //console.log(characters)
    }, [numPage]);

    //console.log(numsBeforeNext)
    return(
        <div>
            <div className={props.className} >
                {characters.map((character: ICharacter) => {
                    return <Card character={character} key={character.id} />
                })}
            </div>
            <Paginator pageCount={pageCount}
                       numsAfterPrev={numsAfterPrev}
                       numsBeforeNext={numsBeforeNext}
                       numsBetweenPass={numsBetweenPass}
                       page={page}
                       prevPage={prevPage}
                       nextPage={nextPage}
                       changePage={changePage}
                       setNumPage={setNumPage} />
        </div>
    );
};

export default Characters;