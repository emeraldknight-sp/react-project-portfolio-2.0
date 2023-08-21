import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 8px;

  font-size: var(--text-xs);
  font-family: var(--inter-tipography);
  font-weight: 600;
  line-height: var(--line-height-xs);

  transition: background-color 0.3s, color 0.3s;

  outline: none;
  cursor: pointer;

  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  &.button--default {
    background-color: var(--white);
    border: 2px solid var(--gray-5);

    span,
    p {
      color: var(--gray-1);
    }

    &:hover {
      background-color: var(--gray-5);
      border: 2px solid var(--gray-5);
    }
  }

  &.button--primary {
    background-color: var(--brand-1);
    border: 2px solid var(--brand-1);

    span,
    p {
      color: var(--white);
    }

    &:hover {
      background-color: var(--brand-2);
      border: 2px solid var(--brand-2);
    }
  }

  &.button--secondary {
    background-color: var(--brand-4);
    border: 2px solid var(--brand-4);

    span,
    p {
      color: var(--brand-1);
    }

    &:hover {
      background-color: var(--brand-3);
      border: 2px solid var(--brand-3);
    }
  }

  &.button--disabled {
  }

  &.button--size-sm {
    width: 48px;
    height: 48px;
    padding: 5px;
    font-size: var(--text-sm);
  }

  &.button--size-md {
    width: 50%;
    height: 48px;
    font-size: var(--text-md);
  }

  &.button--size-lg {
    width: 100%;
    height: 48px;
    padding: 10px;
    font-size: var(--text-lg);

    @media (min-width: 1024px) {
      width: 50%;
    }
  }
`;
