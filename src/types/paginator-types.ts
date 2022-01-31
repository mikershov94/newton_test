interface IPaginatorProps {
    pageCount: number;                  //количество страниц
    numsAfterPrev: number[];            //номера страниц после кнопки "Пред."
    numsBeforeNext: number[];           //номера страниц перед кнопкой "След."
    numsBetweenPass: number[];          //номера страниц между кнопками "..."
    page: number;                       //текущая страница
    prevPage: number | null;                   //предыдущая страница
    nextPage: number | null;                   //следующая страница
    changePage: (num: number) => void;   //функция для смены страницы
}

interface IPaginationInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

interface IPaginatorElements {
    afterPrev: JSX.Element[];
    passPrev: JSX.Element | null;
    betweenPass: JSX.Element[] | null;
    passNext: JSX.Element | null;
    beforeNext: JSX.Element[];
    pass: JSX.Element | null;
}

export type { 
    IPaginatorProps,
    IPaginationInfo,
    IPaginatorElements
};