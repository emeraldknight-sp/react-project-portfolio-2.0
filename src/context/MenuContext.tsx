import { createContext, useState } from "react";
import { MenuContextProps, MenuProviderProps } from "../interfaces/MenuProps";

export const MenuContext = createContext<MenuContextProps>({
  open: false,
  handleClick: () => 0,
});

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const contextValue = {
    open,
    handleClick,
  };

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};
