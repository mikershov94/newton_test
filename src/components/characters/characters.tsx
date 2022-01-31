import React, { useContext, useEffect, useState } from "react";
import { RaMContext } from "../../contexts";
import { usePagination } from "../../hooks/usePagination";
import { ICharacter, ICharactersProps } from "../../types/character-types";
import { IPage, IPaginationInfo } from "../../types/paginator-types";
import Card from "../card";
import Paginator from "../paginator";

const Characters = (props: ICharactersProps) => {
    const defaultInfo: IPaginationInfo = {
        count: 0,
        pages: 0,
        next: null,
        prev: null
    }

    const [infoPagination, setInfoPagination] = useState<IPaginationInfo>(defaultInfo)
    const [data, setData] = useState<ICharacter[]>([])
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

    const {RaMAPI} = useContext(RaMContext);

    useEffect(() => {
        RaMAPI.getAllCharacters(numPage)
              .then((page: IPage) => {
                  setInfoPagination(page.info);
                  page.results.map((character: ICharacter) => {
                      setData([...data, character]);
                  })
              })
    }, [numPage]);

    return(
        <div>
            <div className={props.className} >
                {data.map((character: ICharacter, key: number) => {
                    console.log(character)
                    return <Card character={character}
                                 key={key} />
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