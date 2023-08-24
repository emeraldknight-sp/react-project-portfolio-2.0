import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { Button } from "../Button";
import { StyledNavbar } from "./Navbar.style";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Button>
        <a
          href="https://github.com/emeraldknight-sp"
          className="slide-menu__button-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <SiGithub size={20} />
          </span>
        </a>
      </Button>
      <Button>
        <a
          href="https://www.instagram.com/davidalmeidadev/"
          className="slide-menu__button-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <SiInstagram size={20} />
          </span>
        </a>
      </Button>
      <Button>
        <a
          href="https://www.linkedin.com/in/davidalmeidadev"
          className="slide-menu__button-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <SiLinkedin size={20} />
          </span>
        </a>
      </Button>
      <Button size="md" color="primary">
        <a
          href="https://api.whatsapp.com/send?phone=5586988641961&text=Ol%C3%A1%20David%2C%20tudo%20bem%3F%20"
          className="slide-menu__button-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Falar no WhatsApp</span>
        </a>
      </Button>
    </StyledNavbar>
  );
};
