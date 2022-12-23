import React, { useContext } from 'react';
import { WebContext } from '../../context/web-context';
import { useRouter } from 'next/router';

export const LinkButton = ({children, className, href, elementRef, afterNavigate}) => {
    
  const {navRef} = useContext(WebContext);
  const router = useRouter();
  
  const handleScroll = (e)=>{
    e.preventDefault();
    router.push(href, undefined, { scroll: false});
    window.scrollTo({
      top: elementRef.current.offsetTop - navRef.current.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
    afterNavigate&&afterNavigate();
  };

  return (
    <a href={href} role="button" className={className} onClick={handleScroll}>{children}</a>
  )
}
