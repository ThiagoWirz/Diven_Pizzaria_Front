import logo from '../assets/icone.jpg'
import { User, Cart, Logo, ContainerRight, TopBar } from './style'

function Header() {
    return (
        <TopBar>
            <Logo to='/'><img src={logo} /></Logo>
            <ContainerRight>
                <Cart to='/cart'><ion-icon name="cart"></ion-icon></Cart>
                <User to="sign-in"><ion-icon name="person-sharp"></ion-icon></User>
            </ContainerRight>
        </TopBar>
    )
} export default Header

