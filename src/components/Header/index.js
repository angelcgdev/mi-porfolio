import React, { useState } from "react";
import Button from "../Button";
import { NavBar } from "../NavBar";
const Header = ({handleTopScroll, handleWorkScroll, handleAboutScroll, handleContactScroll, navRef }) => {
  const [isOpen, setisOpen] = useState(false);
  const handleClick = (scoll)=>{
    setisOpen(!isOpen);
    if(scoll){
      scoll();
    }
  }

  return (
    <NavBar
      navRef={navRef}
      goHome={handleTopScroll}
      deskMenu={
        <div className="hidden sm:flex sm:npm sm:gap-2">
          <Button onClick={handleAboutScroll}>About</Button>
          <Button onClick={handleWorkScroll}>Portfolio</Button>
          <Button onClick={handleContactScroll}>Contact</Button>
        </div>
      }
      mobileButton={
        <Button onClick={()=>handleClick()}>
          <div id="toogle" className={isOpen?"active":""}></div>
        </Button>
      }
      mobileMenu={
        <div className={`flex flex-col sm:hidden px-2 pt-2 pb-3 bg-white`}>
          <Button kind="inline" onClick={()=>handleClick(handleAboutScroll)}>About</Button>
          <Button kind="inline" onClick={()=>handleClick(handleWorkScroll)}>Portfolio</Button>
          <Button kind="inline" onClick={()=>handleClick(handleContactScroll)}>Contact</Button>
        </div>
      }
      isOpen={isOpen}
    />
  );
};

export default Header;
