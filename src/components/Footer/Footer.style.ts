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

  .button--footer {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--brand-1);
    border: 2px solid var(--white);
    
    transform: translate(-50%, -50%);
    border: 1px solid var(--white);
    border-radius: 50%;
    
    position: relative;
    bottom: 125%;
    left: 50%;
    
    span {
      color: var(--white);
    }

    &:hover {
      background-color: var(--brand-2);
      border: 1px solid var(--white);
    }
  }
`;
