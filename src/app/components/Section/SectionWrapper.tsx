import { forwardRef, HtmlHTMLAttributes } from "react";
import { typeSection } from "../../../models/section.model";
import { NextSection } from "../LinkButton/NextSection";
import styles from "./Section.module.scss";
// eslint-disable-next-line react/display-name
export const SectionWrapper = forwardRef<
  HTMLElement,
  HtmlHTMLAttributes<HTMLElement>
>(({ id, children, ...rest }, ref) => {
  return (
    <section id={id} ref={ref} className={styles["wrapper"]} {...rest}>
      <div>{children}</div>
      <NextSection
        href={id as typeSection}
        className={styles["next-position"]}
      />
    </section>
  );
});
