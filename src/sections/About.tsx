import React, { useContext } from "react";
import data from "../data/local/yourData";
import { SectionTitle, SectionWrapper } from "../components";
import { WebContext } from "../context/web-context";

export const About = () => {
  const { aboutRef, experienceRef } = useContext(WebContext);
  return (
    <SectionWrapper id="#about" ref={aboutRef}>
      <SectionTitle>About me.</SectionTitle>
      <div className="mt-10">
        <p className="description text-body mb-4">{data.aboutpara}</p>
        <p className="description text-body mb-2">
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul className="decorated w-5/5 ms:w-4/5 lg:w-3/py-5 w-5/5  ms:w-4/5 ml-0 grid grid-cols-1 gap-3 text-lg sm:grid-cols-2 lg:w-3/5">
          {data.technologies.map((technology, i) => (
            <li key={i}>
              <p className="description  text-body">{technology}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};
