import data from "../../../data/local/yourData";
import { ExperienceCard } from "../ExperienceCard/ExperienceCard";
import { SectionTitle, SectionWrapper } from "../Section";
import { CommonProps } from "./Welcome";

export const Experience = ({ dictionary }: CommonProps) => {
  return (
    <SectionWrapper id="#experience">
      <SectionTitle>Where I’ve Worked.</SectionTitle>
      <ul className="mt-10 flex flex-col gap-4">
        {data.experience.map((experience) => (
          <li key={`experience-${experience.id}`}>
            <ExperienceCard experience={experience} />
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};
