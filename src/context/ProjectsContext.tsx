import { createContext } from "react";
import {
  ProjectsContextProps,
  ProjectsProviderProps,
} from "../interfaces/ProjectsProps";

export const ProjectsContext = createContext<ProjectsContextProps[]>([]);

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const projects = [
    {
      name: "Cineverse | Streaming",
      urlVercel: "https://react-project-cineverse.vercel.app",
      urlGitHub: "https://github.com/emeraldknight-sp/react-project-cineverse",
      techs: ["React", "Emotion", "React-icons"],
      description:
        "Um website desenhado para exibir informações consumidas de uma base de dados de filmes, séries e animações, emula uma plataforma de streaming.",
    },
    {
      name: "The Mandalorian | APIs",
      urlVercel: "https://next-project-the-mandalorian.vercel.app",
      urlGitHub:
        "https://github.com/emeraldknight-sp/next-project-the-mandalorian",
      techs: ["Next", "SASS", "React-icons", "React-lottie"],
      description:
        "Um projeto front-end que faz uso do consumo de API para mostrar dados dinâmicamente ao visitante!",
    },
    {
      name: "Metin 2 | SEO",
      urlVercel: "https://next-project-metin2.vercel.app",
      urlGitHub: "https://github.com/emeraldknight-sp/next-project-metin2",
      techs: ["Next", "Tailwind CSS", "React-icons"],
      description:
        "Um website feito com um poderoso framework de desenvolvimento web voltado para alto desempenho e ranqueamento no SEO.",
    },
    {
      name: "One Piece | Reatividade",
      urlVercel: "https://react-project-one-piece.vercel.app",
      urlGitHub: "https://github.com/emeraldknight-sp/react-project-one-piece",
      techs: ["React", "Styled-components", "Typescript"],
      description:
        "Um projeto front-end feito para aprensentar informações de acordo com a interação do usuário apresentando informações de forma dinâmica e instantânea!",
    },
    {
      name: "Mundo Invertido | Switch Mode",
      urlVercel: "https://react-project-stranger-things.vercel.app/",
      urlGitHub:
        "https://github.com/emeraldknight-sp/react-project-stranger-things",
      techs: [
        "React",
        "SASS",
        "CSS Modules",
        "React-hot-toast",
        "Firebase Firestore",
      ],
      description:
        "Um website incrível feito com React estilizado pela combincação de SASS com CSS Modules para aprensentar a série Stranger Things e colher leads através de um formulário que envia dados ao Firestore.",
    },
    {
      name: "Project Weather | Weather App",
      urlVercel: "https://react-project-weather.vercel.app/",
      urlGitHub: "https://github.com/emeraldknight-sp/react-project-weather",
      techs: ["React", "Styled-Components", "Axios", "Typescript"],
      description:
        "Um projeto para trabalhar com a previsão do tempo utilizando React.JS, Styled Components e o consumo de APIs!",
    },
    // {
    //   name: "Project HablaMucho | Learning Language",
    //   urlVercel: "https://next-project-habla-mucho.vercel.app/",
    //   urlGitHub: "https://github.com/emeraldknight-sp/next-project-habla-mucho",
    //   techs: [
    //     "Next",
    //     "TailwindCSS",
    //     "Typescript",
    //     "Context API",
    //     "Firebase",
    //     "Moment.js",
    //   ],
    //   description:
    //     "Um projeto desenvolvido para aprendizado de novos idiomas feito com Next.js, Tailwind CSS e consumo de dados pelo Firebase, um banco de dados NoSQL.",
    // },
  ];

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
};
