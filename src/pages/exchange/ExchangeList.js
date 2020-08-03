import React, { Component, useEffect } from "react";
import { Table, Form, Row, Col, Button } from "react-bootstrap/cjs";

const ExchangeList = (props) => {
    const { full, baseValue } = props;
    let list = [];
    let listHead = [];

    for (const key in full.rates) {
        if (full.rates.hasOwnProperty(key)) {
            list.push(
                <tr key={key}>
                    <td>{key}</td>
                    <td>{baseValue * full.rates[key]}</td>
                </tr>
            );
        }
    }

    return (
        <div style={{ marginTop: "10px" }}>
            <h7>BASE: {full.base}</h7>{" "}
            <h7 style={{ float: "right" }}>DATE: {full.date}</h7>
            total Record: {list.length}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Value to Base</th>
                    </tr>
                </thead>
                <tbody>{list === "" ? "loading..." : list}</tbody>
            </Table>
        </div>
    );
};

export default ExchangeList;
