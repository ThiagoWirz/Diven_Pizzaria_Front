import axios from "axios";

// const BASE_URL = "https://driven-pizzaria.herokuapp.com";
const BASE_URL = "http://localhost:5000";

function signUp(formData) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, formData);
  return promise;
}

function sigIn(formData) {
  const promise = axios.post(`${BASE_URL}/auth/sign-in`, formData);
  return promise;
}

export { signUp, sigIn };
