import {
  StyledPresentationSection,
  StyledProjectsSection,
  StyledTechnologiesSection,
} from "./App.style";

import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { FaGithub, FaShare } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiCssmodules,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
  SiTypescript,
  SiPostgresql,
  SiExpress,
  SiMui,
  SiBem,
  SiFigma,
  SiGit,
  SiGithub,
  SiYarn,
  SiPrettier,
  SiEslint,
  SiMarkdown,
  SiVercel,
} from "react-icons/si";

export const App = () => {
  const technologies = [
    {
      name: "HTML",
      icon: <SiHtml5 />,
    },
    {
      name: "CSS",
      icon: <SiCss3 />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript />,
    },
    {
      name: "React",
      icon: <SiReact />,
    },
    {
      name: "Next",
      icon: <SiNextdotjs />,
    },
    {
      name: "Styled Components",
      icon: <SiStyledcomponents />,
    },
    {
      name: "CSS Modules",
      icon: <SiCssmodules />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Material UI",
      icon: <SiMui />,
    },
    {
      name: "CSS BEM",
      icon: <SiBem />,
    },
    {
      name: "Node",
      icon: <SiNodedotjs />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      name: "Express.JS",
      icon: <SiExpress />,
    },
    {
      name: "Figma",
      icon: <SiFigma />,
    },

    {
      name: "Git",
      icon: <SiGit />,
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
    },
    {
      name: "Yarn",
      icon: <SiYarn />,
    },
    {
      name: "Prettier",
      icon: <SiPrettier />,
    },
    {
      name: "ESLint",
      icon: <SiEslint />,
    },

    {
      name: "Markdown",
      icon: <SiMarkdown />,
    },

    {
      name: "Vercel",
      icon: <SiVercel />,
    },
  ];

  const projects = [
    {
      name: "Pokenext | APIs",
      urlVercel: "https://next-pokenext.vercel.app/",
      urlGitHub: "https://github.com/emeraldknight-sp/next-pokenext",
      technologies: ["Next", "React", "React-icons", "CSS Modules", "Sharp"],
      description:
        "Um projeto incrível consumindo uma API com dados de Pokemons!",
    },
    {
      name: "Mundo Invertido | Switch Mode",
      urlVercel: "https://semana-frontend-mundo-invertido-nine.vercel.app/",
      urlGitHub:
        "https://github.com/emeraldknight-sp/semana-frontend-mundo-invertido",
      technologies: ["HTML5", "CSS3", "JS"],
      description: "Um site temático com uma newsletter usando HTML, CSS e JS.",
    },
    {
      name: "Project Burguer | e-Commerce",
      urlVercel: "https://react-ecommerce-kenzie-burguer.vercel.app",
      urlGitHub:
        "https://github.com/emeraldknight-sp/react-ecommerce-kenzie-burguer",
      technologies: [
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
      technologies: [
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
      technologies: ["React", "Styled-Components", "Axios", "Typescript"],
      description:
        "Um projeto para trabalhar com a previsão do tempo utilizando React.JS, Styled Components e o consumo de APIs!",
    },
    {
      name: "Project HablaMucho | Learning Language",
      urlVercel: "https://next-project-habla-mucho.vercel.app/",
      urlGitHub: "https://github.com/emeraldknight-sp/next-project-habla-mucho",
      technologies: [
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
    <div>
      <Header />
      <main>
        <StyledPresentationSection>
          <Container>
            <article className="presentation__article">
              <div className="presentation__article-text-group">
                <h2 className="presentation__article-title">
                  Desenvolvendo soluções por meio da tecnologia para o futuro
                </h2>
                <p className="presentation__article-paragraph">
                  Sou um entusiasta do desenvolvimento em constante aprendizado.
                  Minha paixão é criar soluções modernas com foco na
                  usabilidade, design e performance. Busco criar experiências
                  incríveis para os usuários, equilibrando funcionalidade e
                  estética. Estou comprometido em aprimorar minhas habilidades e
                  aplicá-las em projetos significativos.
                </p>
              </div>
              <div className="presentation__article-button-group">
                <button
                  type="button"
                  className="presentation__article-button presentation__article-button--contained"
                >
                  <p className="presentation__article-button-text">Projetos</p>
                </button>
                <button
                  type="button"
                  className="presentation__article-button presentation__article-button--text"
                >
                  <p className="presentation__article-button-text">
                    Tecnologias
                  </p>
                </button>
              </div>
            </article>
          </Container>
        </StyledPresentationSection>
        <StyledTechnologiesSection>
          <Container>
            <article className="technologies__article">
              <h3 className="technologies__article-title">
                Ferramentas que domino
              </h3>
              <ul className="technologies__article-list-item">
                {technologies.map((element, index) => (
                  <li key={index} className="technologies__article-item">
                    {element.icon}
                  </li>
                ))}
              </ul>
            </article>
          </Container>
        </StyledTechnologiesSection>
        <StyledProjectsSection>
          <Container>
            <article className="projects__article">
              <h5 className="projects__article-title">Projetos</h5>
              <p className="projects__article-description">
                Originalidade e <span>dedicação</span> em cada detalhe
              </p>
              <ul className="projects__article-item-list">
                {projects.map((element, index) => (
                  <li key={index} className="projects__article-item">
                    <h6 className="projects__article-item__title">
                      {element.name}
                    </h6>
                    <div className="projects__article-item__languages">
                      <p>Tecnologias:</p>
                      {element.technologies.map((element, index) => (
                        <span key={index}>{element}</span>
                      ))}
                    </div>
                    <p className="projects__article-item__description">
                      {element.description}
                    </p>
                    <div className="projects__article-item__element-group">
                      <a
                        className="projects__article-item__link"
                        href={element.urlGitHub}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub />
                        <span>GitHub Code</span>
                      </a>
                      <a
                        className="projects__article-item__link"
                        href={element.urlVercel}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaShare />
                        <span>Aplicação</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </Container>
        </StyledProjectsSection>
      </main>
      <Footer />
    </div>
  );
};
