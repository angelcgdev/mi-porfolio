import { useCallback, useContext, useEffect, useRef, useState, MutableRefObject } from 'react';
import { useRouter } from 'next/router';
import { WebContext } from '../../../context/web-context';

interface Props{
    onScroll?: Function,
    isOpen: boolean,
}
export const useNavBar = ({ isOpen, onScroll }:Props)=> {

  const heightExpanded = 156;
  const oscillation = 20;
  const range = (heightExpanded+oscillation)*2;
  const initValue=0;
    
  const {mainRef, aboutRef, portfolioRef, contactRef, autoScroll} = useContext(WebContext);
  const [anchor, setAnchor] =  useState('');
  const [isOnTop, setIsOnTop] =  useState(false);
  const router = useRouter();
  const isOpenRef = useRef(isOpen);
  const lastScrollTop = useRef(0);
  const isDownRef = useRef(false);  
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
    
    isDownRef.current = isDown();
    isVisible(mainRef);
    isVisible(aboutRef);
    isVisible(portfolioRef);
    isVisible(contactRef);  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isOpenRef, onScroll]);
  

  const isVisible = (ref)=> {
    const top = ref.current?.getBoundingClientRect().top;
    const bottom = ref.current?.getBoundingClientRect().bottom;
    if(top && bottom){
      const id = ref.current.id;
      if(isDownRef.current){
        console.log('down');
        const sHeight = ref.current.clientHeight;
        const wheight = window.innerHeight;
        const limitBotton = bottom - sHeight;
        const minVisible = limitBotton + (sHeight*.5);
        if(minVisible < wheight){
          setAnchor(id==='#main'?'':id)
        }
      }else{
        console.log('up');
        if(top>0 && top<100){
          setAnchor(id==='#main'?'':id)
        }
      }
    }
  }

  
  function isDown(){
    let st = window.scrollY;
    if (st > lastScrollTop.current){
      lastScrollTop.current = Math.floor(st);
      return true;
    } else {
      lastScrollTop.current = Math.floor(st);
      return false;
    }
 }
  
  useEffect(() => {
    if(autoScroll===false){
      if(router.isReady){
        router.push({pathname: '/', hash: anchor}, undefined, {scroll: false}).catch((e)=>{
          if(!e.cancelled){
            throw e
          }
        });
      }
    }
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
      window.removeEventListener("scroll", scrolling );
    }
  }, [scrolling]);

  return { isOnTop }
}