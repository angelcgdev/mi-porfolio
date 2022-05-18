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

export default function Home() {
  const router = useRouter();
  // Ref
  const navRef = useRef();
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  // Handling Scroll

  const handleTopScroll = () => {
    console.log(navRef.current.offsetHeight);
    router.push('', undefined, { scroll: false });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    console.log(navRef.current.offsetHeight);
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

  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(e.target.values);
  }

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
        <div className="mt-20">
          <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl xl:text-8xl text-bold w-4/5">
            {data.headerTaglineOne} <br />
            {data.headerTaglineTwo}
          </h1>
          <Socials className="mt-5" />
        </div>
        <SectionWrapper hRef={aboutRef}>
          <SectionTitle>About.</SectionTitle>
          <SectionDescription>{data.aboutpara}</SectionDescription>
        </SectionWrapper>
        <SectionWrapper hRef={portfolioRef}>
          <SectionTitle>Portfolio.</SectionTitle>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data.projects.map((project, index) => (
              <WorkCard
                key={index}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                slug={project.slug}
              />
            ))}
          </div>
        </SectionWrapper>
        <SectionWrapper hRef={contactRef}>
          <SectionTitle>Contact.</SectionTitle>
          <SectionDescription>{data.contactpara}</SectionDescription>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
            <form onSubmit={handleSubmit} >
              <InputGroup
                label='Name:'
                error={'test'}
                child={<input className="appearance-none border rounded py-2 px-3 text-gray-700" type="text" id="name" name="name"/>}
              />
              <InputGroup
                label='Subject:'
                child={<input className="appearance-none border rounded py-2 px-3 text-gray-700" type="text" id="subjet" name="subjet"/>}
              />
              <InputGroup
                label='Email:'
                child={<input className="appearance-none border rounded py-2 px-3 text-gray-700" type="email" id="email" name="email"/>}
              />
              <InputGroup
                label='Message:'
                child={<textarea className="resize-none appearance-none border rounded py-2 px-3 text-gray-700" yid="message" name="message" rows={3}/>}
              />
              <Button className="cursor-pointer px-3" kind="primary">Submit</Button>
            </form>
            <div className="grid grid-cols-1 gap-4 place-content-center">
              <Socials  className="md:justify-center" />
            </div>
          </div>
        </SectionWrapper>
        <Footer/>
      </div>
    </div>
  );
}
