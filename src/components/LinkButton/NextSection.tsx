import { useLinkButton } from "./hooks/useLinkButton";
import Link from "next/link";
import { typeSection } from "../../models/section.model";
import { menuOptions } from "../../datSource/memuOptions";

export const NextSection = ({
  className,
  href,
}: {
  className: string;
  href: typeSection;
}) => {
  const findNextHref = (href: typeSection): typeSection | undefined => {
    const index = Object.values(menuOptions).findIndex(
      (value) => value.href === href
    );
    const nextIndex = index + 1;
    if (index > -1 || nextIndex < menuOptions.length - 1) {
      return menuOptions[index + 1]?.href;
    }
  };
  const nextHref = findNextHref(href);
  const { scrollTo } = useLinkButton({ href: nextHref! });
  if (!nextHref) {
    return <></>;
  }
  return (
    <Link
      href={nextHref}
      role="button"
      className={`next ${className}`}
      onClick={scrollTo}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="7 13 12 18 17 13"></polyline>
        <polyline points="7 6 12 11 17 6"></polyline>
      </svg>
    </Link>
  );
};
