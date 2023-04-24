import { forwardRef, HtmlHTMLAttributes } from "react";
import { NextSection } from "../LinkButton/NextSection";

// eslint-disable-next-line react/display-name
export const SectionWrapper = forwardRef<
  HTMLElement,
  HtmlHTMLAttributes<HTMLElement>
>(({ id, children, ...rest }, ref) => {
  return (
    <section
      id={id}
      ref={ref}
      className="relative flex flex-col gap-20 pt-4 pb-4 md:pb-40"
      {...rest}
    >
      <div>{children}</div>
      <NextSection href={id} className="sticky bottom-5 z-[5] self-center" />
    </section>
  );
});
