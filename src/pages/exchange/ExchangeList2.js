import React from "react";
import { Table } from "react-bootstrap/cjs";

const ExchangeList2 = (props) => {
    const { fullExchange, exchanges, symbol, baseValue } = props;
    let list = [];
    let listHeads = [];
    let listHead = [];
    let listDate = [];
    let tempKey = "";
    for (const key in exchanges) {
        listHeads.push(<th key={key}>{key}</th>);
    }

    for (const key in fullExchange.rates) {
        for (const key2 in fullExchange.rates[key]) {
            list.push(
                <td key={key2}>{baseValue * fullExchange.rates[key][key2]}</td>
            );
            tempKey = key2;
        }

        listDate.push(
            <tr key={key}>
                <td>{fullExchange.base}</td>
                <td>{key}</td>
                {list}
            </tr>
        );
        // tempKey = "";
        list = [];
    }
    listHead.push(<th key={tempKey}>{tempKey}</th>);

    return (
        <div
            style={{
                marginTop: "10px",
                width: "100%",
                overflowX: "auto",
                whiteSpace: "nowrap",
            }}
        >
            {/* <h5>BASE: {fullExchange.base}</h5> <h5>DATE: {fullExchange.date}</h5> */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>BASE</th>
                        <th>DATE</th>
                        {symbol !== "" ? listHead : listHeads}
                    </tr>
                </thead>
                <tbody>{listDate}</tbody>
            </Table>
        </div>
    );
};

export default ExchangeList2;
