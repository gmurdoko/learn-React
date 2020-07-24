import React, { Component } from "react";
import { Table } from "react-bootstrap/cjs";

class UserList extends Component {
    render() {
        const { users } = this.props;

        let user = users.map((user, index) => {
            return (
                <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>{user.address}</td>
                    <td>{user.age}</td>
                </tr>
            );
        });
        return (
            <div style={{ marginTop: "10Px" }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Address</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>{user}</tbody>
                </Table>
            </div>
        );
    }
}

export default UserList;
