import s from "./Paginator.module.css";
import React from "react";

const Paginator = (props) => {

    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 0; i < pageCount; i++ ) {
        pages[i] = i + 1;
    }

    return(
        <div className={s.pagination__wrapper}>
            <div className={s.pagination}>
                {pages.map(p => <span onClick={() => {props.setCurrentPage(p)}} className={props.currentPage === p && s.active__item }>{p}</span>)}
            </div>
        </div>
    )
}

export default Paginator;