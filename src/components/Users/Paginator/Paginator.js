import s from "./Paginator.module.css";
import cn from 'classnames';
import React, {useState} from "react";

const Paginator = ({totalItemsCount, pageSize, setCurrentPage, currentPage, portionSize = 10}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];
    for (let i = 0; i < pagesCount; i++ ) {
        pages[i] = i + 1;
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setCurrentPortion] = useState(1);
    let leftBorderPortion = (portionNumber - 1) * portionSize + 1;
    let rightBorderPortion = portionNumber * portionSize;

    return(
        <div className={s.pagination__wrapper}>
            { portionNumber > 1 && <button className={s.btn} onClick={() => {setCurrentPortion(portionNumber - 1)}}>prev</button> }
            <div className={s.pagination}>
                {pages.filter(p => p >= leftBorderPortion && p <= rightBorderPortion).map(p => <span onClick={() => {setCurrentPage(p)}}
                                                                                                     className={cn(s.page, {[s.active__page]: currentPage === p})}>{p}</span>)}
            </div>
            { portionCount > portionNumber && <button className={s.btn} onClick={() => {setCurrentPortion(portionNumber + 1)}}>next</button> }
        </div>
    )
}

export default Paginator;

//