import React, { Component } from "react";
import { getUsers } from "../../api/challengeApi/api";
import UserList from "./UserList";
class UserPages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
        //
    }
    loadData = () => {
        let token = sessionStorage.getItem("auth-token");
        getUsers(token)
            .then((users) => {
                if (users.status === 200) {
                    this.setState({ ...this.state, users: users.data });
                }
                console.log(this.state.users);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    componentDidMount() {
        this.loadData();
    }
    render() {
        return (
            <div>
                <UserList users={this.state.users} />
            </div>
        );
    }
}

export default UserPages;
