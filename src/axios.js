import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/am-commerce/us-central1/api",
  //          "http://localhost:5001/challenge-4b2b2/us-central1/api",
  // baseURL: "https://us-central1-challenge-4b2b2.cloudfunctions.net/api",
  // baseURL: "https://us-central1-am-commerce.cloudfunctions.net/api",
});

export default instance;
