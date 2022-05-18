import { useRef } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";

// Local Data
import data from "../../yourData";
import { InputGroup } from "../components/InputGroup";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { SectionTitle } from "../components/Section/SectionTitle";
import { SectionDescription } from "../components/Section/SectionDescription";
import { Footer } from "../components/Footer";
import { SectionWrapper } from "../components/Section/SectionWrapper";
import { HomeSection } from "../sections/home";
import { PortfolioSection } from "../sections/portfolio";
import { ContactSection } from "../sections/contact";

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
    <div className="container mx-auto mb-10">
      <div className= "mx-8">
        <Header
          navRef={navRef}
          handleTopScroll={handleTopScroll}
          handleWorkScroll={handlePortfolioScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
        />
        <HomeSection/>
        <SectionWrapper sRef={aboutRef}>
          <SectionTitle>About.</SectionTitle>
          <SectionDescription>{data.aboutpara}</SectionDescription>
        </SectionWrapper>
        <PortfolioSection portRef={portfolioRef}/>
        <ContactSection contactRef={contactRef}/>
        <Footer/>
      </div>
    </div>
  );
}
