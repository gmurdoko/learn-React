import React, { Component } from "react";
import { getRooms, pushRoom } from "../../api/roomsApi/RoomServices";
import RoomList from "./RoomList";
import RoomForm from "./RoomForm";
class RoomPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            sample: "",
            fields: {
                // id: "",
                roomName: "",
                price: "",
                // status: "",
            },
        };
        //
    }

    handleChange = (event, field) => {
        let { fields } = this.state;
        fields[field] = event.target.value;
        this.setState({ fields });
        console.log(this.state.fields);
    };

    loadData = () => {
        getRooms()
            .then((rooms) => {
                this.setState({ ...this.state, rooms: rooms.data.result });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    createRoom = (event) => {
        event.preventDefault();
        pushRoom(this.state.fields)
            .then((res) => {
                alert("input berhasil");
                this.setState({
                    ...this.state,
                    fields: {
                        // id: "",
                        roomName: "",
                        price: "",
                        // status: "",
                    },
                });
                this.loadData();
                console.log(res);
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
            <div className="row col-md-12 justify-content-center">
                <div className="col-md-7">
                    <RoomForm
                        handleChange={this.handleChange}
                        fields={this.state.fields}
                        createRoom={this.createRoom}
                    />
                    <RoomList
                        sample={this.state.sample}
                        rooms={this.state.rooms}
                    />
                </div>
            </div>
        );
    }
}
export default RoomPage;
