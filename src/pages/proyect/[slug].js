import React from 'react'
import { NavBar } from '../../components/NavBar';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Footer } from '../../components/Footer';
import { SectionTitle } from '../../components/Section/SectionTitle';
import { SectionDescription } from '../../components/Section/SectionDescription';
export default function Proyect (props) {
  console.log(props);
  const {proyect} = props;
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
  const response = await fetch(`http://localhost:3000/api/proyect/${slug}`);
  const proyect = await response.json()
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