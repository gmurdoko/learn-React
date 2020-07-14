import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
// import logo from "./logo.svg";
// import "./loginForm.css";
// import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// let number = 1;
// let hello = "hello good morning";
function loginForm() {
    return (
        <div className="loginForm">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="./logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    React Bootstrap
                </Navbar.Brand>
            </Navbar>
            <Container>
                <Row>
                    <Col>
                        <h4>
                            Example heading{" "}
                            <Badge variant="secondary">New</Badge>
                        </h4>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone
                                    else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Check me out"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

// function redOrBlue() {
//     if (number === 1) {
//         return <p className="blue">"true"</p>;
//     } else {
//         return <p className="red">"false"</p>;
//     }
// }

// function getForSpan() {
//     return;
// }

export default loginForm;
