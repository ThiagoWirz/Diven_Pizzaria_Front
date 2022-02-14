import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #006491;

  img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin-bottom: 30px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledInput = styled.input`
  all: unset;
  box-sizing: border-box;

  width: 98%;
  height: 30px;
  padding: 18px;

  border-radius: 5px;
  background-color: #ffffff;

  color: #000000;
  ::placeholder {
    color: #777777;
  }
`;

const StyledButton = styled.button`
  border: none;
  text-align: center;
  width: 98%;
  height: 30px;
  border-radius: 5px;
  background-color: #92d5f7;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 15px;
  text-align: center;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 5px;
`;

export { Container, Form, StyledInput, StyledButton, StyledLink, LinkBox };
