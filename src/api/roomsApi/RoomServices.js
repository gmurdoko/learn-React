import React from "react";
import axios from "axios";
const baseURLs = "/rooms";
const baseURL = "/room";
const getRooms = async () => {
    let rooms = await axios.get(baseURLs);

    return await rooms;
};
const pushRoom = async (data) => {
    let room = await axios.post(baseURL, data);
    return await room;
};

const delRoom = async (id) => {
    let room = await axios.delete(`${baseURL}/${id}`);
    return await room;
};

const putRoom = async (data) => {
    let room = await axios.put(baseURL, data);
    return await room;
};
export { getRooms, pushRoom, delRoom, putRoom };
// import axios from 'axios'
// export const getProducts = async function () {
//     let products = await axios.get("http://localhost:3000/products")
//     return products
// }
