import React from 'react';
import Head from 'next/head'
import { ToastContainer } from "react-toastify";
import { About, ContactSection, PortfolioSection, Welcome, } from "../sections";
import { Experience } from '../sections/Experience';

export default function Home() {

  return (
    <>
      <Head>
        <meta name="autor" content="Luis Caro, luisangelcarogaloc@gmail.com"/>
        <meta name="description" content="my personal web site."/>
        <meta name="keywords" content="ui, frontend, developer, react, flutter, nextjs, javascript, typescript, programmer"/>
        <meta name="date" content="25/12/2022" />
        <title>Luis Caro</title>
      </Head>
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar
          closeOnClick={false}
        />
          <Welcome/>
          <About/>
          <Experience/>
          <PortfolioSection/>
          <ContactSection/>
    </>
  );
}

