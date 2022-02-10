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
  flex-direction: column;
  gap: 3px;
  h2 {
    font-weight: bold;
  }
`;

export { Container, Order, Product };
