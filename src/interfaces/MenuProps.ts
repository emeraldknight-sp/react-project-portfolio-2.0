export interface MenuContextProps {
  open: boolean;
  handleClick: () => void;
}

export interface MenuProviderProps {
  children: React.ReactNode;
}
