import React from "react";
import axios from "axios";
const productURLs = "/products";
const authURL = "/auth";

const pushAuth = async (data) => {
    let token = await axios.post(authURL, data);
    return await token;
};

const getProducts = async () => {
    let rooms = await axios.get(productURLs);

    return await rooms;
};

// const pushRoom = async (data) => {
//     let room = await axios.post(baseURL, data);
//     return await room;
// };

// const delRoom = async (id) => {
//     let room = await axios.delete(`${baseURL}/${id}`);
//     return await room;
// };

// const putRoom = async (data) => {
//     let room = await axios.put(baseURL, data);
//     return await room;
// };
export { pushAuth, getProducts };
