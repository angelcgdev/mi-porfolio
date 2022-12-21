import React, { useContext } from 'react';
import Button from '../Button';
import { WebContext } from '../../context/web-context';
import { useRouter } from 'next/router';

export const LinkButton = ({children, className, kind, href, elementRef, afterNavigate}) => {
    
  const {navRef} = useContext(WebContext);
  const router = useRouter();
  
  const handleScroll = ()=>{
    router.push(href, undefined, { scroll: false});
    window.scrollTo({
      top: elementRef.current.offsetTop - navRef.current.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
    afterNavigate&&afterNavigate();
  };

  return (
    <Button className={className} kind={kind} 
    onClick={handleScroll}>{children}</Button>
  )
}
