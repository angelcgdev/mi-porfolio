import { MutableRefObject, ReactNode } from "react";

export interface LinkButtonProps{
    children?: ReactNode,
    className?: string,
    href?: string | undefined,
    elementRef: MutableRefObject<HTMLElement>,
    afterNavigate?: Function,
  }