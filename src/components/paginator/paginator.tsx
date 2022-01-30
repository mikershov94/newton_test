import React from "react";
import './paginator.css';

const Paginator = () => {
    return(
        <div className="paginator">
            <div className="paginator__button paginator__button_prev">Пред.</div>
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