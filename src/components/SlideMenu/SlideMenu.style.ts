import styled from "styled-components";

export const StyledSlideMenu = styled.nav`
  background-color: var(--white);
  width: 100%;
  padding: 10px 0;
  border: 0 2px 2px 2px solid var(--gray-4);
  transition: transform 0.3s ease-in-out;

  position: fixed;
  top: 64px;
  z-index: 0;

  &.open {
    transform: translateY(0);
  }

  &.closed {
    transform: translateY(-150%);
  }

  .slide-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    height: 150px;
  }

  .slide-menu--open {
    display: flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 150px;
  }

  .slide-menu__element-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
`;
