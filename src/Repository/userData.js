import axios from "axios";

const API_HOST = "http://localhost:4000";
const USER_KEY = "user";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export async function userLogin(email, password) {
  const data = {
    email: email,
    password: password,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(
    API_HOST + "/api/users/login",
    data,
    config
  );
  const user = response.data;

  return user;
}

export async function userSignup(userDetails) {
  const data = {
    email: userDetails?.email,
    password: userDetails?.password,
    name: userDetails?.name,
    joined: userDetails?.joined,
  };
  const response = await axios.post(
    API_HOST + "/api/users/signup",
    data,
    config
  );
  const user = response.data;

  return user;
}

export async function findUserDetails(userId) {
  const data = {
    userId: userId,
  };
  const response = await axios.post(
    API_HOST + "/api/users/findUser",
    data,
    config
  );
  const user = response.data;

  return user;
}

export async function updateUserDetails(userObj) {
    console.log(userObj)
  const data = {
    userId: userObj?.userId,
    name: userObj?.name,
  };
  const response = await axios.post(
    API_HOST + "/api/users/updateUserDetails",
    data,
    config
  );
  const user = response.data;

  return user;
}

export async function deleteAccount(userId) {
  const data = {
    userId: userId,
  };
  const response = await axios.post(
    API_HOST + "/api/users/deleteAcc",
    data,
    config
  );
  const user = response.data;

  return user;
}