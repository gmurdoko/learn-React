import React, { Component } from "react";
import { Table } from "react-bootstrap/cjs";
class RoomList extends Component {
    render() {
        let { rooms } = this.props;
        console.log("FROM list", rooms);
        let room = rooms.map((room, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{room.roomName}</td>
                    <td>{room.price}</td>
                </tr>
            );
        });
        return (
            <div style={{ marginTop: 10 }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>room Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>{room}</tbody>
                </Table>
            </div>
        );
    }
}
export default RoomList;
