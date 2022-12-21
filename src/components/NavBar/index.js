import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from "./styles.module.scss";
import { useRouter } from 'next/router';

export const NavBar = ({navRef , goHome, deskMenu, mobileMenu, mobileButton, isOpen = false, className, hideRightOpt, onScroll}) => {
  
  const [isOnTop, setIsOnTop] =  useState();
  const isOpenRef = useRef(isOpen);
  const heightExpanded = 156;
  const range = (heightExpanded+40)*2;
  const initValue=0;
  const prevRef = useRef({limitLeft: getLimits(initValue, 'left'), current: initValue, limitRight: getLimits(initValue)});

  function getLimits(initialValue = 0, position='right'){
    if(position=='right'){
      return initialValue + (range*.5);
    }
    return initialValue -(range*.5);
  }
  const scrolling = useCallback(event => {
    const { scrollY } = window;
    setIsOnTop(scrollY>10);
    if(isOpenRef.current){
      const { limitLeft, limitRight } =  prevRef.current;
      const scrollYNormalized = scrollY===0?scrollY:(scrollY-heightExpanded);
      if(scrollYNormalized < (limitLeft) || scrollYNormalized > (limitRight)){
        // console.log('fuera de rango==>');
        onScroll&&onScroll();
      }
    }
    

  },[isOpenRef, onScroll]);

  useEffect(() => {
    if(isOpen){
      const { scrollY } = window;
      const scrollYNormalized = scrollY===0?scrollY:(scrollY-heightExpanded);
      prevRef.current = {limitLeft: getLimits(scrollYNormalized, 'left'), current: scrollYNormalized, limitRight: getLimits(scrollYNormalized, 'right')};
      console.log(prevRef.current);
    }
    isOpenRef.current = isOpen;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])
  

  useEffect(() => {
    window.addEventListener("scroll", scrolling, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrolling, { passive: true });
    }
  }, []);
  return (
    <nav className={`${isOnTop||isOpen?'shadow-sm':''} ${styles.nav} ${className} transition-all duration-200`} ref={navRef}>
      <div className="h-10 flex items-center justify-between bg-white">
        <h1 className="font-bold cursor-pointer select-none" onClick={goHome}>AngelCgDev.</h1>
        <div className={`${hideRightOpt?'hidden':''}`}>
            {deskMenu}
          <div className="flex">
            <div className="sm:hidden">
                {mobileButton}
            </div>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className={`${hideRightOpt?'hidden':''} overflow-hidden transition-all duration-300 ${!isOpen?"max-h-0":"max-h-96"}`}>
        {mobileMenu}
      </div>
    </nav>
  )
}
