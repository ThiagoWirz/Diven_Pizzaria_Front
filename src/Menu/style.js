import styled from "styled-components";

const ContainerPizzas = styled.div`
    width: 100%;
    margin-top: 100px;
    height: 100vh;
`;
const ContainerSmalls = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 20px;
    gap: 10px;
`;
const PizzaSmall = styled.div`
width: 150px;
display: flex;
flex-direction: column;


  & img {
    border-radius: 5px;
    width: 150px;
    height: 150px;
  }
`;
const Name = styled.div`
    margin-top: 5px;
    font-size: 17px;
    font-weight: 700;

`
const Ingredients = styled.div`
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: 16px;
    font-weight: 400;

`
const Price = styled.div`
    font-weight: 500;
`
const Description = styled.div`
    margin-left: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 26px;
    font-weight: 700;
    color: #006491;
`
export {
    Description,
    Price,
    Ingredients,
    Name,
    PizzaSmall,
    ContainerSmalls,
    ContainerPizzas
}