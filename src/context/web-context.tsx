import {
  MutableRefObject,
  ReactNode,
  createContext,
  useRef,
  useState,
} from "react";

interface Props {
  navRef: MutableRefObject<HTMLElement | null>;
  mainRef: MutableRefObject<HTMLElement | null>;
  aboutRef: MutableRefObject<HTMLElement | null>;
  portfolioRef: MutableRefObject<HTMLElement | null>;
  contactRef: MutableRefObject<HTMLElement | null>;
  experienceRef: MutableRefObject<HTMLElement | null>;
  autoScroll: boolean;
  setAutoScroll: Function;
}

export const WebContext = createContext<Props>({
  navRef: { current: null },
  mainRef: { current: null },
  aboutRef: { current: null },
  portfolioRef: { current: null },
  contactRef: { current: null },
  experienceRef: { current: null },
  autoScroll: false,
  setAutoScroll: () => {},
});

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const navRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const [autoScroll, setAutoScroll] = useState(false);

  const value: Props = {
    navRef,
    mainRef,
    aboutRef,
    portfolioRef,
    contactRef,
    autoScroll,
    setAutoScroll,
    experienceRef,
  };

  return <WebContext.Provider value={value}>{children}</WebContext.Provider>;
};
