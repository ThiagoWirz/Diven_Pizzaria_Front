import Header from '../Header'
import UserContext from '../contexts/userContext'
import { useContext, useEffect, useState } from 'react'
import { getSales } from '../services/dirvenpizzaria'
import { SaleSmall, ContainerSmalls, ContainerSales, Selector, ContainerSelection } from "./style"



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


