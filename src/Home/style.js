import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerSelection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: #92d5f7;

  height: 60px;

  margin-bottom: 30px;
  margin-top: 60px;
`;

const Selector = styled(Link)`
  all: unset;
  padding: 5px;
  color: #006491;
  font-size: 20px;
  font-weight: 700;
  border: 2px solid #006491;
  border-radius: 5px;
  background-color: #92d5f7;
`;

const ContainerSales = styled.div`
  width: 100%;
  height: auto;
`;
const ContainerSmalls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 20px;
  gap: 10px;
`;
const SaleSmall = styled(Link)`
  & img {
    border-radius: 5px;
    width: 150px;
    height: 150px;
  }
`;

const SaleSmallDiv = styled.div`
  & img {
    border-radius: 5px;
    width: 150px;
    height: 150px;
  }
`;
export {
  SaleSmall,
  ContainerSmalls,
  ContainerSales,
  Selector,
  ContainerSelection,
  SaleSmallDiv,
};
