import { useRef, useEffect, useContext, useCallback } from 'react';
import { useRouter } from 'next/router';
import { WebContext } from '../../../context/web-context';

export const useLinkButton = ({href, elementRef, afterNavigate})=>{
    const {navRef, setAutoScroll, autoScroll} = useContext(WebContext);
    const timer = useRef<NodeJS.Timeout>();
    const { asPath, push, } = useRouter();
    
    const scrollTo = (e)=>{
      setAutoScroll(true);
      e.preventDefault();
      push(href, undefined, { scroll: false});
      window.scrollTo({
        top: elementRef.current.offsetTop - navRef.current.offsetHeight,
        left: 0,
        behavior: "smooth",
      });
      
      (elementRef && !!afterNavigate)&&afterNavigate();
    };
  
    const detect = useCallback( event => {
      if(asPath.includes(href)){
        clearTimeout( timer.current );
        timer.current = setTimeout( () => {
            setAutoScroll(false);
        }, 300 );
      }
    },[asPath, setAutoScroll, href])
    
  
    // useEffect(() => {
    //   window.addEventListener('scroll', detect, { passive: true });
    //   return () => {
    //     window.removeEventListener('scroll', detect);
    //   }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [asPath, autoScroll])

    return { scrollTo }

}