import { MutableRefObject, createContext, useRef, useState } from "react";

interface Props{
    navRef: MutableRefObject<HTMLElement>,
    mainRef: MutableRefObject<HTMLElement>,
    aboutRef: MutableRefObject<HTMLElement>,
    portfolioRef: MutableRefObject<HTMLElement>,
    contactRef: MutableRefObject<HTMLElement>,
    experienceRef: MutableRefObject<HTMLElement>,
    autoScroll: boolean,
    setAutoScroll: Function
}

export const WebContext = createContext<Props>(null);

export const PortfolioProvider = (props) => {
    const navRef = useRef<HTMLElement>(undefined);
    const mainRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const portfolioRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);
    const experienceRef = useRef<HTMLElement>(null);
    const [autoScroll, setAutoScroll] = useState(false);
  
    const value:Props = { navRef, mainRef, aboutRef, portfolioRef, contactRef, autoScroll, setAutoScroll, experienceRef};
    
    
    return <WebContext.Provider value={value}>{props.children}</WebContext.Provider>;
  };