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
        <Button type="footer" size="sm" onClick={scrollToTop}>
          <MdOutlineKeyboardArrowUp size={32} />
        </Button>
      </Container>
    </StyledFooter>
  );
}