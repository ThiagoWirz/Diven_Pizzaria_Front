import { useContext } from "react";
import CartContext from "../contexts/cartContext";
import Header from "../Header";

export default function CartPage() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <Header />
      <Container></Container>
    </>
  );
}
