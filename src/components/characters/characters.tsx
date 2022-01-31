import React, { useContext, useEffect, useState } from "react";
import { RaMContext } from "../../contexts";
import { usePagination } from "../../hooks/usePagination";
import { ICharacter, ICharactersProps } from "../../types/character-types";
import { IPaginationInfo } from "../../types/paginator-types";
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

    const {
        pageCount,
        numsAfterPrev,
        numsBeforeNext,
        numsBetweenPass,
        page,
        prevPage,
        nextPage,
        changePage} = usePagination(infoPagination)

    return(
        <div>
            <div className={props.className} >
                {data.map((character: ICharacter) => {
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