import React, { useContext } from 'react'
import { LeftSide, SectionTitle, SectionWrapper } from '../components'
import { WebContext } from '../context/web-context';
import data from '../../yourData';

export const Experience = () => {
    const {experienceRef} = useContext(WebContext);

  return (
    <SectionWrapper id="#experience" sRef={experienceRef}>
        <SectionTitle>Where I’ve Worked</SectionTitle>
        <LeftSide>
          <ul className='flex flex-col gap-3'>
              {data.experience.map(({id, position, company, range, activities}) =>(
                <li
                  key={`experience-${id}`}
                  className='items-start text-lg p-4 border-slate-200 border-2 dark:border-gray-800 rounded-md duration-300'
                >
                  <div>
                    <div>
                      <p className='font-medium'>{position} <span className='text-primary'>{company}</span></p>
                      <p className='text-sm'>{ range }</p>
                    </div>
                    <ul className='decorated'>
                      {
                        activities.map((activity, i)=>(<li key={`activity-${i}`}>
                          <p className='description'>{activity}</p>
                        </li>))
                      }
                    </ul>
                  </div>
                </li>
              ))}
          </ul>
        </LeftSide>
    </SectionWrapper>
  )
}
