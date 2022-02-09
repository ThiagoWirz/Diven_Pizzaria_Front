import {
  Container,
  Form,
  StyledInput,
  StyledButton,
  StyledLink,
  LinkBox,
} from "./style";
import logo from "../assets/icone.jpg";

export default function SignUp() {
  return (
    <Container>
      <img src={logo} alt="driven" />
      <Form>
        <StyledInput placeholder="Nome" type="text" />
        <StyledInput placeholder="Email" type="email" />
        <StyledInput placeholder="Senha" type="password" />
        <StyledButton>Cadastrar</StyledButton>
      </Form>
      <LinkBox>
        <StyledLink to="/login">Já tem uma conta? Faça login!</StyledLink>
        <StyledLink to="/">Voltar para Home</StyledLink>
      </LinkBox>
    </Container>
  );
}
