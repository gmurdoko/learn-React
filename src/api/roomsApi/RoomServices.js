import React from "react";
import axios from "axios";
const baseURLs = "/rooms";
const baseURL = "/room";
const getRooms = async () => {
    let rooms = await axios.get(baseURLs);
    // console.log(rooms);
    return await rooms;
};
const pushRoom = async (data) => {
    let room = await axios.post(baseURL, data);
    return await room;
};

export { getRooms, pushRoom };
// import axios from 'axios'
// export const getProducts = async function () {
//     let products = await axios.get("http://localhost:3000/products")
//     return products
// }
