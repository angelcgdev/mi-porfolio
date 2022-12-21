import Head from 'next/head'
import { ToastContainer } from "react-toastify";
import { About, ContactSection, PortfolioSection, Welcome, } from "../sections";

export default function Home() {

  return (
    <>
      <Head>
        <title>AngelCgDev</title>
        <meta name="og:title" content="Author: AngelGcDev, my personal website"/>
        <meta name="description" content="my personal web site."/>
      </Head>
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar
          closeOnClick={false}
        />
          <Welcome/>
          <About/>
          <PortfolioSection/>
          <ContactSection/>
    </>
  );
}

