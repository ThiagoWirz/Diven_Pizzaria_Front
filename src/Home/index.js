
import styled from 'styled-components'
import Header from '../Header'
import { Link } from 'react-router-dom'
import UserContext from '../contexts/userContext'
import { useContext, useEffect, useState } from 'react'
import { getSales } from '../services/dirvenpizzaria'



function Home() {
    const { user, setUser } = useContext(UserContext);
    const [sales, setSales] = useState([])

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



    return (
        <>
            <Header />
            <ContainerSelection>
                <Selector to='/menu'>Cardápio</Selector>
                <Selector to='/sales'>Promoções</Selector>
            </ContainerSelection>
            <ContainerSales>
                <ContainerSmalls>
                    {sales.map(function (sale) {
                        return (
                            <SaleSmall to="/sales"><img src={sale.image} /></SaleSmall>
                        )
                    })}
                </ContainerSmalls>
            </ContainerSales>
        </>
    )
} export default Home


const ContainerSelection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: #92d5f7;

  height: 60px;

  margin-bottom: 30px;
  margin-top: 60px;
`;

const Selector = styled(Link)`
  all: unset;
  padding: 5px;
  color: #006491;
  font-size: 20px;
  font-weight: 700;
  border: 2px solid #006491;
  border-radius: 5px;
  background-color: #92d5f7;
`;

const ContainerSales = styled.div`
  width: 100%;
  height: 100vh;
`;
const ContainerSmalls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 20px;
  gap: 10px;
`;
const SaleSmall = styled(Link)`
  & img {
    border-radius: 5px;
    width: 150px;
    height: 150px;
  }
`;
