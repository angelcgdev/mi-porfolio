import React, { useContext, useEffect, useState } from "react";
import Button from "../Button";
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
        <div className="flex flex-row gap-2">
          <div className="hidden sm:flex sm:npm sm:gap-2">
            <LinkButton elementRef={aboutRef} href="#about">About</LinkButton>
            <LinkButton elementRef={portfolioRef} href="#portfolio">Portfolio</LinkButton>
            <LinkButton elementRef={contactRef} href="#contact" >Contact</LinkButton>
          </div>
          <DarkBtn/>
          <Button className="sm:hidden" onClick={()=>handleClick()}>
            <div id="toogle" className={isOpen?"active":""}></div>
          </Button>
        </div>
      }
      mobileMenu={
        <div className={`flex flex-col gap-1 sm:hidden p-5`}>
          <LinkButton
            className="hover:scale-100 active:scale-100"
            kind="inline"
            elementRef={aboutRef}
            href="#about"
            afterNavigate={handleClick}
            >
              About
          </LinkButton>
          <LinkButton
            className="hover:scale-100 active:scale-100"
            kind="inline"
            elementRef={portfolioRef}
            href="#portfolio"
            afterNavigate={handleClick}
          >
            Portfolio
          </LinkButton>
          <LinkButton
            className="hover:scale-100 active:scale-100"
            kind="inline"
            elementRef={contactRef}
            href="#contact"
            afterNavigate={handleClick}
          >
            Contact
          </LinkButton>
        </div>
      }
      isOpen={isOpen}
    />
  );
};

export default Header;
