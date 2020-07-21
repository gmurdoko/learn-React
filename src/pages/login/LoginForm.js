import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    submitHandler = (event) => {
        event.preventDefault();
        event.target.className += " was-validated";
        // this.props.onLogin();
    };
    changeHandler = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    };
    render() {
        // const { onLogin } = this.props;
        return (
            <div class="col-md-12 alert alert-dark transparent-bg">
                <div className="row col-md-12 justify-content-center">
                    <h4 className="text-light">Login </h4>
                </div>
                <div className="alert col-md-12 text-right">
                    <Form
                        className="needs-validation"
                        onSubmit={this.submitHandler}
                        noValidate
                    >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                className="transparent-input text-light"
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                autoFocus={true}
                                required={true}
                                onChange={(event) => {
                                    this.changeHandler(event);
                                }}
                                value={this.state.email}
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                                Email doesn't valid!
                            </div>
                            {/* <Form.Text className="text-light">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control
                                className="transparent-input text-light"
                                type="password"
                                placeholder="Password"
                                required={true}
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                                Password can't be empty
                            </div>
                        </Form.Group>
                        <Form.Group
                            className="float-left"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                className="text-light"
                                type="checkbox"
                                label="Remember me"
                            />
                        </Form.Group>
                        <Button
                            variant="outline-light"
                            type="submit"
                            // onClick={() => {
                            //     onLogin();
                            // }}
                        >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default LoginForm;
