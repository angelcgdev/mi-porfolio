import { useRef } from "react";
import Header from "../components/Header";

import { useRouter } from "next/router";
import { Welcome } from "../sections/Welcome";
import { PortfolioSection } from "../sections/Portfolio";
import { ContactSection } from "../sections/Contact";
import { About } from "../sections/About";
import { Footer } from "../components/Footer";
import Head from 'next/head'

export default function Home() {
  const router = useRouter();
  // Ref
  const navRef = useRef();
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  // Handling Scroll

  const handleTopScroll = () => {
    router.push('', undefined, { scroll: false });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    router.push('#about', undefined, { scroll: false});
    window.scrollTo({
      top: aboutRef.current.offsetTop - navRef.current.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  
  const handlePortfolioScroll = () => {
    router.push('#portfolio', undefined, { scroll: false});
    window.scrollTo({
      top: portfolioRef.current.offsetTop - navRef.current.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    router.push('#contact', undefined, { scroll: false});
    window.scrollTo({
      top: contactRef.current.offsetTop - navRef.current.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };



  return (
    <>
      <Head>
        <title>AngelCgDev</title>
        <meta name="og:title" content="Author: AngelGcDev, my personal website"/>
        <meta name="description" content="my personal web site."/>
      </Head>
      <div className="container mx-auto mb-10">
        <div className= "mx-8">
          <Header
            navRef={navRef}
            handleTopScroll={handleTopScroll}
            handleWorkScroll={handlePortfolioScroll}
            handleAboutScroll={handleAboutScroll}
            handleContactScroll={handleContactScroll}
          />
          <Welcome/>
          <About aboutRef={aboutRef}/>
          <PortfolioSection portRef={portfolioRef}/>
          <ContactSection contactRef={contactRef}/>
          <Footer/>
        </div>
      </div>
    </>
  );
}
