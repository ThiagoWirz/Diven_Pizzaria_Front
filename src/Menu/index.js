import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../contexts/userContext'
import { useContext, useEffect, useState } from 'react'
import { getDrinks, getPizzas } from '../services/dirvenpizzaria'
import { Description, Price, Ingredients, Name, PizzaSmall, ContainerSmalls, ContainerPizzas, PizzaSmallDiv } from "./style"


function Menu() {
    const [pizzas, setPizzas] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [pizzasSalgadas, setPizzasSalgadas] = useState([])
    const [pizzasDoces, setPizzasDoces] = useState([])
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

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

    function handleConfirm() {
        if (window.confirm("Por favor, faça o login ou cadastre-se")) {
            navigate("/sign-in")
        }
    }

    useEffect((Products), [])

    return (

        <>

            {user ?
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
                </> :

                <>
                    <Header />
                    <ContainerPizzas>
                        <Description>Pizzas Salgadas</Description>
                        <ContainerSmalls>
                            {pizzasSalgadas.map(function (pizza) {
                                return (
                                    <PizzaSmallDiv onClick={handleConfirm}><img src={pizza.image} />
                                        <Name>{pizza.name}</Name>
                                        <Ingredients>Ingredientes: {pizza.ingredient}<br></br></Ingredients>
                                        <Price>R${pizza.price}</Price>
                                    </PizzaSmallDiv>
                                )
                            })}
                        </ContainerSmalls>
                        <Description>Pizzas Doces</Description>
                        <ContainerSmalls>
                            {pizzasDoces.map(function (pizza) {
                                return (
                                    <PizzaSmallDiv onClick={handleConfirm}><img src={pizza.image} />
                                        <Name>{pizza.name}</Name>
                                        <Ingredients>Ingredientes: {pizza.ingredient}<br></br></Ingredients>
                                        <Price>R${pizza.price}</Price>
                                    </PizzaSmallDiv>
                                )
                            })}
                        </ContainerSmalls>
                        <Description>Bebidas</Description>
                        <ContainerSmalls>
                            {drinks.map((drink) => {
                                return (
                                    <PizzaSmallDiv onClick={handleConfirm}><img src={drink.image} />
                                        <Name>{drink.name}</Name>
                                        <Price>R${drink.price}</Price>
                                    </PizzaSmallDiv>
                                )
                            })}
                        </ContainerSmalls>
                    </ContainerPizzas>
                </>
            }
        </>
    )
} export default Menu

