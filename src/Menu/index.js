import styled from 'styled-components'
import Header from '../Header'
import { Link } from 'react-router-dom'
import UserContext from '../contexts/userContext'
import { useContext, useEffect, useState } from 'react'
import { getDrinks, getPizzas } from '../services/dirvenpizzaria'


function Menu() {
    const [pizzas, setPizzas] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [pizzasSalgadas, setPizzasSalgadas] = useState([])
    const [pizzasDoces, setPizzasDoces] = useState([])

    function Products() {

        const promisePizzas = getPizzas();
        promisePizzas.then((res) => {
            setPizzas(res.data)
            pizzaFilter(res.data)
        })
        promisePizzas.catch((error) => {
            alert(error.data)
        })
        const promiseDrinks = getDrinks();
        promiseDrinks.then((res) => {
            setDrinks(res.data)
        })
        promiseDrinks.catch((error) => {
            alert(error.data)
        })
    }

    function pizzaFilter(pizzas) {
        let salgada = [];
        let doces = [];
        salgada = pizzas.filter((pizza) => {
            if (pizza.type == "salgada") {
                return pizza;
            } else {
                doces.push(pizza)
            }
        }
        );
        setPizzasSalgadas(salgada)
        setPizzasDoces(doces)

    }

    useEffect((Products), [])

    return (
        <>
            <Header />
            <ContainerPizzas>
                <Description>Pizzas Salgadas</Description>
                <ContainerSmalls>
                    {pizzasSalgadas.map(function (pizza) {
                        return (
                            <PizzaSmall><img src={pizza.image} />
                                <Name>{pizza.name}</Name>
                                <Ingredients>Ingredientes: {pizza.ingredient}<br></br></Ingredients>
                                <Price>R${pizza.price}</Price>
                            </PizzaSmall>
                        )
                    })}
                </ContainerSmalls>
                <Description>Pizzas Doces</Description>
                <ContainerSmalls>
                    {pizzasDoces.map(function (pizza) {
                        return (
                            <PizzaSmall><img src={pizza.image} />
                                <Name>{pizza.name}</Name>
                                <Ingredients>Ingredientes: {pizza.ingredient}<br></br></Ingredients>
                                <Price>R${pizza.price}</Price>
                            </PizzaSmall>
                        )
                    })}
                </ContainerSmalls>
                <Description>Bebidas</Description>
                <ContainerSmalls>
                    {drinks.map((drink) => {
                        return (
                            <PizzaSmall><img src={drink.image} />
                                <Name>{drink.name}</Name>
                                <Price>R${drink.price}</Price>
                            </PizzaSmall>
                        )
                    })}
                </ContainerSmalls>
            </ContainerPizzas>

        </>
    )
} export default Menu

const ContainerPizzas = styled.div`
  width: 100%;
  margin-top: 100px;
  height: 100vh;
`;
const ContainerSmalls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 20px;
  gap: 10px;
`;
const PizzaSmall = styled.div`
width: 150px;
display: flex;
flex-direction: column;


  & img {
    border-radius: 5px;
    width: 150px;
    height: 150px;
  }
`;
const Name = styled.div`
    margin-top: 5px;
    font-size: 17px;
    font-weight: 700;

`
const Ingredients = styled.div`
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: 16px;
    font-weight: 400;

`
const Price = styled.div`
    font-weight: 500;
`
const Description = styled.div`
    margin-left: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 26px;
    font-weight: 700;
    color: #006491;
`
