import Header from '../Header'
import UserContext from '../contexts/userContext'
import { useContext, useEffect, useState } from 'react'
import { getSales } from '../services/dirvenpizzaria'
import { SaleSmall, ContainerSmalls, ContainerSales, Selector, ContainerSelection, SaleSmallDiv } from "./style"
import { useNavigate } from 'react-router-dom'



function Home() {
  const { user, setUser } = useContext(UserContext);
  const [sales, setSales] = useState([])
  const navigate = useNavigate();

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

  return (
    <>
      <Header />
      <ContainerSelection>
        <Selector to='/menu'>Cardápio</Selector>
        <Selector to='/sales'>Promoções</Selector>
      </ContainerSelection>
      {user ?
        <ContainerSales>
          <ContainerSmalls>
            {sales.map(function (sale) {
              return (
                <SaleSmall to="/sales"><img src={sale.image} /></SaleSmall>
              )
            })}
          </ContainerSmalls>
        </ContainerSales>
        :
        <ContainerSales>
          <ContainerSmalls>
            {sales.map(function (sale) {
              return (
                <SaleSmallDiv onClick={handleConfirm}><img src={sale.image} /></SaleSmallDiv>
              )
            })}
          </ContainerSmalls>
        </ContainerSales>



      }
    </>
  )
} export default Home


