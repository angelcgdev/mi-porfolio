import { ReactNode } from "react";
import { typeSection } from "../../../models/section.model";

export interface LinkButtonProps {
  children?: ReactNode;
  className?: string;
  href: typeSection;
  afterNavigate?: Function;
}
