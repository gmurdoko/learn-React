import React, { Component } from "react";
import { Table } from "react-bootstrap/cjs";
import { Button } from "react-bootstrap";
class RoomList extends Component {
    render() {
        let { rooms } = this.props;
        // console.log("FROM list", rooms);
        let room = rooms.map((room, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{room.roomName}</td>
                    <td>{room.price}</td>
                    <td>{room.status}</td>
                    <td>
                        <Button variant="primary">Edit</Button>
                    </td>
                    <td>
                        <Button variant="primary">Delete</Button>
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
