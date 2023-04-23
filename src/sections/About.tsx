import React, { useContext } from 'react'
import data from '../../yourData'
import { LeftSide,SectionTitle, SectionWrapper } from '../components';
import { WebContext } from '../context/web-context';
import { NextSection } from '../components/LinkButton/NextSection';

export const About = () => {
  const {aboutRef, experienceRef} = useContext(WebContext);
  return (
    <SectionWrapper id="#about" ref={aboutRef}>
        <SectionTitle>About me.</SectionTitle>
        <div className='mt-10'>
          <p className='mb-4 description text-body'>
            {data.aboutpara}
          </p>
          <p className='mb-2 description text-body'>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className='decorated grid gap-3 grid-cols-1 sm:grid-cols-2  w-5/5 ms:w-4/5 lg:w-3/py-5 ml-0 text-lg w-5/5 ms:w-4/5 lg:w-3/5'>
            {
              data.technologies.map((technology, i)=>(
                <li key={i}><p className='description  text-body'>{technology}</p></li>
              ))
            }
          </ul>
        </div>
    </SectionWrapper>
  )
}
