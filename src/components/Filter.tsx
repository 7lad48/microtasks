import React from 'react';
import {ResponseType, FilterType as FilterValues} from "../App";

type FilterType = {
    itemsList: Array<ResponseType>
    callBack: (arg: FilterValues) => void
}

function Filter(props: FilterType) {
    return (
        <>
            <ul>
                {
                    props.itemsList.map((el, index) => {
                        return <li key={index}>
                            <span> {el.banknots}:</span>
                            <span> {el.value} :</span>
                            <span> {el.number}</span>
                        </li>
                    })
                }
            </ul>
            <button onClick={() => props.callBack('all')}>All</button>
            <button onClick={() => props.callBack('ruble')}>RUB Only</button>
            <button onClick={() => props.callBack('dollar')}>USD Only</button>
        </>
    );
}

export default Filter;