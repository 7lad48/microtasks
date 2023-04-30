import React from 'react';
import './App.css';
import Filter from "./components/Filter";

const response: Array<ResponseType> = [
    {banknots: 'dollar', value: 100, number: ' a1234567890'},
    {banknots: 'dollar', value: 50, number: ' z1234567890'},
    {banknots: 'ruble', value: 100, number: ' w1234567890'},
    {banknots: 'dollar', value: 100, number: ' e1234567890'},
    {banknots: 'dollar', value: 50, number: ' c1234567890'},
    {banknots: 'ruble', value: 100, number: ' r1234567890'},
    {banknots: 'dollar', value: 50, number: ' x1234567890'},
    {banknots: 'ruble', value: 50, number: ' v1234567890'},
]

export type ResponseType = {
    banknots: string
    value: number
    number: string
}
export type FilterType = 'all' | 'dollar' | 'ruble'


export default function App() {
    const [money, setMoney] = React.useState(response);
    let filterMoney = (currency: FilterType) => {
        let filteredData = response.filter((el) => {
            if (currency !== 'all') {
                return el.banknots === currency;
            } else {
                return el
            }

        })
        setMoney(filteredData);
    }

    return (
        <>
            <Filter itemsList={money} callBack={(currency) => filterMoney(currency)}/>
        </>
    );
}
