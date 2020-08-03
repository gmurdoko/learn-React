import React from "react";
import axios from "axios";
const URLs = "https://api.exchangeratesapi.io";
// "proxy": "https://api.exchangeratesapi.io"

const getTodayExcahange = async (base) => {
    // console.log("base get:", base);
    let exchange = await axios.get(`${URLs}/latest?base=${base}`);

    return await exchange;
};
const getTodayExcahangeSymbol = async (base, symbol) => {
    let exchange = await axios.get(
        `${URLs}/latest?base=${base}&symbols=${symbol}`
    );
    // console.log(exchange.data.rates);
    return await exchange;
};
const getByDateBase = async (base, date) => {
    let exchange = await axios.get(`${URLs}/${date}?base=${base}`);
    // console.log(exchange.data.rates);
    return await exchange;
};
const getByDateBaseSymbol = async (base, date, symbol) => {
    let exchange = await axios.get(
        `${URLs}/${date}?base=${base}&symbols=${symbol}`
    );
    // console.log(exchange.data.rates);
    return await exchange;
};
const getByDates = async (base, date, date2) => {
    let exchange = await axios.get(
        `${URLs}/history?start_at=${date}&end_at=${date2}&base=${base}`
    );
    // console.log(exchange.data.rates);
    return await exchange;
};
const getByDatesSymbol = async (base, date, date2, symbol) => {
    let exchange = await axios.get(
        `${URLs}/history?start_at=${date}&end_at=${date2}&base=${base}&symbols=${symbol}`
    );
    // console.log(exchange.data.rates);
    return await exchange;
};

export {
    getTodayExcahange,
    getTodayExcahangeSymbol,
    getByDateBase,
    getByDateBaseSymbol,
    getByDates,
    getByDatesSymbol,
};
