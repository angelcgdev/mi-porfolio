import React from 'react'

interface Experience {
    id: number,
    position: string,
    company: string,
    range: string,
    activities: string[]
}
export const  ExperienceCard = ({ experience }:{experience: Experience}) => {
    const { activities, company, id, position, range } = experience;
  return (
    <article role="article" className='items-start text-body p-4 border-borderc border-2 rounded-md duration-300'>
      <div>
        <h3 className='font-medium'>
          {position}
          <span className='text-primary'> {company}</span>
        </h3>
        <p className='text-sm'>{ range }</p>
      </div>
      <ul aria-label="Activities" className='decorated'>
        {
          activities.map((activity, i)=>(<li key={`activity-${i}`}>
            <p className='description'>{activity}</p>
          </li>))
        }
      </ul>
    </article>
  )
}
