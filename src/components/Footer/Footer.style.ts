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

  .footer-button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    transform: translate(-50%, -50%);
    background-color: var(--brand-1);
    border: 1px solid var(--white);
    color: var(--white);
    border-radius: 50%;
    cursor: pointer;

    position: relative;
    bottom: 125%;
    left: 50%;
  }
`;
