import React from "react";
import axios from "axios";
const userURLs = "/users";
const authURL = "/auth";

const pushAuth = async (data) => {
    let token = await axios.post(authURL, data);
    return await token;
};

const getUsers = async (token) => {
    let users = await axios.get(userURLs, { headers: { "auth-token": token } });

    return await users;
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
export { pushAuth, getUsers };
