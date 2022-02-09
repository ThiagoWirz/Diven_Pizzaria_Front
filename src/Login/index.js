import {
  Container,
  Form,
  StyledInput,
  StyledButton,
  StyledLink,
  LinkBox,
} from "../SignUp/style";
import logo from "../assets/icone.jpg";

export default function Login() {
  return (
    <Container>
      <img src={logo} alt="driven" />
      <Form>
        <StyledInput placeholder="Email" type="email" />
        <StyledInput placeholder="Senha" type="password" />
        <StyledButton>Entrar</StyledButton>
      </Form>
      <LinkBox>
        <StyledLink to="/sign-up">Não tem uma conta? Cadastre-se!</StyledLink>
        <StyledLink to="/">Voltar para Home</StyledLink>
      </LinkBox>
    </Container>
  );
}
