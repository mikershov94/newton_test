import React from "react";
import { usePaginatorElements } from "../../hooks/usePaginatorElements";
import { IPaginatorProps } from "../../types/paginator-types";
import './paginator.css';

const Paginator = (props: IPaginatorProps): JSX.Element => {
    const {afterPrev,
           passPrev,
           betweenPass,
           passNext,
           pass,
           beforeNext} = usePaginatorElements(props);
    
    return(
        <div className="paginator">
            <div className="paginator__button paginator__button_prev"
                 onClick={() => { if (props.prevPage !== null) props.changePage(props.prevPage)}}>Пред.</div>
            {afterPrev}
            {passPrev}
            {betweenPass}
            {passNext}
            {pass}
            {beforeNext}
            <div className="paginator__button paginator__button_next"
                 onClick={() => { if (props.nextPage !== null) props.changePage(props.nextPage)}}>След.</div>
        </div>
    );
};

export default Paginator;