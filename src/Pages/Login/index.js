import {
  Container,
  Form,
  StyledInput,
  StyledButton,
  StyledLink,
  LinkBox,
} from "../SignUp/style";
import logo from "../../assets/icone.jpg";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { sigIn } from "../../services/dirvenpizzaria";
import UserContext from "../../contexts/userContext";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  function handleInputChange(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  function handleSignIn(e) {
    e.preventDefault();
    const promise = sigIn(formData);
    promise.then((response) => {
      setUser(response.data);
      localStorage.setItem("last-user", JSON.stringify(response.data));
      navigate("/");
    });
    promise.catch((error) => {
      alert(error);
    });
  }

  return (
    <Container>
      <img src={logo} alt="driven" />
      <Form onSubmit={handleSignIn}>
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
        <StyledButton>Entrar</StyledButton>
      </Form>
      <LinkBox>
        <StyledLink to="/sign-up">Não tem uma conta? Cadastre-se!</StyledLink>
        <StyledLink to="/">Voltar para Home</StyledLink>
      </LinkBox>
    </Container>
  );
}
