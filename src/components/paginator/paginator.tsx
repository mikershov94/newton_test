import React from 'react';
import { PaginatorProps } from '../../types/paginator-types';
import './paginator.css';

const Paginator = (props: PaginatorProps): JSX.Element => {

    return(
        <div className="paginator">
            {props.pageNums.map((pageNum: number) => {
                return <div className={props.page == pageNum ? 
                                       'paginator__button_active' :
                                       'paginator__button'}
                            key={pageNum}
                            onClick={() => props.handlePageClick(pageNum)}>{pageNum}</div>
            })}
        </div>
    )
};

export default Paginator;