import React, { Component } from "react";
import { Table } from "react-bootstrap/cjs";
import { Button } from "react-bootstrap";
class RoomList extends Component {
    render() {
        let { rooms, deleteRoom, updateRoom, buttonEdit } = this.props;
        // console.log("FROM list", rooms);
        let room = rooms.map((room, index) => {
            return (
                <tr key={room.id}>
                    <td>{index + 1}</td>
                    <td>{room.roomName}</td>
                    <td>{room.price}</td>
                    <td>{room.status}</td>
                    <td>
                        <Button
                            // disabled={!buttonEdit}
                            variant="primary"
                            onClick={(event) => {
                                updateRoom(event, index);
                            }}
                        >
                            Edit
                        </Button>
                    </td>
                    <td>
                        {/* {console.log(this.state.tr.key)} */}
                        <i className="delete">delete</i>
                        <Button
                            variant="primary"
                            onClick={(event) => {
                                deleteRoom(event, room.id);
                            }}
                        >
                            Delete
                        </Button>
                    </td>
                </tr>
            );
        });
        return (
            <div style={{ marginTop: 10 }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Room Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>{room}</tbody>
                </Table>
            </div>
        );
    }
}
export default RoomList;
