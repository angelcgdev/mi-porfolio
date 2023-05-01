import { useContext, MutableRefObject, MouseEvent } from "react";
import { useRouter } from "next/router";
import { WebContext } from "../../../context/web-context";
import { typeSection } from "../../../models/section.model";
import { setTimeout } from "timers";

interface Props {
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
  const { push } = useRouter();

  const scrollTo = async (e: MouseEvent<HTMLAnchorElement>) => {
    setAutoScroll(true);
    e.preventDefault();
    await push(href.toString(), undefined, { scroll: false });

    !!afterNavigate && afterNavigate();
    await setTimeout(() => {
      const sectionPosition =
        elementRef.current!.offsetTop - navRef.current!.offsetHeight;
      window.scrollTo({
        top: sectionPosition,
        left: 0,
        behavior: "smooth",
      });
    }, 300);
  };

  return { scrollTo, elementRef };
};
