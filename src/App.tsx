import { useContext } from "react";
import { FaGithub, FaShare } from "react-icons/fa";

import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { SlideMenu } from "./components/SlideMenu";

import { TechnologiesContext } from "./context/TechnologiesContext";
import { ProjectsContext } from "./context/ProjectsContext";

import {
  StyledPresentationSection,
  StyledProjectsSection,
  StyledTechnologiesSection,
} from "./App.style";
import { Button } from "./components/Button";
import { scrollToAnchor } from "./utils/scrollToAnchor";

export const App = () => {
  const technologies = useContext(TechnologiesContext);
  const projects = useContext(ProjectsContext);

  console.log(projects);

  return (
    <div>
      <SlideMenu />
      <Header />
      <Main>
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
                <Button
                  type="text"
                  color="tertiary"
                  size="lg"
                  onClick={() => scrollToAnchor("projects")}
                >
                  <span>Projetos</span>
                </Button>
                <Button
                  type="contained"
                  color="primary"
                  size="lg"
                  onClick={() => scrollToAnchor("technologies")}
                >
                  <span>Tecnologias</span>
                </Button>
              </div>
            </article>
          </Container>
        </StyledPresentationSection>
        <StyledTechnologiesSection id="technologies">
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
        <StyledProjectsSection id="projects">
          <Container>
            <section className="projects">
              <article className="projects__article projects__article--cta">
                <h5 className="projects__article-title--cta">
                  Vamos trocar uma ideia?
                </h5>
                <p className="projects__article-text--cta">
                  No Instagram, adoro compartilhar meu dia a dia e os bastidores
                  do desenvolvimento desses projetos. Estou sempre aberto a
                  trocar ideias e conversar sobre o processo criativo. Vamos nos
                  conectar lá também!
                </p>
                <Button size="md" type="contained">
                  <a
                    href="https://www.instagram.com/davidalmeidadev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Acessar perfil no Instagram</span>
                  </a>
                </Button>
              </article>
              <article className="projects__article">
                <h5 className="projects__article-title">Projetos</h5>
                <p className="projects__article-text">
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
                        {element.techs.map((element, index) => (
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
            </section>
          </Container>
        </StyledProjectsSection>
      </Main>
      <Footer />
    </div>
  );
};
