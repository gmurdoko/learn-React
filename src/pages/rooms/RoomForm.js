import React, { Component } from "react";
import { Button, Card, Row, Form, InputGroup, Col } from "react-bootstrap";

class RoomForm extends Component {
    render() {
        let { handleChange, fields, createRoom, inputFocus } = this.props;
        return (
            <Card>
                <Card.Header>Form Input Room</Card.Header>
                <Card.Body>
                    <Form
                        className="needs-validation"
                        onSubmit={(event) => {
                            createRoom(event);
                        }}
                        noValidate
                    >
                        {/* <Form.Group as={Row} controlId="formGridEmail">
                            <Form.Label column sm={3}>
                                Room Id
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    // value="ROOM ID"
                                    name="id"
                                    onChange={(event) => {
                                        handleChange(event, "id");
                                    }}
                                    value={fields["id"]}
                                    disabled={fields["edited"]}
                                    required="true"
                                />
                            </Col>
                        </Form.Group> */}

                        <Form.Group as={Row} controlId="formGridRoom">
                            <Form.Label column sm={3}>
                                Room Name
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    name="roomName"
                                    type="text"
                                    placeholder="Input Room Name"
                                    onChange={(event) => {
                                        handleChange(event, "roomName");
                                    }}
                                    value={fields["roomName"]}
                                    required="true"
                                    ref={inputFocus}
                                    // autoFocus={true}
                                />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Form can't be empty
                                </div>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formGridPrice">
                            <Form.Label column sm={3}>
                                Price
                            </Form.Label>
                            <Col sm={9}>
                                {/* <InputGroup.Prepend>
                                    <InputGroup.Text>Rp</InputGroup.Text>
                                </InputGroup.Prepend> */}
                                <Form.Control
                                    name="price"
                                    type="number"
                                    placeholder="Input Price ex:10000"
                                    onChange={(event) => {
                                        handleChange(event, "price");
                                    }}
                                    value={fields["price"]}
                                    required="true"
                                />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Form can't be empty
                                </div>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGridRoom">
                            <Form.Label column sm={3}>
                                Room Status
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    name="status"
                                    type="text"
                                    // placeholder="Input Room Status"
                                    onChange={(event) => {
                                        handleChange(event, "status");
                                    }}
                                    value={fields["status"]}
                                    disabled={fields["edited"]}
                                    required="true"
                                />
                            </Col>
                        </Form.Group>

                        <Button
                            className="float-right"
                            variant="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default RoomForm;
