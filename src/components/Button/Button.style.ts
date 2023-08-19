import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  height: 48px;
  padding: 8px 24px;
  border: 2px solid var(--gray-5);
  border-radius: 8px;

  font-size: var(--text-md);
  font-family: var(--inter-tipography);
  font-weight: 600;
  line-height: var(--line-height-md);

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

  &.button--contained,
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

  &.button--text {
    background-color: var(--transparent);
    border: 2px solid var(--transparent);

    span,
    p {
      color: var(--gray-1);
    }

    &:hover {
      background-color: var(--gray-5);
    }
  }

  &.button--icon {
    background-color: var(--white);
    border: 1px solid var(--gray-5);
    width: 48px;
    height: 48px;

    span,
    p {
      color: var(--gray-1);
    }

    &:hover {
      background-color: var(--gray-5);
    }
  }

  &.button--footer {
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
    outline: none;

    position: relative;
    bottom: 125%;
    left: 50%;
  }

  &.button--outlined {
    background-color: var(--white);
    border: 2px solid var(--gray-5);

    span,
    p {
      color: var(--gray-1);
    }

    &:hover {
      background-color: var(--gray-5);
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

  &.button--tertiary {
    background-color: var(--white);
    border: 2px solid var(--white);

    span,
    p {
      color: var(--gray-1);
    }

    &:hover {
      background-color: var(--gray-5);
      border: 2px solid var(--gray-5);
    }
  }

  &.button--size-sm {
    padding: 5px;
    font-size: var(--text-sm);
  }

  &.button--size-md {
    width: 50%;
  }

  &.button--size-lg {
    width: 100%;
    padding: 10px;
    font-size: var(--text-lg);

    @media (min-width: 1024px) {
      width: 50%;
    }
  }
`;
