import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
class LoginForm extends Component {
    render() {
        return (
            <div class="col-md-12 alert alert-dark transparent-bg">
                <div className="row col-md-12 justify-content-center">
                    <h4 className="text-light">Login </h4>
                </div>
                <div className="alert col-md-12">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                className="transparent-input text-light"
                                type="email"
                                placeholder="Enter email"
                                autofocus="true"
                                required="true"
                            />
                            {/* <Form.Text className="text-light">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control
                                className="transparent-input text-light"
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                className="text-light"
                                type="checkbox"
                                label="Remember me"
                            />
                        </Form.Group>
                        <Button variant="outline-light" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default LoginForm;
