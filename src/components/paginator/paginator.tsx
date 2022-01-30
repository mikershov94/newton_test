import React from "react";
import './paginator.css';

interface IPaginatorProps {
    pageCount: number;                  //количество страниц
    numsAfterPrev: number[];            //номера страниц после кнопки "Пред."
    numsBeforeNext: number[];           //номера страниц перед кнопкой "След."
    countPass: number;                  //количество страниц для пропуска
    page: number;                       //текущая страница
    prevPage: number;                   //предыдущая страница
    nextPage: number;                   //следующая страница
    changePage: (id: number) => void;   //функция для смены страницы
}

const Paginator = (props: IPaginatorProps) => {
    //список элементов после кнопки "Пред."
    const afterPrev: JSX.Element[] = props.numsAfterPrev.map((num: number) => {
        return <div className="paginator__button"
                    key={num}
                    onClick={() => props.changePage(num)}>{num}</div>
    });

    //список элементов до кнопки "След."
    const beforeNext: JSX.Element[] = props.numsBeforeNext.map((num: number) => {
        return <div className="paginator__button"
                    key={num}
                    onClick={() => props.changePage(num)}>{num}</div>
    })

    return(
        <div className="paginator">
            <div className="paginator__button paginator__button_prev"
                 onClick={() => props.changePage(props.prevPage)}>Пред.</div>
            {afterPrev}
            <div className="paginator__button"
                 onClick={() => props.changePage(props.countPass)}>...</div>
            {beforeNext}
            <div className="paginator__button paginator__button_next"
                 onClick={() => props.changePage(props.nextPage)}>След.</div>
        </div>
    );
};

export default Paginator;