import styled from "styled-components";

const Container = styled.div`
  padding-top: 60px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Order = styled.div`
  margin-top: 30px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
`;

const Product = styled.div`
  text-align: left;
  width: 90%;
  display: flex;
  gap: 3px;
  h2 {
    font-weight: bold;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;

const FinalPrice = styled.div`
  margin: 20px 0px;
  font-weight: bold;
`;

const ConfirmButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 15px;
  background-color: #92d5f7;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  justify-content: center;
`;

export { Container, Order, Product, FinalPrice, ConfirmButton, Description };
