import React, { Component } from "react";
import {
    getRooms,
    pushRoom,
    delRoom,
    putRoom,
} from "../../api/roomsApi/RoomServices";
import RoomList from "./RoomList";
import RoomForm from "./RoomForm";
import RoomModal from "./RoomModal";
class RoomPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            sample: "",
            showDetails: false,
            selectedRoom: {},
            edited: true,
        };
        //
    }
    showModal = () => {
        this.setState({
            ...this.state,
            showDetails: !this.state.showDetails,
            edited: true,
        });
    };
    showDetails = (room) => {
        this.setState({
            ...this.state,
            showDetails: !this.state.showDetails,
            selectedRoom: { ...room },
            edited: false,
        });
    };
    hideDetails = () => {
        this.setState({
            ...this.state,
            showDetails: !this.state.showDetails,
            selectedRoom: {},
            edited: false,
        });
    };

    handleChange = (event, field) => {
        let { selectedRoom } = this.state;
        selectedRoom[field] = event.target.value;
        this.setState({ selectedRoom });
        console.log(this.state.selectedRoom);
    };

    loadData = () => {
        let token = sessionStorage.getItem("auth-token");
        getRooms(token)
            .then((rooms) => {
                // console.log(rooms);
                if (rooms.data.status === 200) {
                    this.setState({ ...this.state, rooms: rooms.data.result });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    createRoom = (event) => {
        event.preventDefault();
        event.target.className += " was-validated";
        let token = sessionStorage.getItem("auth-token");

        if (this.state.edited === true) {
            pushRoom(this.state.selectedRoom, token)
                .then((res) => {
                    if (res.data.status === 202) {
                        console.log("result", res);
                        this.hideDetails();
                        alert("input berhasil");
                        this.loadData();
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            putRoom(this.state.selectedRoom, token)
                .then((res) => {
                    if (res.data.status === 202) {
                        this.hideDetails();
                        alert("input berhasil");
                        this.loadData();
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };
    updateRoom = (event, index) => {
        // this.setInputFocus.current.focus();
        event.preventDefault();
        if (this.state.edited === true) {
            this.setState({
                ...this.state,
                selectedRoom: this.state.rooms[index],
            });
        } else {
            this.hideDetails();
        }
    };
    deleteRoom = (event, id) => {
        event.preventDefault();
        let token = sessionStorage.getItem("auth-token");
        delRoom(id, token)
            .then((res) => {
                if (res.data.status === 202) {
                    alert(`${res} delete berhasil`);
                    this.loadData();
                }
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
                        {/* <RoomForm
                            handleChange={this.handleChange}
                            fields={this.state.fields}
                            createRoom={this.createRoom}
                            inputFocus={this.state.setInputFocus}
                        /> */}
                        <RoomList
                            // buttonEdit={this.state.fields.edited}
                            showModal={this.showModal}
                            rooms={this.state.rooms}
                            showDetails={this.showDetails}
                            deleteRoom={this.deleteRoom}
                            // updateRoom={this.updateRoom}
                        />
                        <RoomModal
                            handleChange={this.handleChange}
                            showDetails={this.state.showDetails}
                            selectedRoom={this.state.selectedRoom}
                            hideDetails={this.hideDetails}
                            createRoom={this.createRoom}
                            edited={this.state.edited}
                        />

                        {/* {console.log(this.state.rooms)} */}
                    </div>
                </div>
            </div>
        );
    }
}
export default RoomPage;
