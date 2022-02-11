import logo from "../assets/icone.jpg";
import { User, Cart, Logo, ContainerRight, TopBar, Counter } from "./style";
import UserContext from "../contexts/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../contexts/cartContext";

function Header() {
  const { user, setUser } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  function handleLogOut() {
    if (!user) {
      navigate("/sign-in");
    } else {
      if (
        window.confirm("Você já está logado, gostaria de sair deste usuário?")
      ) {
        localStorage.setItem("last-user", null);
        setUser(null);
        setCart([]);
        navigate("/sign-in");
      }
    }
  }
  return (
    <TopBar>
      <Logo to="/">
        <img src={logo} />
      </Logo>
      <ContainerRight>
        {user && (
          <Cart to="/cart">
            <Counter>
              <span>{cart.length}</span>
            </Counter>
            <ion-icon name="cart"></ion-icon>
          </Cart>
        )}

        <User onClick={handleLogOut}>
          <ion-icon name="person-sharp"></ion-icon>
        </User>
      </ContainerRight>
    </TopBar>
  );
}
export default Header;
