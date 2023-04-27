import React, { useContext } from "react";
import data, { projects } from "../../yourData";
import { SectionTitle, SectionWrapper, ProjectCard } from "../components";
import { WebContext } from "../context/web-context";

export const PortfolioSection = () => {
  const { portfolioRef } = useContext(WebContext);
  return (
    <SectionWrapper id="#portfolio" ref={portfolioRef}>
      <SectionTitle>Portfolio.</SectionTitle>
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectCard
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              slug={project.slug}
            />
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};
