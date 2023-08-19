import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--brand-1);
  color: var(--white);
  width: 100%;
  height: 96px;
  margin-top: 54px;
  padding-top: 42px;

  position: absolute;

  .footer-text {
    font-size: var(--text-md);
    font-family: var(--inter-tipography);
    font-weight: 600;
    line-height: var(--line-height-md);
  }

  
`;
