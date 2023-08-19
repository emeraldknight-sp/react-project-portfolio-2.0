import { createContext } from "react";
import { ProjectsContextProps, ProjectsProviderProps } from "../interfaces/ProjectsProps";

export const ProjectsContext = createContext<ProjectsContextProps[]>([]);

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const projects = [
    {
      name: "Pokenext | APIs",
      urlVercel: "https://next-pokenext.vercel.app/",
      urlGitHub: "https://github.com/emeraldknight-sp/next-pokenext",
      techs: ["Next", "React", "React-icons", "CSS Modules", "Sharp"],
      description:
        "Um projeto incrível consumindo uma API com dados de Pokemons!",
    },
    {
      name: "Mundo Invertido | Switch Mode",
      urlVercel: "https://semana-frontend-mundo-invertido-nine.vercel.app/",
      urlGitHub:
        "https://github.com/emeraldknight-sp/semana-frontend-mundo-invertido",
      techs: ["HTML5", "CSS3", "JS"],
      description: "Um site temático com uma newsletter usando HTML, CSS e JS.",
    },
    {
      name: "Project Burguer | e-Commerce",
      urlVercel: "https://react-ecommerce-kenzie-burguer.vercel.app",
      urlGitHub:
        "https://github.com/emeraldknight-sp/react-ecommerce-kenzie-burguer",
      techs: [
        "React",
        "React-dom",
        "React-hook-form",
        "React-router-dom",
        "Styled-components",
        "Yup",
      ],
      description:
        "Um e-commerce feito com React para testar habilidades de componentização!",
    },
    {
      name: "Rocket Pay | Logic",
      urlVercel: "https://react-add-payment-method.vercel.app/",
      urlGitHub: "https://github.com/emeraldknight-sp/react-add-payment-method",
      techs: [
        "React",
        "React-imask",
        "React-toastify",
        "Styled-components",
        "Yup",
      ],
      description:
        "Um incrível projeto para testar novas tecnologias criando uma interface para adicionar um método de pagamento.",
    },
    {
      name: "Project Weather | Weather App",
      urlVercel: "https://react-project-weather.vercel.app/",
      urlGitHub: "https://github.com/emeraldknight-sp/react-project-weather",
      techs: ["React", "Styled-Components", "Axios", "Typescript"],
      description:
        "Um projeto para trabalhar com a previsão do tempo utilizando React.JS, Styled Components e o consumo de APIs!",
    },
    {
      name: "Project HablaMucho | Learning Language",
      urlVercel: "https://next-project-habla-mucho.vercel.app/",
      urlGitHub: "https://github.com/emeraldknight-sp/next-project-habla-mucho",
      techs: [
        "Next",
        "TailwindCSS",
        "Typescript",
        "Context API",
        "Firebase",
        "Moment.js",
      ],
      description:
        "Um projeto desenvolvido para aprendizado de novos idiomas feito com Next.js, Tailwind CSS e consumo de dados pelo Firebase, um banco de dados NoSQL.",
    },
  ];

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
};
