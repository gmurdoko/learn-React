import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { times } from "@fortawesome/free-solid-svg-icons";
import {
    Modal,
    Button,
    Card,
    Row,
    Form,
    InputGroup,
    Col,
} from "react-bootstrap";

class RoomModal extends Component {
    render() {
        // let { handleChange, selectedRoom, createRoom, inputFocus } = this.props;
        const {
            handleChange,
            showDetails,
            hideDetails,
            selectedRoom,
            createRoom,
            edited,
        } = this.props;
        return (
            <Modal show={showDetails}>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Detail Room
                    </Modal.Title>
                    <Button
                        onClick={() => {
                            hideDetails();
                        }}
                    >
                        <i className="times" />
                    </Button>
                </Modal.Header>
                <Modal.Body>
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
                                    value={selectedRoom["id"]}
                                    disabled={selectedRoom["edited"]}
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
                                    value={selectedRoom["roomName"]}
                                    required="true"
                                    // ref={inputFocus}
                                    autoFocus={true}
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
                                    value={selectedRoom["price"]}
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
                                    value={selectedRoom["status"]}
                                    disabled={edited}
                                    required="true"
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="float-right"
                        variant="primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default RoomModal;
