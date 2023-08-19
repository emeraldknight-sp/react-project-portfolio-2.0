export interface ProjectsContextProps {
  name: string;
  urlVercel: string;
  urlGitHub: string;
  techs: string[];
  description: string;
}

export interface ProjectsProviderProps {
  children: React.ReactNode;
}
