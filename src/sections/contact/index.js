import { useFormik } from 'formik'
import React from 'react'
import data from '../../../yourData'
import Button from '../../components/Button'
import { InputGroup } from '../../components/InputGroup'
import { SectionDescription } from '../../components/Section/SectionDescription'
import { SectionTitle } from '../../components/Section/SectionTitle'
import { SectionWrapper } from '../../components/Section/SectionWrapper'
import Socials from '../../components/Socials'

export const ContactSection = ({contactRef}) => {


      const validate = values => {
        const errors = {};
        const {name, subjet, email, message } = values;
        if (!name.trim()) {
          errors.name = 'Required';
        }
        if (!subjet.trim()) {
          errors.subjet = 'Required';
        }
      
        if (!email.trim()) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
          errors.email = 'Invalid email address';
        }

        if (!message.trim()) {
          errors.message = 'Required';
        }
      
        return errors;
      };

      const formik = useFormik({
        initialValues: {
            name:'',
            email: '',
            subjet: '',
            message: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

  return (
    <SectionWrapper sRef={contactRef}>
      <SectionTitle>Contact.</SectionTitle>
      <SectionDescription>{data.contactpara}</SectionDescription>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
        <form onSubmit={formik.handleSubmit} noValidate={true}>
          <InputGroup label='Name:' error={formik.errors.name} >
            <input className="appearance-none border rounded py-2 px-3 text-gray-700" type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
          </InputGroup>
          <InputGroup label='Subject:' error={formik.errors.subjet}>
            <input className="appearance-none border rounded py-2 px-3 text-gray-700" type="text" id="subjet" name="subjet" onChange={formik.handleChange} value={formik.values.subjet}/>
          </InputGroup>
          <InputGroup label='Email:' error={formik.errors.email}>
            <input className="appearance-none border rounded py-2 px-3 text-gray-700" type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
          </InputGroup>
          <InputGroup label='Message:' error={formik.errors.message}>
            <textarea className="resize-none appearance-none border rounded py-2 px-3 text-gray-700" id="message" name="message" rows={3} onChange={formik.handleChange} value={formik.values.message}/>
          </InputGroup>
          <Button className="cursor-pointer px-3" kind="primary" bType="submit" >Submit</Button>
        </form>
        <div className="grid grid-cols-1 gap-4 place-content-center">
          <Socials  className="md:justify-center" />
        </div>
      </div>
    </SectionWrapper>
  )
}
