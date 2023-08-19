import { MainProps } from "../../interfaces/MainProps";
import { StyledMain } from "./Main.style";

export const Main = ({ children }: MainProps) => {
  return <StyledMain>{children}</StyledMain>;
};
