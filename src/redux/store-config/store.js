import { createStore } from "redux";
import { RoomReducer } from "../reducers/RoomReducer";

const store = createStore(RoomReducer);

export { store };
