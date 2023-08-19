import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { StyledSlideMenu } from "./SlideMenu.style";
import { Container } from "../Container";
import { Button } from "../Button";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

export const SlideMenu = () => {
  const { open } = useContext(MenuContext);

  return (
    <StyledSlideMenu className={open ? "open" : "closed"}>
      <Container>
        <div className="slide-menu">
          <div className="slide-menu__element-group">
            <Button size="md" type="icon">
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
            <Button size="md" type="icon">
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
            <Button size="md" type="icon">
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
          </div>
          <Button size="lg" type="contained">
            <a
              href="https://api.whatsapp.com/send?phone=5586988641961&text=Ol%C3%A1%20David%2C%20tudo%20bem%3F%20"
              className="slide-menu__button-link"
            >
              <span>Falar no WhatsApp</span>
            </a>
          </Button>
        </div>
      </Container>
    </StyledSlideMenu>
  );
};
