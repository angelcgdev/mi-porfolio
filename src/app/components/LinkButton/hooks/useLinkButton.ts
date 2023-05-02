import { MouseEvent } from "react";
import { typeSection } from "../../../../models/section.model";

interface Props {
  // href: typeSection;
  afterNavigate?: Function;
}
export const useLinkButton = ({ afterNavigate }: Props) => {
  // const {
  //   navRef,
  //   setAutoScroll,
  //   aboutRef,
  //   contactRef,
  //   experienceRef,
  //   portfolioRef,
  // } = useContext(WebContext);

  // const searchRef = (
  //   href: typeSection
  // ): MutableRefObject<HTMLElement | null> => {
  //   switch (href) {
  //     case "#about":
  //       return aboutRef;
  //     case "#experience":
  //       return experienceRef;
  //     case "#portfolio":
  //       return portfolioRef;
  //     case "#contact":
  //       return contactRef;
  //   }
  // };

  const scrollTo = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/^.+#/, "#");
    const element = document.getElementById(targetId);
    const nav = document.getElementById("nav");
    !!afterNavigate && afterNavigate();
    const sectionPosition = element!.offsetTop - nav!.offsetHeight;
    window.scrollTo({
      top: sectionPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  return { scrollTo };
};
