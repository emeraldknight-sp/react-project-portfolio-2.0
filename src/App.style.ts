import styled from "styled-components";

export const StyledPresentationSection = styled.section`
  background-color: var(--brand-1);
  color: var(--white);
  padding: 56px 0;

  .presentation__article {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 32px;
  }

  .presentation__article-text-group {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .presentation__article-title {
    font-size: var(--text-3xl);
    font-family: var(--lexend-tipography);
    font-weight: 700;
    line-height: var(--line-height-3xl);
  }

  .presentation__article-paragraph {
    font-size: var(--text-md);
    font-family: var(--inter-tipography);
    font-weight: 400;
    line-height: var(--line-height-md);
  }

  .presentation__article-button-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width: 100%;
  }

  @media (min-width: 1024px) {
    .presentation__article-button-group {
      display: flex;
      flex-direction: row;
    }

    .presentation__article {
      width: 50%;
      height: 350px;
    }
  }
`;

export const StyledTechnologiesSection = styled.section`
  background-color: var(--gray-4);
  color: var(--brand-5);
  padding: 54px 0;

  .technologies__article {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .technologies__article-title {
    font-size: var(--text-xl);
    font-family: var(--lexend-tipography);
    font-weight: 500;
    line-height: var(--line-height-xl);
  }

  .technologies__article-list-item {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    padding: 50px 0 30px;
    gap: 40px;
  }

  .technologies__article-list-item::-webkit-scrollbar {
    width: 12px;
  }

  .technologies__article-list-item::-webkit-scrollbar-track {
    background: var(--gray-4);
  }

  .technologies__article-list-item::-webkit-scrollbar-thumb {
    background-color: var(--gray-2);
    border-radius: 20px;
    border: 5px solid var(--gray-4);
  }

  .technologies__article-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white);
    border: 1px solid var(--white);
    border-radius: 8px;
    padding: 20px 55px;
    cursor: pointer;

    svg {
      width: 64px;
      height: 64px;
      fill: var(--gray-2);
    }

    .technologies__article-tag {
      visibility: hidden;
      transition: transform 0.3s ease-in-out, display 0.3s ease-in-out;

      background-color: var(--white);
      border-radius: 4px;
      padding: 4px 12px;
    }

    &:hover {
      .technologies__article-tag {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        visibility: visible;
        transform: translateY(-200%);
      }
    }
  }

  .technologies__article-text {
    font-size: var(--text-xs);
    font-family: var(--lexend-tipography);
    font-weight: 400;
    line-height: var(--line-height-xs);
    color: var(--gray-1);
  }
`;

export const StyledProjectsSection = styled.section`
  padding: 32px 0;

  @media (min-width: 1024px) {
    padding: 88px 0;
  }

  .projects {
    display: flex;
    flex-direction: row;
  }

  .projects__article {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;

    @media (min-width: 1024px) {
      width: 50%;
    }
  }

  .projects__article-title {
    font-size: var(--text-md);
    font-family: var(--inter-tipography);
    font-weight: 600;
    line-height: var(--line-height-md);
    color: var(--gray-2);
  }

  .projects__article-text {
    font-size: var(--text-2xl);
    font-family: var(--lexend-tipography);
    font-weight: 500;
    line-height: var(--line-height-2xl);
    color: var(--brand-5);

    span {
      color: var(--brand-1);
    }
  }

  .projects__article--cta {
    display: none;
    padding-right: 90px;

    @media (min-width: 1024px) {
      display: flex;
    }
  }

  .projects__article-title--cta {
    font-size: var(--text-xl);
    font-family: var(--lexend-tipography);
    font-weight: 600;
    line-height: var(--line-height-xl);
    color: var(--gray-1);
  }

  .projects__article-text--cta {
    font-size: var(--text-md);
    font-family: var(--inter-tipography);
    font-weight: 500;
    line-height: var(--line-height-md);
    color: var(--gray-2);
  }

  .projects__article-item-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 70px;
  }

  .projects__article-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 18px;
  }

  .projects__article-item__title {
    font-size: var(--text-2xl);
    font-family: var(--lexend-tipography);
    font-weight: 500;
    line-height: var(--line-height-2xl);
    color: var(--gray-1);
  }

  .projects__article-item__languages {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;

    p {
      font-size: var(--text-sm);
      font-family: var(--inter-tipography);
      font-weight: 500;
      line-height: var(--line-height-sm);
      color: var(--gray-6);
    }

    span {
      font-size: var(--text-xs);
      font-family: var(--inter-tipography);
      font-weight: 500;
      line-height: var(--line-height-xs);
      color: var(--brand-1);
      background-color: var(--brand-4);
      border: 1px solid var(--brand-4);
      border-radius: 8px;
      padding: 3px;

      @media (min-width: 768px) {
        span {
          font-size: var(--text-sm);
          font-family: var(--inter-tipography);
          font-weight: 500;
          line-height: var(--line-height-sm);
          padding: 6px;
        }
      }
    }
  }

  .projects__article-item__description {
    font-size: var(--text-md);
    font-family: var(--inter-tipography);
    font-weight: 400;
    line-height: var(--line-height-md);
    color: var(--gray-2);
  }

  .projects__article-item__element-group {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 44px;
  }

  .projects__article-item__link {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    text-decoration: none;
    color: var(--gray-2);

    span {
      font-size: var(--text-md);
      font-family: var(--inter-tipography);
      font-weight: 500;
      line-height: var(--line-height-md);
    }
  }
`;
