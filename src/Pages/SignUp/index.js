import {
  Container,
  Form,
  StyledInput,
  StyledButton,
  StyledLink,
  LinkBox,
} from "./style";
import logo from "../../assets/icone.jpg";
import { useState } from "react";
import { signUp } from "../../services/dirvenpizzaria";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleInputChange(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  function handleSignUp(e) {
    e.preventDefault();
    const promise = signUp(formData);
    promise.then(() => {
      navigate("/sign-in");
    });
    promise.catch((error) => {
      alert(error);
    });
  }

  return (
    <Container>
      <img src={logo} alt="driven" />
      <Form onSubmit={handleSignUp}>
        <StyledInput
          onChange={handleInputChange}
          value={formData.name}
          name="name"
          placeholder="Nome"
          type="text"
        />
        <StyledInput
          onChange={handleInputChange}
          value={formData.email}
          name="email"
          placeholder="Email"
          type="email"
        />
        <StyledInput
          onChange={handleInputChange}
          value={formData.password}
          name="password"
          placeholder="Senha"
          type="password"
        />
        <StyledButton>Cadastrar</StyledButton>
      </Form>
      <LinkBox>
        <StyledLink to="/sign-in">Já tem uma conta? Faça login!</StyledLink>
        <StyledLink to="/">Voltar para Home</StyledLink>
      </LinkBox>
    </Container>
  );
}
