import { ButtonProps } from "../../interfaces/ButtonProps";
import { StyledButton } from "./Button.style";

export const Button = ({
  children,
  size = "default",
  color = "default",
  onClick,
  className,
}: ButtonProps) => {
  const buttonClassName = `button--size-${size} button--${color} ${
    className || ""
  }`;

  return (
    <StyledButton type="button" className={buttonClassName} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
