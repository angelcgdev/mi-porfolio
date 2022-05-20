import React from 'react'
import { NavBar } from '../../components/NavBar';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Footer } from '../../components/Footer';
import { SectionTitle } from '../../components/Section/SectionTitle';
import { SectionDescription } from '../../components/Section/SectionDescription';
import { loadProyect } from '../../lib/load-proyect';
export default function Proyect (props) {

  let proyect = props.proyect;
  proyect = {
    title: proyect?.title??"Project Title",
    description: proyect?.description??"Description",
    longDescription: proyect?.longDescription??"Long Description",
    imageSrc: proyect?.imageSrc??"https://images.unsplash.com/photo-1622929611233-bd6d58cbd4dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    slug: proyect?.slug??"slug",
  }
  const router = useRouter();
  const handleHome = ()=>{
    router.back();
  }

  return (
    <>
      <div className="sticky  top-0 z-10 bg-white flex justify-center">
        <div className='container'>
          <NavBar className='mx-8 mb-4' goHome={handleHome}/>
        </div>
      </div>
      <div className='aspect-video relative mx-auto max-w-screen-2xl'>
          <Image
            src={proyect.imageSrc}
            className=" object-cover"
            alt="cover"
            layout="fill"
          />
      </div>        
      <div className="container mx-auto mb-10">
        <div className='mx-8 mt-8'>
          <SectionTitle>{proyect.title}</SectionTitle>
          <SectionDescription type='full'>
            {proyect.longDescription}
          </SectionDescription>
          <Footer/>
        </div>
      </div>
    </>
  )
}
export async function getStaticProps({params}) {
  
  const { slug } = params;
  const proyect = await loadProyect(slug);
  return {
    props: {
      proyect,
    },
  }
}


export async function getStaticPaths(context) {
  return {
    paths: [
      { params: { slug: 'one' } },
      { params: { slug: 'two' } },
      { params: { slug: 'three' } },
      { params: { slug: 'four' } },
      { params: { slug: 'five' } },
      { params: { slug: 'six' } },
    ],
    fallback: true
  };
}