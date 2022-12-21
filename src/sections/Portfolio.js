import React from 'react';
import data from '../../yourData';
import { SectionTitle, SectionWrapper, WorkCard } from '../components';

export const PortfolioSection = ({portRef}) => {
  return (
    <SectionWrapper sRef={portRef}>
      <SectionTitle>Portfolio.</SectionTitle>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.projects.map((project, index) => (
          <WorkCard
            key={index}
            img={project.imageSrc}
            name={project.title}
            description={project.description}
            slug={project.slug}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
