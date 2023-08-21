import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }
`;