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
  align-items: center;
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
  margin-top: 20px;
  font-weight: bold;
`;

const ConfirmButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 15px;
  background-color: #92d5f7;
  margin: 20px 0px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  justify-content: center;
`;

const RemoveButton = styled.button`
  border: none;
  position: absolute;
  margin-left: 20px;
  right: 20px;
`;

const InfoInputs = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 30px;
  text-align: left;
  gap: 10px;
  margin: 0px 10px;
`;

const BigInput = styled.input`
  all: unset;
  box-sizing: border-box;

  width: 98%;
  height: 30px;
  padding: 18px;

  border: solid 1px #aaaaaa;
  background-color: #ffffff;
  border-radius: 5px;
  background-color: #ffffff;

  color: #000000;
  ::placeholder {
    color: #777777;
  }
`;

const SmallInput = styled.input`
  all: unset;
  box-sizing: border-box;

  width: 60%;
  height: 30px;
  padding: 18px;

  border-radius: 5px;
  border: solid 1px #aaaaaa;
  background-color: #ffffff;

  color: #000000;
  ::placeholder {
    color: #777777;
  }
`;
const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 90%;
  p {
    font-weight: bold;
  }
`;

export {
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
};
