import { MutableRefObject, createContext, useRef, useState } from "react";

interface Props{
    navRef: MutableRefObject<HTMLElement>,
    mainRef: MutableRefObject<HTMLElement>,
    aboutRef: MutableRefObject<undefined>,
    portfolioRef: MutableRefObject<undefined>,
    contactRef: MutableRefObject<undefined>,
    autoScroll: boolean,
    setAutoScroll: Function
}

export const WebContext = createContext<Props>(null);

export const PortfolioProvider = (props) => {
    const navRef = useRef();
    const mainRef = useRef();
    const aboutRef = useRef();
    const portfolioRef = useRef();
    const contactRef = useRef();
    const [autoScroll, setAutoScroll] = useState(false);
  
    const value = { navRef, mainRef, aboutRef, portfolioRef, contactRef, autoScroll, setAutoScroll};
    
    
    return <WebContext.Provider value={value}>{props.children}</WebContext.Provider>;
  };