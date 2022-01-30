import React from "react";
import './paginator.css';

interface IPaginatorProps {
    pageCount: number;
    countAfterPrev: number;
    countBeforeNext: number;
    page: number;
    prevPage: number;
    nextPage: number;
    changePage: () => void;
}

const Paginator = (props: IPaginatorProps) => {
    return(
        <div className="paginator">
            <div className="paginator__button paginator__button_prev"
                 onClick={() => props.changePage()}>Пред.</div>
            <div className="paginator__button">1</div>
            <div className="paginator__button">2</div>
            <div className="paginator__button">3</div>
            <div className="paginator__button">...</div>
            <div className="paginator__button">9</div>
            <div className="paginator__button">10</div>
            <div className="paginator__button paginator__button_next">След.</div>
        </div>
    );
};

export default Paginator;