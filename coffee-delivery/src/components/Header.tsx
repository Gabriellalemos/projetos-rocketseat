import logo from "../assets/Logo.svg";
import location from "../assets/Location.svg";
import cart from "../assets/Cart.svg";
import { CardContainer, HeaderContainer } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} height="40px" alt="Logo" />
      <CardContainer>
        <img src={location} alt="Location" />
        <img src={cart} alt="Cart" />
      </CardContainer>
    </HeaderContainer>
  );
}

export default Header;
