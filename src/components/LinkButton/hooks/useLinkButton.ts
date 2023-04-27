import {
  useRef,
  useEffect,
  useContext,
  useCallback,
  MutableRefObject,
  MouseEventHandler,
} from "react";
import { useRouter } from "next/router";
import { WebContext } from "../../../context/web-context";
import { typeSection } from "../../../models/section.model";

interface Props {
  className?: string;
  href: typeSection;
  afterNavigate?: Function;
}
export const useLinkButton = ({ href, afterNavigate }: Props) => {
  const {
    navRef,
    setAutoScroll,
    aboutRef,
    contactRef,
    experienceRef,
    mainRef,
    portfolioRef,
  } = useContext(WebContext);

  const searchRef = (
    href: typeSection
  ): MutableRefObject<HTMLElement | null> => {
    switch (href) {
      case "#about":
        return aboutRef;
      case "#experience":
        return experienceRef;
      case "#portfolio":
        return portfolioRef;
      case "#contact":
        return contactRef;
    }
  };

  const elementRef = searchRef(href);
  const timer = useRef<NodeJS.Timeout>();
  const { asPath, push } = useRouter();

  const scrollTo = () => {
    setAutoScroll(true);
    // e.preventDefault();
    push(href.toString(), undefined, { scroll: false });
    window.scrollTo({
      top:
        elementRef.current!.offsetTop ?? 0 - navRef.current!.offsetHeight ?? 0,
      left: 0,
      behavior: "smooth",
    });

    elementRef && !!afterNavigate && afterNavigate();
  };

  // const detect = useCallback(
  //   (event) => {
  //     if (asPath.includes(href.toString())) {
  //       clearTimeout(timer.current);
  //       timer.current = setTimeout(() => {
  //         setAutoScroll(false);
  //       }, 300);
  //     }
  //   },
  //   [asPath, setAutoScroll, href]
  // );

  return { scrollTo, elementRef };
};
