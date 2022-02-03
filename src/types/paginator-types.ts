interface PaginatorProps {
    pageNums: number[];
    page: number;
    handlePageClick: (num: number) => void;
}

export type {
    PaginatorProps
}