import React, { useEffect, useState } from "react";
import {
    getTodayExcahange,
    getTodayExcahangeSymbol,
    getByDateBase,
    getByDateBaseSymbol,
    getByDates,
    getByDatesSymbol,
} from "../../api/exchangeApi/exchangeServices";
import ExchangeList from "./ExchangeList";
import ExchangeList2 from "./ExchangeList2";
import ExchangeForm from "./ExchangeForm";
import Card from "react-bootstrap/Card";

const ExchangeContainer = (props) => {
    const [full, setFull] = useState({});
    const [fullExchange, setFullExchange] = useState([]);
    const [date, setDate] = useState("");
    const [date2, setDate2] = useState("");
    const [base, setBase] = useState("IDR");
    const [symbol, setSymbol] = useState("");
    const [exchanges, setExchanges] = useState([]);
    const [multiple, setMultiple] = useState(false);
    const [baseValue, setBaseValue] = useState(1);
    const [useSymbol, setUseSymbol] = useState(true);
    const [useDate2, setUseDate2] = useState(true);
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "base") {
            setBase(value);
        } else if (name === "date") {
            setDate(value);
        } else if (name === "date2") {
            setDate2(value);
        } else if (name === "symbol") {
            setSymbol(value);
        } else if (name === "baseValue") {
            setBaseValue(value);
        }
    };
    const loadData = () => {
        // let token = sessionStorage.getItem("auth-token");
        if (base !== "" && date !== "" && date2 !== "") {
            getByDatesSymbol(base, date, date2, symbol)
                .then((result) => {
                    if (result.status === 200) {
                        setFullExchange(result.data);
                    }
                    setMultiple(true);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else if (base !== "" && date !== "" && date2 !== "") {
            getByDates(base, date, date2)
                .then((result) => {
                    if (result.status === 200) {
                        setFullExchange(result.data);
                    }
                    setMultiple(true);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else if (base !== "" && date !== "" && symbol !== "") {
            getByDateBaseSymbol(base, date, symbol)
                .then((result) => {
                    if (result.status === 200) {
                        setFull(result.data);
                        setMultiple(false);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        } else if (base !== "" && date !== "") {
            getByDateBase(base, date)
                .then((result) => {
                    if (result.status === 200) {
                        setFull(result.data);
                        setMultiple(false);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        } else if (base !== "" && symbol !== "") {
            getTodayExcahangeSymbol(base, symbol)
                .then((result) => {
                    if (result.status === 200) {
                        setFull(result.data);
                        setMultiple(false);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        } else if (base !== "") {
            getTodayExcahange(base)
                .then((result) => {
                    if (result.status === 200) {
                        setExchanges(result.data.rates);
                        setFull(result.data);
                        setMultiple(false);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };
    const onSwap = (event) => {
        event.preventDefault();
        let tempBase = base;
        let tempSymbol = symbol;
        setSymbol(tempBase);
        setBase(tempSymbol);
    };
    useEffect(() => {
        if (symbol !== "") {
            setUseSymbol(false);
        } else {
            setUseSymbol(true);
        }
        if (date !== "") {
            setUseDate2(false);
        } else {
            setUseDate2(true);
        }
        loadData();

        console.log("loading");
    }, [base, symbol, date, date2, baseValue, useSymbol, useDate2]);
    return (
        <div className="container">
            <Card>
                <Card.Header as="h5">Filter</Card.Header>
                <Card.Body>
                    <ExchangeForm
                        base={base}
                        symbol={symbol}
                        useSymbol={useSymbol}
                        useDate2={useDate2}
                        handleChange={handleChange}
                        exchanges={exchanges}
                        onSwap={onSwap}
                        baseValue={baseValue}
                    />
                </Card.Body>
                <Card.Header as="h5">
                    {multiple ? "History Table" : "Exchange Rate Table"}
                </Card.Header>
                <Card.Body>
                    {multiple ? (
                        <ExchangeList2
                            baseValue={baseValue}
                            fullExchange={fullExchange}
                            exchanges={exchanges}
                            symbol={symbol}
                        />
                    ) : (
                        <ExchangeList full={full} baseValue={baseValue} />
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default ExchangeContainer;
