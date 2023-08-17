import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--gray-4);
  text-align: center;
  padding: 10px 0;

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .header__logo-figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header__logo-image {
    border: 1px solid transparent;
    border-radius: 9999px;
    width: 2.25rem;
    height: 2.25rem;
  }

  .header__logo-text {
    line-height: var(--line-height-md);
    font-family: var(--ibm-tipography);
    font-size: var(--text-md);
    font-weight: 600;
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header__menu-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: #333;
  }
`;
