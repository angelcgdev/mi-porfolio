import React from 'react'
import data from '../../yourData'
import { SectionDescription } from '../components/Section/SectionDescription'
import { SectionTitle } from '../components/Section/SectionTitle'
import { SectionWrapper } from '../components/Section/SectionWrapper'

export const About = ({aboutRef}) => {
  return (
    <SectionWrapper sRef={aboutRef}>
        <SectionTitle>About.</SectionTitle>
        <SectionDescription>{data.aboutpara}</SectionDescription>
    </SectionWrapper>
  )
}
