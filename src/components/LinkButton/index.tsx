import { useCallback, useContext, useEffect, useRef } from 'react';
import { WebContext } from '../../context/web-context';
import { useRouter } from 'next/router';
import { useLinkButton } from './hooks/useLinkButton';

interface Props{
  children: any,
  className?: string,
  href?: string | undefined,
  elementRef: any,
  afterNavigate?: Function,
}

export const LinkButton = ({children, className, href, elementRef, afterNavigate}: Props) => {

  const { scrollTo } = useLinkButton({ afterNavigate, elementRef, href});

  return (
    <a href={href} role="button" className={className} onClick={scrollTo}>{children}</a>
  )
}
