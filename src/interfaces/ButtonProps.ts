export interface ButtonProps {
  children: React.ReactNode;
  size?: "default" | "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "disabled";
  onClick?: () => void;
  className?: string;
}
