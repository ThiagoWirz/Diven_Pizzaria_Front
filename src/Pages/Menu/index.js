import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import { useContext, useEffect, useState } from "react";
import { getDrinks, getPizzas } from "../../services/dirvenpizzaria";
import {
  Description,
  Price,
  Ingredients,
  Name,
  PizzaSmall,
  ContainerSmalls,
  ContainerPizzas,
  PizzaSmallDiv,
} from "./style";
import CartContext from "../../contexts/cartContext";

function Menu() {
  const [pizzas, setPizzas] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [pizzasSalgadas, setPizzasSalgadas] = useState([]);
  const [pizzasDoces, setPizzasDoces] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function Products() {
    const promisePizzas = getPizzas();
    promisePizzas.then((res) => {
      setPizzas(res.data);
      pizzaFilter(res.data);
    });
    promisePizzas.catch((error) => {
      alert(error.data);
    });
    const promiseDrinks = getDrinks();
    promiseDrinks.then((res) => {
      setDrinks(res.data);
    });
    promiseDrinks.catch((error) => {
      alert(error.data);
    });
  }

  function pizzaFilter(pizzas) {
    let salgada = [];
    let doces = [];
    salgada = pizzas.filter((pizza) => {
      if (pizza.type === "salgada") {
        return pizza;
      } else {
        doces.push(pizza);
      }
    });
    setPizzasSalgadas(salgada);
    setPizzasDoces(doces);
  }

  function handleConfirm() {
    if (window.confirm("Por favor, faça o login ou cadastre-se")) {
      navigate("/sign-in");
    }
  }

  useEffect(Products, []);

  function addCart(id) {
    setCart([...cart, id]);
  }

  return (
    <>
      {user ? (
        <>
          <Header />
          <ContainerPizzas>
            <Description>Pizzas Salgadas</Description>
            <ContainerSmalls>
              {pizzasSalgadas.map(function (pizza) {
                return (
                  <PizzaSmall onClick={() => addCart(pizza)}>
                    <img src={pizza.image} alt={pizza.name} />
                    <Name>{pizza.name}</Name>
                    <Ingredients>
                      Ingredientes: {pizza.ingredient}
                      <br></br>
                    </Ingredients>
                    <Price>R${pizza.price}</Price>
                  </PizzaSmall>
                );
              })}
            </ContainerSmalls>
            <Description>Pizzas Doces</Description>
            <ContainerSmalls>
              {pizzasDoces.map(function (pizza) {
                return (
                  <PizzaSmall onClick={() => addCart(pizza)}>
                    <img src={pizza.image} alt={pizza.name} />
                    <Name>{pizza.name}</Name>
                    <Ingredients>
                      Ingredientes: {pizza.ingredient}
                      <br></br>
                    </Ingredients>
                    <Price>R${pizza.price}</Price>
                  </PizzaSmall>
                );
              })}
            </ContainerSmalls>
            <Description>Bebidas</Description>
            <ContainerSmalls>
              {drinks.map((drink) => {
                return (
                  <PizzaSmall onClick={() => addCart(drink)}>
                    <img src={drink.image} alt={drink.name} />
                    <Name>{drink.name}</Name>
                    <Price>R${drink.price}</Price>
                  </PizzaSmall>
                );
              })}
            </ContainerSmalls>
          </ContainerPizzas>
        </>
      ) : (
        <>
          <Header />
          <ContainerPizzas>
            <Description>Pizzas Salgadas</Description>
            <ContainerSmalls>
              {pizzasSalgadas.map(function (pizza) {
                return (
                  <PizzaSmallDiv onClick={handleConfirm}>
                    <img src={pizza.image} alt={pizza.name} />
                    <Name>{pizza.name}</Name>
                    <Ingredients>
                      Ingredientes: {pizza.ingredient}
                      <br></br>
                    </Ingredients>
                    <Price>R${pizza.price}</Price>
                  </PizzaSmallDiv>
                );
              })}
            </ContainerSmalls>
            <Description>Pizzas Doces</Description>
            <ContainerSmalls>
              {pizzasDoces.map(function (pizza) {
                return (
                  <PizzaSmallDiv onClick={handleConfirm}>
                    <img src={pizza.image} alt={pizza.name} />
                    <Name>{pizza.name}</Name>
                    <Ingredients>
                      Ingredientes: {pizza.ingredient}
                      <br></br>
                    </Ingredients>
                    <Price>R${pizza.price}</Price>
                  </PizzaSmallDiv>
                );
              })}
            </ContainerSmalls>
            <Description>Bebidas</Description>
            <ContainerSmalls>
              {drinks.map((drink) => {
                return (
                  <PizzaSmallDiv onClick={handleConfirm}>
                    <img src={drink.image} alt={drink.name} />
                    <Name>{drink.name}</Name>
                    <Price>R${drink.price}</Price>
                  </PizzaSmallDiv>
                );
              })}
            </ContainerSmalls>
          </ContainerPizzas>
        </>
      )}
    </>
  );
}
export default Menu;
