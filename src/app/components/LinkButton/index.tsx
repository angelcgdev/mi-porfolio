import { useLinkButton } from "./hooks/useLinkButton";
import Link from "next/link";
import { LinkButtonProps } from "./model/linkButton";

export const LinkButton = ({
  children,
  className,
  href,
  afterNavigate,
}: LinkButtonProps) => {
  const { scrollTo } = useLinkButton({ afterNavigate });

  return (
    <Link
      href={`${href}`}
      role="button"
      className={`button ${className ?? ""}`}
      prefetch={false}
      onClick={scrollTo}
    >
      {children}
    </Link>
  );
};
