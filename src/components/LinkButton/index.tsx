import { MutableRefObject, ReactNode, useCallback, useContext, useEffect, useRef } from 'react';
import { WebContext } from '../../context/web-context';
import { useRouter } from 'next/router';
import { useLinkButton } from './hooks/useLinkButton';
import Link from 'next/link';
import { LinkButtonProps } from './model/linkButton';



export const LinkButton = ({children, className, href, elementRef, afterNavigate}: LinkButtonProps) => {

  const { scrollTo } = useLinkButton({ afterNavigate, elementRef, href});

  return (
    <Link href={href} role="button" className={className} onClick={scrollTo}>{children}</Link>
  )
}
