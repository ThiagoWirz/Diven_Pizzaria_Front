
import styled from 'styled-components'
import Header from '../Header'
import { Link } from 'react-router-dom'
import promo from '../assets/combo-perfeito-pizza.jpg'
import promo2 from '../assets/promo2.jpg'

function Home() {
    return (
        <>
            <Header />
            <ContainerSelection>
                <Selector to='/menu'>Cardápio</Selector>
                <Selector to='/sales'>Promoções</Selector>
            </ContainerSelection>
            <ContainerSales>
                <ContainerSmalls>
                    <SaleSmall to="/sales"><img src={promo} /></SaleSmall>
                    <SaleSmall to="/sales"><img src={promo} /></SaleSmall>
                </ContainerSmalls>
                <ContainerLargers>
                    <SaleLarger to="/sales">
                        <img src={promo2} />
                    </SaleLarger>
                </ContainerLargers>
            </ContainerSales>
        </>
    )
} export default Home

const ContainerSelection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: #92D5F7;

    height: 60px;

    margin-bottom: 30px;
    margin-top: 60px;
`

const Selector = styled(Link)`
    all: unset;
    padding: 5px;
    color:#006491 ;
    font-size: 20px;
    font-weight: 700;
    border: 2px solid #006491;
    border-radius: 5px;
    background-color: #92D5F7;
`

const ContainerSales = styled.div`
    width: 100%;
    height: 100vh;

`
const ContainerSmalls = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 0 20px;
        gap: 10px;

`
const SaleSmall = styled(Link)`
    
    & img{
        border-radius: 5px;
        width: 150px;
        height: 150px;
    }

`
const ContainerLargers = styled.div`
    margin-top: 20px;

`
const SaleLarger = styled(Link)`
    & img{
        width: 89%;
        height: initial;
        border-radius: 5px;
        margin-left: 20px;
        margin-right: 20px;

    }

`



