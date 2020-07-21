import React, { Component } from "react";
import {
    getRooms,
    pushRoom,
    delRoom,
    putRoom,
} from "../../api/roomsApi/RoomServices";
import RoomList from "./RoomList";
import RoomForm from "./RoomForm";
class RoomPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            sample: "",
            fields: {
                edited: true,
                id: "",
                roomName: "",
                price: "",
                status: "",
            },
            setInputFocus: React.createRef(),
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

    resetStateFields = () => {
        this.setState({
            ...this.state,
            fields: {
                edited: true,
                id: "",
                roomName: "",
                price: "",
                status: "",
            },
        });
    };

    createRoom = (event) => {
        event.preventDefault();
        event.target.className += " was-validated";

        if (this.state.fields.edited === true) {
            pushRoom(this.state.fields)
                .then((res) => {
                    console.log("result", res);
                    this.resetStateFields();
                    alert("input berhasil");
                    this.loadData();
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            putRoom(this.state.fields)
                .then((res) => {
                    this.resetStateFields();
                    alert("input berhasil");
                    this.loadData();
                    // console.log(res);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };
    updateRoom = (event, index) => {
        // this.setInputFocus.current.focus();
        event.preventDefault();
        if (this.state.fields.edited === true) {
            this.setState({
                ...this.state,
                fields: {
                    edited: false,
                    id: this.state.rooms[index].id,
                    roomName: this.state.rooms[index].roomName,
                    price: this.state.rooms[index].price,
                    status: this.state.rooms[index].status,
                },
            });
        } else {
            this.resetStateFields();
        }
    };
    deleteRoom = (event, id) => {
        event.preventDefault();
        delRoom(id)
            .then((res) => {
                alert(`${res} delete berhasil`);
                this.loadData();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row col-md-12 justify-content-center">
                    <div className="col-md-7">
                        <RoomForm
                            handleChange={this.handleChange}
                            fields={this.state.fields}
                            createRoom={this.createRoom}
                            inputFocus={this.state.setInputFocus}
                        />
                        <RoomList
                            buttonEdit={this.state.fields.edited}
                            sample={this.state.sample}
                            rooms={this.state.rooms}
                            deleteRoom={this.deleteRoom}
                            updateRoom={this.updateRoom}
                        />
                        {/* {console.log(this.state.rooms)} */}
                    </div>
                </div>
            </div>
        );
    }
}
export default RoomPage;
