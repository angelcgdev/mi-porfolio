import { useFormik } from 'formik'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import data from '../../yourData'
import Button from '../components/Button'
import { InputGroup } from '../components/InputGroup'
import { Loader } from '../components/Loader'
import { SectionDescription } from '../components/Section/SectionDescription'
import { SectionTitle } from '../components/Section/SectionTitle'
import { SectionWrapper } from '../components/Section/SectionWrapper'
import Socials from '../components/Socials';


const initialValues = {
  name:'',
  email: '',
  subjet: '',
  message: '',
}

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

export const ContactSection = ({contactRef}) => {
  
  const [sended, setSended] = useState(false);
  const [isSending, setIsSending] = useState(false);
  
  const onSubmit =  async (values) => {
    setIsSending(true);
    const send = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    if(send.status===200){
      formik.resetForm();
      setSended(true);
      toast.success("Message sent!");
    }else{
      toast.error("Something went wrong!")
    }
    setIsSending(false);
  }

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });





  return (
    <SectionWrapper sRef={contactRef}>
      <SectionTitle>Contact me.</SectionTitle>
      <SectionDescription>{data.contactpara}</SectionDescription>
      <div className="md:mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <form onSubmit={formik.handleSubmit} noValidate={true} >
          <InputGroup label='Name:' error={formik.errors.name} >
            <input className="appearance-none border rounded py-2 px-3 text-gray-700 in-range:border-green-900" type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
          </InputGroup>
          <InputGroup label='Subject:' error={formik.errors.subjet}>
            <input className="appearance-none border rounded py-2 px-3 text-gray-700" type="text" id="subjet" name="subjet" onChange={formik.handleChange} value={formik.values.subjet} autoComplete="off"/>
          </InputGroup>
          <InputGroup label='Email:' error={formik.errors.email}>
            <input className="appearance-none border rounded py-2 px-3 text-gray-700" type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
          </InputGroup>
          <InputGroup label='Message:' error={formik.errors.message}>
            <textarea className="resize-none appearance-none border rounded py-2 px-3 text-gray-700" id="message" name="message" rows={3} onChange={formik.handleChange} value={formik.values.message} autoComplete="off"/>
          </InputGroup>
          <Button className="px-3 flex justify-center items-center" isDisable={sended} kind="primary" bType="submit">
            <div className='mt-0.5'>Submit</div>
            {
              isSending&&
              <Loader className='ml-2'/>
            }
          </Button>
        </form>
        <div className="grid grid-cols-1 gap-4 place-content-center">
          <Socials  className="md:justify-center" />
        </div>
      </div>
    </SectionWrapper>
  )
}
