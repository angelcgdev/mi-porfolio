import React from 'react'
import data from '../../yourData'
import { SectionDescription,SectionTitle, SectionWrapper } from '../components';

export const About = ({aboutRef}) => {
  return (
    <SectionWrapper sRef={aboutRef}>
        <SectionTitle>About me.</SectionTitle>
        <SectionDescription>{data.aboutpara}</SectionDescription>
    </SectionWrapper>
  )
}
