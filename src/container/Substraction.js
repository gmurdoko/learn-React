import React, { Component } from "react";
import withCalc from "./withCalc";

const Addition = (props) => {
    return (
        <div>
            <h3>
                {props.operan1} - {props.operan2}
            </h3>
            <h3>{props.data}</h3>
        </div>
    );
};

export default withCalc(
    Addition,
    (operan1, operan2) => Number(operan1) - Number(operan2)
);
