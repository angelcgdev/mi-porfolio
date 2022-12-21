import React, { useContext } from 'react'
import data from '../../yourData'
import { SectionDescription,SectionTitle, SectionWrapper } from '../components';
import { WebContext } from '../context/web-context';

export const About = () => {
  const {aboutRef} = useContext(WebContext);
  return (
    <SectionWrapper id="#about" sRef={aboutRef}>
        <SectionTitle>About me.</SectionTitle>
        <SectionDescription>{data.aboutpara}</SectionDescription>
    </SectionWrapper>
  )
}
