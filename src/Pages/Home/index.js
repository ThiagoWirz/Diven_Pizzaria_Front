import Header from "../../Components/Header";
import UserContext from "../../contexts/userContext";
import { useContext, useEffect, useState } from "react";
import { getSales, getOrder } from "../../services/dirvenpizzaria";
import {
  SaleSmall,
  ContainerSmalls,
  ContainerSales,
  Selector,
  ContainerSelection,
  SaleSmallDiv,
  LastOrder,
} from "./style";
import { Product, Description } from "../Cart/style";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user } = useContext(UserContext);
  const [sales, setSales] = useState([]);
  const [lastOrder, setLastOrder] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      getLasOrder();
    }
  }, [user]);

  function getLasOrder() {
    const config = { headers: { Authorization: `Bearer ${user.token}` } };
    const promise = getOrder(config);
    promise.then((res) => {
      setLastOrder(res.data);
    });
    promise.catch((error) => {
      alert(error.data);
    });
  }

  function Sales() {
    const promise = getSales();
    promise.then((res) => {
      setSales(res.data);
    });
    promise.catch((error) => {
      alert(error.data);
    });
  }
  useEffect(Sales, []);

  function handleConfirm() {
    if (window.confirm("Por favor, faça o login ou cadastre-se")) {
      navigate("/sign-in");
    }
  }

  return (
    <>
      <Header />
      <ContainerSelection>
        <Selector to="/menu">Cardápio</Selector>
        <Selector to="/sales">Promoções</Selector>
      </ContainerSelection>
      {user ? (
        <ContainerSales>
          <h1>Bem-Vindo: {user.name}!</h1>
          {lastOrder.length !== 0 ? (
            <>
              <h1>Seu ultimo pedido:</h1>
              <LastOrder>
                {lastOrder.map((p, i) => (
                  <Product>
                    <img src={p.image} alt={p.name} />
                    <Description>
                      <h2>{p.name}</h2>
                    </Description>
                  </Product>
                ))}
              </LastOrder>{" "}
            </>
          ) : (
            <h1>Nenhum pedido realizado.</h1>
          )}

          <ContainerSmalls>
            {sales.map(function (sale) {
              return (
                <SaleSmall to="/sales">
                  <img src={sale.image} alt={sale.name} />
                </SaleSmall>
              );
            })}
          </ContainerSmalls>
        </ContainerSales>
      ) : (
        <ContainerSales>
          <h1>Bem-Vindo, por favor faça login!</h1>
          <ContainerSmalls>
            {sales.map(function (sale) {
              return (
                <SaleSmallDiv onClick={handleConfirm}>
                  <img src={sale.image} alt={sale.name} />
                </SaleSmallDiv>
              );
            })}
          </ContainerSmalls>
        </ContainerSales>
      )}
    </>
  );
}
export default Home;
