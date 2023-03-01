import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useHeader = ()=>{

    const [isOpen, setIsOpen] = useState(false);
    const [hideRightOpt, setHideRightOpt] =  useState(true);
    const router = useRouter();

    const handleMenuMobile = ()=>{
      setIsOpen(!isOpen);
    }
    
    const goBack=()=> {
        router.back();
    }

    const goTop = () => {
        // router.push('', undefined, { scroll: false });
        // window.scrollTo({
        //   top: 0,
        //   left: 0,
        //   behavior: "smooth",
        // });
      };

    const closeMenu = ()=> setIsOpen(false);

    useEffect(() => {
        if(router.asPath.includes('/#') || router.asPath==='/'){
          setHideRightOpt(false);
        }else{
          setHideRightOpt(true);
        }
      }, [router.asPath]);

    return { handleMenuMobile, isOpen, closeMenu, goBack, goTop, hideRightOpt }
}