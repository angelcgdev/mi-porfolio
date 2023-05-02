import { MouseEvent } from "react";

interface Props {
  afterNavigate?: Function;
}
export const useLinkButton = ({ afterNavigate }: Props) => {
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
