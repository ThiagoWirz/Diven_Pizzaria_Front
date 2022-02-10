import { useContext, useEffect, useState } from "react";
import CartContext from "../contexts/cartContext";
import Header from "../Header";
import { Container, Order, Product } from "./style";

export default function CartPage() {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  function calcTotal() {
    let sum = 0;
    for (const product of cart) {
      let priceNumber = product.price.replace(",", ".");
      priceNumber = parseFloat(priceNumber);
      sum += priceNumber;
    }
    setTotal(sum.toFixed(2));
  }

  useEffect(calcTotal, []);

  return (
    <>
      <Header />
      <Container>
        <Order>
          {cart.length === 0 ? (
            <h1>Nenhum produto selecionado</h1>
          ) : (
            cart.map((p) => (
              <Product>
                {" "}
                <h2>{p.name}</h2>
                <h3>R$ {p.price}</h3>{" "}
              </Product>
            ))
          )}
          {/* {cart.length !== 0 && (
            <Total>
              <h1></h1>
            </Total>
          )} */}
          {total}
        </Order>

        {/* <ConfirmButton>Finalizar Pedido</ConfirmButton> */}
      </Container>
    </>
  );
}
