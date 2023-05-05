import { projects } from "../../../data/local/yourData";
import ProjectCard from "../ProjectCard/ProjectCard";
import { SectionWrapper, SectionTitle } from "../Section";
import { CommonProps } from "./Welcome";

export const PortfolioSection = ({ dictionary }: CommonProps) => {
  return (
    <SectionWrapper id="#portfolio">
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
