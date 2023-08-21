import Logo from "../../assets/profile.webp";
import { Button } from "../Button";
import { Container } from "../Container";
import { FiMenu, FiX } from "react-icons/fi";
import { MenuContext } from "../../context/MenuContext";
import { Navbar } from "../Navbar";
import { StyledHeader } from "./Header.style";
import { useContext } from "react";

export const Header = () => {
  const { open, handleClick } = useContext(MenuContext);

  return (
    <StyledHeader>
      <Container className="header__container">
        <div className="header__logo">
          <figure className="header__logo-figure">
            <img src={Logo} className="header__logo-image" alt="profile" />
          </figure>
          <span className="header__logo-text">David Almeida</span>
        </div>
        <Navbar />
        <Button size="sm" onClick={handleClick} className="button--header">
          <span>{!open ? <FiMenu size={24} /> : <FiX size={24} />}</span>
        </Button>
      </Container>
    </StyledHeader>
  );
};
