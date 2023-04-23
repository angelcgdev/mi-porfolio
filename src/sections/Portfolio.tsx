import React, { useContext } from 'react';
import data from '../../yourData';
import { SectionTitle, SectionWrapper, ProjectCard } from '../components';
import { WebContext } from '../context/web-context';

export const PortfolioSection = (props) => {
  const {portfolioRef} = useContext(WebContext);
  return (
    <SectionWrapper id="#portfolio" ref={portfolioRef}>
      <SectionTitle>Portfolio.</SectionTitle>
      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.projects.map((project, index) => (
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
  )
}
