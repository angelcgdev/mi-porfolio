import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import styles from "./styles.module.scss";
import { useRouter } from 'next/router';
import { WebContext } from '../../context/web-context';

export const NavBar = ({navRef , goHome, mobileMenu, rightOptions, isOpen = false, className, hideRightOpt, onScroll}) => {
  
  const {mainRef, aboutRef, portfolioRef, contactRef} = useContext(WebContext);
  const [anchor, setAnchor] =  useState('');
  const [isOnTop, setIsOnTop] =  useState();
  const isOpenRef = useRef(isOpen);
  const heightExpanded = 156;
  const oscillation = 20;
  const range = (heightExpanded+oscillation)*2;
  const initValue=0;
  const router = useRouter();
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
      console.log({left: limitLeft, limitLeft:(limitLeft + (heightExpanded*2)), scrollYNormalized, limitRight})
      if(scrollYNormalized < (limitLeft + (heightExpanded+2) ) || scrollYNormalized > limitRight){
        onScroll&&onScroll();
      }
    }
    isVisible(mainRef);
    isVisible(aboutRef);
    isVisible(portfolioRef);
    isVisible(contactRef);  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isOpenRef, onScroll]);
  

  const isVisible = (ref)=> {
    var top = ref.current?.getBoundingClientRect().top;
    if(top){
      const id = ref.current.id;
      if(top>0 && top<100){
        setAnchor(id==='#main'?'':id)
      }
    }
  }
  
  useEffect(() => {
    router.push(anchor, undefined, { scroll: false });  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anchor])
  

  useEffect(() => {
    if(isOpen){
      const { scrollY } = window;
      const scrollYNormalized = scrollY===0?scrollY:(scrollY-heightExpanded);
      prevRef.current = {limitLeft: getLimits(scrollYNormalized, 'left'), current: scrollYNormalized, limitRight: getLimits(scrollYNormalized, 'right')};
    }
    isOpenRef.current = isOpen;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])
  

  useEffect(() => {
    window.addEventListener("scroll", scrolling, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrolling, { passive: true });
    }
  }, [scrolling]);
  // ${isOnTop?'dark:bg-opacity-100':'dark:bg-opacity-0'}
  return (
    <nav className={`bg-white dark:bg-black  ${isOnTop||isOpen?'shadow-sm':''} ${styles.nav} ${!!className?className:''}`} ref={navRef}>
      <div className="h-10 flex items-center justify-between">
        <h1 className="font-bold cursor-pointer select-none" onClick={goHome}>AngelCgDev.</h1>
        <div>
          {rightOptions}
        </div>
      </div>
      <div id="mobile-menu" className={`${hideRightOpt?'hidden':''} overflow-hidden transition-all duration-300 ${!isOpen?"max-h-0":"max-h-96"}`}>
        {mobileMenu}
      </div>
    </nav>
  )
}
