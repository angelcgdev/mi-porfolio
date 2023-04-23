import { ReactNode } from "react";

export interface LinkButtonProps{
    children?: ReactNode,
    className?: string,
    href?: string | undefined,
    afterNavigate?: Function,
  }