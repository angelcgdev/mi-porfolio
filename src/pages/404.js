import { useRouter } from 'next/router';
import React from 'react';
import Button from '../components/Button';
import Head from 'next/head';

export default function FourOhFour() {
    const router = useRouter();
    const handleClick =()=>{
        router.push('/');
    }

  return (
    <>
      <Head>
        <title>Not Found Page | AngelCgDev</title>
        <meta name="description" content="not found page" />
      </Head>
      <div className='h-screen flex  justify-center flex-col items-center'>
          <h1>404 - Page Not Found</h1>
          <Button onClick={handleClick}>
              Go back home
          </Button>
      </div>
    </>
  )
}
