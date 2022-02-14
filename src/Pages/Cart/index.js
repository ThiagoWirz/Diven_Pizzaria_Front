import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../contexts/cartContext";
import UserContext from "../../contexts/userContext";
import Header from "../../Components/Header";
import { postOrder } from "../../services/dirvenpizzaria";
import {
  Container,
  Order,
  Product,
  FinalPrice,
  ConfirmButton,
  Description,
  RemoveButton,
  InfoInputs,
  BigInput,
  SmallInput,
  Form,
} from "./style";

export default function CartPage() {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [total, setTotal] = useState("");
  const [formData, setFormData] = useState({
    street: "",
    number: "",
    compliment: "",
    payment: "",
    cart,
  });
  const navigate = useNavigate();
  const config = { headers: { Authorization: `Bearer ${user.token}` } };

  function handleInputChange(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  function calcTotal() {
    let sum = 0;
    for (const product of cart) {
      let priceNumber = product.price.replace(",", ".");
      priceNumber = parseFloat(priceNumber);
      sum += priceNumber;
    }
    let sumString = String(sum.toFixed(2));
    sumString = sumString.replace(".", ",");
    setTotal(sumString);
  }

  useEffect(calcTotal, [cart]);
  function removeItem(i) {
    if (window.confirm("Gostaria de remover esse item?")) {
      cart.splice(i, 1);
      setCart([...cart]);
    }
  }

  function confirmOrder(e) {
    e.preventDefault();
    const promise = postOrder(formData, config);
    promise.then(() => {
      alert("Pedido feito com sucesso");
      setCart([]);
      navigate("/");
    });
    promise.catch((error) => {
      alert(error);
    });
  }

  return (
    <>
      <Header />
      <Container>
        <Order>
          <h1>Seu pedido:</h1>
          {cart.length === 0 ? (
            <h1>Nenhum produto selecionado</h1>
          ) : (
            cart.map((p, i) => (
              <Product>
                <img src={p.image} alt={p.name} />
                <Description>
                  <h2>{p.name}</h2>
                  <h3>R$ {p.price}</h3>{" "}
                </Description>
                <RemoveButton onClick={() => removeItem(i)}>X</RemoveButton>
              </Product>
            ))
          )}
          {cart.length !== 0 && (
            <FinalPrice>Valor final : R$ {total}</FinalPrice>
          )}
        </Order>

        {cart.length !== 0 ? (
          <Form onSubmit={confirmOrder}>
            <InfoInputs>
              <p>Rua:</p>
              <BigInput
                onChange={handleInputChange}
                value={formData.street}
                name="street"
                placeholder="Rua"
                type="text"
              />
              <p>Número:</p>
              <SmallInput
                onChange={handleInputChange}
                value={formData.number}
                name="number"
                placeholder="Número"
                type="number"
              />
              <p>Complemento:</p>
              <SmallInput
                onChange={handleInputChange}
                value={formData.compliment}
                name="compliment"
                placeholder="Complemento"
                type="text"
              />
              <p>Forma de Pagamento:</p>
              <div>
                <input
                  onChange={handleInputChange}
                  type="radio"
                  name="payment"
                  id="cash"
                  value="cash"
                />
                <label htmlFor="cash">Dinheiro</label>
              </div>
              <div>
                <input
                  onChange={handleInputChange}
                  type="radio"
                  name="payment"
                  id="credit-card"
                  value="credit-card"
                />
                <label htmlFor="credit-card">Cartão de Crédito</label>
              </div>
              <div>
                <input
                  onChange={handleInputChange}
                  type="radio"
                  name="payment"
                  id="debit-cart"
                  value="debit-cart"
                />
                <label htmlFor="debit-card">Cartão de Débito</label>
              </div>
              <div>
                <input
                  onChange={handleInputChange}
                  type="radio"
                  name="payment"
                  id="pix"
                  value="pix"
                />
                <label htmlFor="pix">Pix</label>
              </div>
            </InfoInputs>

            <ConfirmButton>Confirmar Pedido</ConfirmButton>
          </Form>
        ) : (
          <ConfirmButton onClick={() => navigate(-1)}> Voltar</ConfirmButton>
        )}
      </Container>
    </>
  );
}
