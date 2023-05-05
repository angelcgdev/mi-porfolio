import React, { ReactNode } from "react";
import styles from "./Section.module.scss";

export const SectionTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className={`${styles["title"]}`}>{children}</h2>;
};
