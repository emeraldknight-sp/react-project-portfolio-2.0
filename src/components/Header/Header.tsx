import { FiMenu } from "react-icons/fi";
import { Container } from "../Container";
import { StyledHeader } from "./Header.style";
import Logo from "../../assets/profile.webp";

export const Header = () => {
  return (
    <StyledHeader>
      <Container className="header__container">
        <div className="header__logo">
          <figure className="header__logo-figure">
            <img src={Logo} className="header__logo-image" alt="profile" />
          </figure>
          <span className="header__logo-text">David Almeida</span>
        </div>
        <button type="button" className="header__menu-button center">
          <FiMenu />
        </button>
      </Container>
    </StyledHeader>
  );
}