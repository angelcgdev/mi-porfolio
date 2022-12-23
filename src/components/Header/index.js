import React, { useContext, useEffect, useState } from "react";
import { NavBar } from "../NavBar";
import { LinkButton } from "../LinkButton";
import { WebContext } from "../../context/web-context";
import { useRouter } from "next/router";
import { DarkBtn } from "../DarkButton";
const Header = (props) => {
  
  const {navRef, aboutRef, portfolioRef, contactRef} = useContext(WebContext);
  
  const router = useRouter();
  const [isOpen, setisOpen] = useState(false);
  const [hideRightOpt, setHideRightOpt] =  useState(true);
  const handleClick = ()=>{
    setisOpen(!isOpen);
  }

  const handleTopScroll = () => {
    router.push('', undefined, { scroll: false });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const back=()=> {
    router.back();
  }

  
  useEffect(() => {
    if(router.asPath.includes('/#') || router.asPath==='/'){
      setHideRightOpt(false);
    }else{
      setHideRightOpt(true);
    }
  }, [router.asPath]);

  return (
    <NavBar
      navRef={navRef}
      goHome={!hideRightOpt?handleTopScroll:back}
      hideRightOpt={hideRightOpt}
      onScroll={()=>setisOpen(false)}
      rightOptions={
        // <div className="flex flex-row gap-2">
        // </div>
          <ul className="flex gap-2">
            <li className="hidden md:flex justify-center">
              <LinkButton elementRef={aboutRef} href="#about">About</LinkButton>
            </li>
            <li className="hidden md:flex justify-center">
              <LinkButton elementRef={portfolioRef} href="#portfolio">Portfolio</LinkButton>
            </li>
            <li className="hidden md:flex justify-center">
              <LinkButton elementRef={contactRef} href="#contact" >Contact</LinkButton>
            </li>
            <li className="flex justify-center">
              <DarkBtn/>
            </li>
            <li className="flex md:hidden justify-center">
              <button role="menubar" className="sm:hidden" onClick={()=>handleClick()}>
                <div id="toogle" className={isOpen?"active":""}></div>
              </button>
            </li>
          </ul>
      }
      mobileMenu={
        <ul className={`flex flex-col gap-2 sm:hidden p-5`}>
          <li>
            <LinkButton
              className="flex justify-center hover:scale-100 active:scale-100"
              kind="inline"
              elementRef={aboutRef}
              href="#about"
              afterNavigate={handleClick}
              >
                About
            </LinkButton>
          </li>
          <li>
            <LinkButton
              className="flex justify-center hover:scale-100 active:scale-100"
              kind="inline"
              elementRef={portfolioRef}
              href="#portfolio"
              afterNavigate={handleClick}
            >
              Portfolio
            </LinkButton>
          </li>
          <li>
            <LinkButton
              className="flex justify-center hover:scale-100 active:scale-100"
              kind="inline"
              elementRef={contactRef}
              href="#contact"
              afterNavigate={handleClick}
            >
              Contact
            </LinkButton>
          </li>
        </ul>
      }
      isOpen={isOpen}
    />
  );
};

export default Header;
