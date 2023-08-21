import { Container } from "../Container";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { scrollToTop } from "../../utils/scrollToTop";
import { StyledFooter } from "./Footer.style";
import { Button } from "../Button";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p className="footer-text">👋 Obrigado por acessar!</p>
        <Button
          onClick={scrollToTop}
          className="button--footer"
        >
          <span>
            <MdOutlineKeyboardArrowUp size={32} />
          </span>
        </Button>
      </Container>
    </StyledFooter>
  );
};
