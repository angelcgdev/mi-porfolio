import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>Not Found Page | AngelCgDev</title>
        <meta name="description" content="not found page" />
      </Head>
      <div className='h-screen flex  justify-center flex-col items-center'>
          <h1>404 - Page Not Found</h1>
          {/* <Link  href="/">Go back home</Link> */}
          <Link href="/" role="button" target="button">test</Link>
      </div>
    </>
  )
}
