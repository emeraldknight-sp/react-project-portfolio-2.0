import { Container } from "../Container";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { scrollToTop } from "../../utils/scrollToTop";
import { StyledFooter } from "./Footer.style";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p className="footer-text">👋 Obrigado por acessar!</p>
        <button type="button" className="footer-button" onClick={scrollToTop}>
          <MdOutlineKeyboardArrowUp size={32} />
        </button>
      </Container>
    </StyledFooter>
  );
}