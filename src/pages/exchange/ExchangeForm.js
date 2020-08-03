import React from "react";
import { Table, Form, Row, Col, Button } from "react-bootstrap/cjs";

const ExchangeForm = (props) => {
    const {
        handleChange,
        exchanges,
        onSwap,
        baseValue,
        base,
        symbol,
        useSymbol,
        useDate2,
    } = props;
    let bases = [];
    // let newBases = bases.slice();
    // console.log("exchange list", exchanges);
    for (const key in exchanges) {
        if (exchanges.hasOwnProperty(key)) {
            bases.push(key);
        }
    }
    let newBase = bases.map((value) => {
        return (
            <option key={value} value={value}>
                {value}
            </option>
        );
    });

    return (
        <div>
            <Form
                noValidate
                // onSubmit={handleSubmit}
            >
                <Form.Row>
                    <Form.Group
                        as={Col}
                        md="2"
                        controlId="exampleForm.ControlSelect1"
                    >
                        <Form.Label>BASE</Form.Label>
                        <Form.Control
                            as="select"
                            name="base"
                            onChange={(event) => handleChange(event)}
                        >
                            <option key={"default"} value={base}>
                                {base}
                            </option>
                            {newBase}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationFormik101">
                        <Form.Label>BASE VALUE</Form.Label>
                        <Form.Control
                            type="number"
                            name="baseValue"
                            onChange={(event) => handleChange(event)}
                            value={baseValue}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationFormik101">
                        <Form.Label>DATE</Form.Label>
                        <Form.Control
                            type="date"
                            name="date"
                            onChange={(event) => handleChange(event)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationFormik101">
                        <Form.Label>DATE 2</Form.Label>
                        <Form.Control
                            type="date"
                            name="date2"
                            disabled={useDate2}
                            onChange={(event) => handleChange(event)}
                        />
                        <Form.Control.Feedback tooltip>
                            Looks good!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        md="2"
                        controlId="exampleForm.ControlSelect1"
                    >
                        <Form.Label>SYMBOL</Form.Label>
                        <Form.Control
                            as="select"
                            name="symbol"
                            onChange={(event) => handleChange(event)}
                        >
                            <option key={"default"} value={""}></option>
                            {newBase}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        md="2"
                        controlId="exampleForm.ControlSelect1"
                    >
                        <Button
                            style={{ marginTop: "30px" }}
                            type="button"
                            disabled={useSymbol}
                            onClick={(event) => onSwap(event)}
                        >
                            SWAP
                        </Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    );
};

export default ExchangeForm;
