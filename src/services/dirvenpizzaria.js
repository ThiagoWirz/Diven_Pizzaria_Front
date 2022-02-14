import axios from "axios";

const BASE_URL = "https://driven-pizzaria.herokuapp.com";

function signUp(formData) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, formData);
  return promise;
}

function sigIn(formData) {
  const promise = axios.post(`${BASE_URL}/auth/sign-in`, formData);
  return promise;
}
function getSales() {
  const promise = axios.get(`${BASE_URL}/sales`);
  return promise;
}

function getDrinks() {
  const promiseDrinks = axios.get(`${BASE_URL}/drinks`);
  return promiseDrinks;
}

function getPizzas() {
  const promisePizzas = axios.get(`${BASE_URL}/pizzas`);
  return promisePizzas;
}

function postOrder(formData, config) {
  const promise = axios.post(`${BASE_URL}/orders`, formData, config);
  return promise;
}

function getOrder(config) {
  const promise = axios.get(`${BASE_URL}/orders`, config);
  return promise;
}
export { signUp, sigIn, getSales, getDrinks, getPizzas, postOrder, getOrder };
