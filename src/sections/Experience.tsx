import React, { useContext } from 'react'
import { LeftSide, SectionTitle, SectionWrapper } from '../components'
import { WebContext } from '../context/web-context';
import data from '../../yourData';
import { ExperienceCard } from '../components/ExperienceCard/ExperienceCard';

export const Experience = () => {
    const {experienceRef} = useContext(WebContext);

  return (
    <SectionWrapper id="#experience" ref={experienceRef}>
        <SectionTitle>Where I’ve Worked.</SectionTitle>
          <ul className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3'>
              {data.experience.map((experience) =>(
                <li key={`experience-${experience.id}`} >
                  <ExperienceCard experience={experience}/>
                </li>
              ))}
          </ul>
    </SectionWrapper>
  )
}
