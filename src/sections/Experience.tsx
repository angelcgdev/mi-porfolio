import React, { useContext } from "react";
import { LeftSide, SectionTitle, SectionWrapper } from "../components";
import { WebContext } from "../context/web-context";
import data from "../data/local/yourData";
import { ExperienceCard } from "../components/ExperienceCard/ExperienceCard";

export const Experience = () => {
  const { experienceRef } = useContext(WebContext);

  return (
    <SectionWrapper id="#experience" ref={experienceRef}>
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
