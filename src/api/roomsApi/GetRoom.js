import React from "react";
import axios from "axios";
export const getRooms = async function () {
    let rooms = await axios.get("http://localhost:3000/rooms");
    // console.log(rooms);
    return rooms;
};

// import axios from 'axios'
// export const getProducts = async function () {
//     let products = await axios.get("http://localhost:3000/products")
//     return products
// }
