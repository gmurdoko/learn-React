import React from "react";
import axios from "axios";

const authURL = "/auth";

const pushAuth = async (data) => {
    let token = await axios.post(authURL, data);
    return await token;
};

const getUsers = async (token) => {
    let users = await axios.get(userURLs, { headers: { "auth-token": token } });

    return await users;
};

export { pushAuth };
