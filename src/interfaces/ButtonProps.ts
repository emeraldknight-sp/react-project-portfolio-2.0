export interface ButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  type?: "text" | "contained" | "outlined" | "icon";
  color?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  className?: string;
}
