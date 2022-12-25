import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { WebContext } from '../../context/web-context';
import { useRouter } from 'next/router';

export const LinkButton = ({children, className, href, elementRef, afterNavigate}) => {
  const {navRef, setAutoScroll, autoScroll} = useContext(WebContext);
  const timer = useRef();
  const { asPath, push, } = useRouter();
  // console.log({basePath});
  const scrollTo = (e)=>{
    setAutoScroll(true);
    e.preventDefault();
    push(href, undefined, { scroll: false});
    window.scrollTo({
      top: elementRef.current.offsetTop - navRef.current.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
    
    afterNavigate&&afterNavigate();
  };

  const detect = useCallback( event => {
    // console.log(asPath)
    if(asPath.includes(href)){
      // setAutoScroll(true);
      clearTimeout( timer.current );
      timer.current = setTimeout( () => {
          setAutoScroll(false);
          // console.log({autoScroll});
      }, 300 );
    }
  },[asPath, setAutoScroll, href])
  

  useEffect(() => {
    window.addEventListener('scroll', detect, { passive: true });
    return () => {
      window.removeEventListener('scroll', detect, { passive: true });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath, autoScroll])
  

  return (
    <a href={href} role="button" className={className} onClick={scrollTo}>{children}</a>
  )
}
