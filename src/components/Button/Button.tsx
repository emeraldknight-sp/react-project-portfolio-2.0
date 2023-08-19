import { ButtonProps } from "../../interfaces/ButtonProps";
import { StyledButton } from "./Button.style";

export const Button = ({
  children,
  size = "md",
  type = "text",
  color,
  onClick,
  className,
}: ButtonProps) => {
  const buttonClassName = `button--size-${size} button--${type} button--${color} ${
    className || ""
  }`;

  return (
    <StyledButton type="button" className={buttonClassName} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
