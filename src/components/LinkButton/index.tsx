import { useLinkButton } from "./hooks/useLinkButton";
import Link from "next/link";
import { LinkButtonProps } from "./model/linkButton";

export const LinkButton = ({
  children,
  className,
  href,
  afterNavigate,
}: LinkButtonProps) => {
  const { scrollTo } = useLinkButton({ afterNavigate, href });

  return (
    <Link
      href={`${href}`}
      role="button"
      className={`button ${className}`}
      onClick={scrollTo}
    >
      {children}
    </Link>
  );
};
