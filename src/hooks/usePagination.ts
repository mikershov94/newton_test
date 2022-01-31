import { IPaginationInfo, IPaginatorProps, TChangeNumPageCallback } from "../types/paginator-types";
import { useEffect, useState } from 'react';

function usePagination(info: IPaginationInfo,
                       setNumPage: TChangeNumPageCallback): IPaginatorProps {
    
    const [pageCount, setPageCount] = useState<number>(info.pages);
    const [firstPage, setFirstPage] = useState<number>(1);
    const [lastPage, setLastPage] = useState<number>(info.pages);
    const [numsAfterPrev, setNumsAfterPrev] = useState<number[]>([1, 2, 3, 4, 5]);
    const [numsBeforeNext, setNumsBeforeNext] = useState<number[]>([lastPage-1, lastPage]);
    const [numsBetweenPass, setNumsBetweenPass] = useState<number[]>([]);
    const [page, setPage] = useState<number>(1);
    const [prevPage, setPrevPage] = useState<number | null>(null);
    const [nextPage, setNextPage] = useState<number | null>(2);
    
    function changePage(numPage: number): void {
        setPage(numPage);

        setNumPage(page);

        if (page <= 5) {
            setNumsAfterPrev([1,2,3,4,5]);
            setNumsBeforeNext([lastPage-1, lastPage])
            setNumsBetweenPass([]);
        }

        if (page > 5 && page <= lastPage - 4) {
            setNumsAfterPrev([1,2]);
            setNumsBeforeNext([1,2]);
            setNumsBetweenPass([
                page-2,
                page-1,
                page,
                page+1,
                page+2
            ])
        }
        if (page >= lastPage - 4) {
            setNumsAfterPrev([1,2])
            setNumsBetweenPass([]);
            setNumsBeforeNext([
                lastPage - 4,
                lastPage - 3,
                lastPage - 2,
                lastPage - 1,
                lastPage,
            ])
        }

        if ((page - 1) !== 0) {
            setPrevPage(page - 1);
        } else {
            setPrevPage(null);
        }

        if ((page + 1) !== lastPage) {
            setNextPage(page + 1);
        } else {
            setNextPage(null);
        }

    }

    return {
        pageCount,
        numsAfterPrev,
        numsBeforeNext,
        numsBetweenPass,
        page,
        prevPage,
        nextPage,
        changePage
    }
}

export {
    usePagination
}