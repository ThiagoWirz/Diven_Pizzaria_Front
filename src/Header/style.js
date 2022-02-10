import styled from "styled-components";
import { Link } from "react-router-dom";

const TopBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: #006491;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
`;

const ContainerRight = styled.div`
  width: 100px;
  display: flex;
  gap: 20px;
`;
const Logo = styled(Link)`
  margin-left: 20px;
  & img {
    width: 40px;
    height: 40px;

    border-radius: 60px;
  }
`;

const Cart = styled(Link)`
  & ion-icon {
    color: gray;
    font-size: 30px;
  }
`;
const User = styled.button`
  all: unset;
  & ion-icon {
    color: gray;
    font-size: 30px;
  }
`;

const Counter = styled.div`
  height: 16px;
  width: 16px;
  background-color: red;
  color: white;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    text-align: center;
    font-size: 12px;
  }
`;

export { User, Cart, Logo, ContainerRight, TopBar, Counter };
