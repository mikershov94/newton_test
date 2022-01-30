import React from "react";
import { usePagination } from "../../hooks/usePagination";
import Card from "../card";
import Paginator from "../paginator";

interface CharactersPropsInterface {
    className: string;
}

const Characters = (props: CharactersPropsInterface) => {
    const {
        pageCount,
        numsAfterPrev,
        numsBeforeNext,
        numsBetweenPass,
        page,
        prevPage,
        nextPage,
        changePage} = usePagination({
                                count:826,
                                pages:42,
                                next:"https://rickandmortyapi.com/api/character/?page=3",
                                prev:"https://rickandmortyapi.com/api/character/?page=1"
                      })

    return(
        <div>
            <div className={props.className} >
                <Card id={1} />
                <Card id={2} />
                <Card id={3} />
                <Card id={4} />
                <Card id={5} />
                <Card id={6} />
                <Card id={7} />
                <Card id={8} />
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