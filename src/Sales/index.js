import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components"
import UserContext from "../contexts/userContext";
import Header from "../Header"
import { getSales } from '../services/dirvenpizzaria'
import CartContext from "../contexts/cartContext";



function Sales() {
    const [sales, setSales] = useState([])
    const { user, setUser } = useContext(UserContext);
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate()

    function Sales() {
        const promise = getSales();
        promise.then((res) => {
            setSales(res.data)
        })
        promise.catch((error) => {
            console.log(error.data)
        })

    }
    useEffect((Sales), [])

    function handleConfirm() {
        if (window.confirm("Por favor, faça o login ou cadastre-se")) {
            navigate("/sign-in")
        }
    }
    function addCart(id) {
        setCart([...cart, id])
    }

    return (
        <>
            <Header />
            <Container>
                <Description>Promoções</Description>
            </Container>
            {user ?
                <ContainerSmalls>
                    {sales.map(function (pizza) {
                        return (
                            <PizzaSmall onClick={() => addCart(pizza)}><img src={pizza.image} />
                                <Name>{pizza.name}</Name>
                                <Ingredients> {pizza.ingredient}<br></br></Ingredients>
                                <Price>R${pizza.price}</Price>
                            </PizzaSmall>
                        )
                    })}
                </ContainerSmalls>
                :
                <ContainerSmalls>
                    {sales.map(function (pizza) {
                        return (
                            <PizzaSmallDiv onClick={handleConfirm} ><img src={pizza.image} />
                                <Name>{pizza.name}</Name>
                                <Ingredients> {pizza.ingredient}<br></br></Ingredients>
                                <Price>R${pizza.price}</Price>
                            </PizzaSmallDiv>
                        )
                    })}
                </ContainerSmalls>


            }
        </>
    )
} export default Sales

const Container = styled.div`
    margin-top: 80px;

`
const Description = styled.div`
    margin-left: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 26px;
    font-weight: 700;
    color: #006491;
`
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
const PizzaSmallDiv = styled.div`
width: 150px;
display: flex;
flex-direction: column;


  & img {
    border-radius: 5px;
    width: 150px;
    height: 150px;
  }
`;