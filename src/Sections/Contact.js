import React from 'react'
import { data } from 'autoprefixer';
import Button from '../components/Button';
import { InputGroup } from '../components/InputGroup';
import { SectionDescription } from '../components/Section/SectionDescription';
import { SectionTitle } from '../components/Section/SectionTitle';
import { SectionWrapper } from '../components/Section/SectionWrapper';
import Socials from '../components/Socials';

export const Contact = ({hRef}) => {

   
  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(e.target.values);
  }

  return (
    <SectionWrapper hRef={hRef}>
      <SectionTitle>Contact.</SectionTitle>
      <SectionDescription>{data.contactpara}</SectionDescription>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
        <form onSubmit={ handleSubmit } >
          <InputGroup
            label='Name:' 
            errorM={'test'}
            child={
              <input className="appearance-none border rounded py-2 px-3 text-gray-700" type="text" id="name" name="name"/>
            }/>
          <InputGroup
            label='Subject:'
            errorM={'test'}
            child={
              <input className="appearance-none border rounded py-2 px-3 text-gray-700" type="text" id="subjet" name="subjet"/>
            }
          />
          <InputGroup
            label='Email:'
            errorM={'test'}
            child={
              <input className="appearance-none border rounded py-2 px-3 text-gray-700" type="email" id="email" name="email"/>
            }
          />
          <InputGroup
            label='Message:'
            errorM={'test'}
            child={
              <textarea className="resize-none appearance-none border rounded py-2 px-3 text-gray-700" yid="message" name="message" rows={3}/>
            } 
          />
          <Button className="cursor-pointer px-3" kind="primary">Submit</Button>
        </form>
        <div className="grid grid-cols-1 gap-4 place-content-center">
          <Socials  className="md:justify-center" />
        </div>
      </div>
    </SectionWrapper>
  )
}
