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

    const handleButtonPrev = () => {
        if (props.prevPage !== null) props.changePage(props.prevPage,
                                                      props.setNumPage);
    }

    const handleButtonNext = () => {
        if (props.nextPage !== null) props.changePage(props.nextPage,
                                                      props.setNumPage);
    }
    
    return(
        <div className="paginator">
            <div className="paginator__button paginator__button_prev"
                 onClick={handleButtonPrev}>Пред.</div>
            {afterPrev}
            {passPrev}
            {betweenPass}
            {passNext}
            {pass}
            {beforeNext}
            <div className="paginator__button paginator__button_next"
                 onClick={handleButtonNext}>След.</div>
        </div>
    );
};

export default Paginator;