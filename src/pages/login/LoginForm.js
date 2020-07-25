import React, { Component } from "react";
import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./login.css";
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setValidated: false,
        };
    }
    onValidated = (event) => {
        const form = event.currentTarget;
        console.log(form);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            this.props.clickLogin(event);
            console.log(this.state.validated);
        }
        this.setState({ ...this.state, setValidated: true });
    };
    render() {
        const { auth, handleChange } = this.props;
        return (
            <div class="col-md-12 alert alert-dark transparent-bg">
                <div className="row col-md-12 justify-content-center">
                    <h4 className="text-light">Login </h4>
                </div>
                <div className="alert col-md-12 text-right">
                    <Form
                        noValidate
                        validated={this.state.setValidated}
                        onSubmit={(event) => {
                            this.onValidated(event);
                        }}
                    >
                        <Form.Group controlId="validationCustom01">
                            <Form.Control
                                className="transparent-input text-light"
                                name="username"
                                type="text"
                                placeholder="Username"
                                autoFocus={true}
                                required
                                onChange={(event) => {
                                    handleChange(event, "username");
                                }}
                                value={auth["username"]}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Username can't be empty!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationCustom02">
                            <Form.Control
                                className="transparent-input text-light"
                                name="password"
                                type="password"
                                placeholder="Password"
                                required={true}
                                onChange={(event) => {
                                    handleChange(event, "password");
                                }}
                                value={auth["password"]}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Password can't be empty!
                            </Form.Control.Feedback>
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
