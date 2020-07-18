import React, { Component } from "react";
import { getRooms } from "../../api/roomsApi/GetRoom";
import RoomList from "./RoomList";

class RoomPage extends Component {
    state = {
        rooms: [],
        sample: "",
    };

    componentDidMount() {
        getRooms()
            .then((rooms) => {
                this.setState({ ...this.state, rooms: rooms.data.result });
                // console.log("ROOM PAGES: ", rooms);
                // console.log("STATE ROOMS", this.state.rooms);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <div>
                {/*<Button style={{display: `flex`, marginTop: 10, borderRadius: 10}} className='primary'>Add Product</Button>*/}
                <RoomList sample={this.state.sample} rooms={this.state.rooms} />
            </div>
        );
    }
}
export default RoomPage;
