import { useRef, useContext, MutableRefObject, MouseEvent } from "react";
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

  const scrollTo = async (e: MouseEvent<HTMLAnchorElement>) => {
    setAutoScroll(true);
    e.preventDefault();
    await push(href.toString(), undefined, { scroll: false });
    window.scrollTo({
      top:
        elementRef.current!.offsetTop ?? 0 - navRef.current!.offsetHeight ?? 0,
      left: 0,
      behavior: "smooth",
    });

    elementRef && !!afterNavigate && afterNavigate();
  };

  return { scrollTo, elementRef };
};
