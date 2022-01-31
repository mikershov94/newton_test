import React from "react";
import { IPaginatorElements, IPaginatorProps } from "../types/paginator-types";

function usePaginatorElements(props: IPaginatorProps): IPaginatorElements {
    //список элементов после кнопки "Пред."
    const afterPrev: JSX.Element[] = props.numsAfterPrev.map((num: number) => {
        let className = 'paginator__button'
        if (props.page == num) className += ' paginator__button_active'
        return <div className={className}
                    key={num}
                    onClick={() => {props.changePage(num)}}>{num}</div>
    });

    //список элементов до кнопки "След."
    const beforeNext: JSX.Element[] = props.numsBeforeNext.map((num: number) => {
        let className = 'paginator__button'
        if (props.page == num) className += ' paginator__button_active'
        return <div className={className}
                    key={num}
                    onClick={() => props.changePage(num)}>{num}</div>
    })
    
    //список элементов между "..."
    let betweenPass: JSX.Element[] | null = null;
    let passPrev: JSX.Element | null = null;
    let passNext: JSX.Element | null = null;
    let pass: JSX.Element | null = null;
    if (props.numsBetweenPass.length !== 0) {
        //формирует элементов между кнопками "..."
        betweenPass = props.numsBetweenPass.map((num: number) => {
            let className = 'paginator__button'
            if (props.page == num) className += ' paginator__button_active'
            return <div className={className}
                        key={num}
                        onClick={() => props.changePage(num)}>{num}</div>
        });
        //кнопка "..." до списка
        passPrev = <div className="paginator__button"
                        onClick={() => props.changePage(props.page - 10)}>...</div>
        //кнопка "..." после списка
        passNext = <div className="paginator__button"
                        onClick={() => props.changePage(props.page + 10)}>...</div>
    } else {
        //кнопка "..." если текщая страница ближе к началу
        if (props.numsAfterPrev.length > 2) {
            pass = <div className="paginator__button"
                        onClick={() => props.changePage(props.page + 10)}>...</div>
        }

        //кнопка "..." если текущая страница ближе к концу
        if (props.numsBeforeNext.length > 2) {
            pass = <div className="paginator__button"
                        onClick={() => props.changePage(props.page - 10)}>...</div>
        }

    }

    
    return {
        afterPrev,
        passPrev,
        betweenPass,
        passNext,
        beforeNext,
        pass
    }
}

export {
    usePaginatorElements
}