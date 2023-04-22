import { ReactNode, forwardRef, HtmlHTMLAttributes } from 'react';

interface SectionProps extends HtmlHTMLAttributes<HTMLElement> {
  id: string,
}
// eslint-disable-next-line react/display-name
export const SectionWrapper = forwardRef<HTMLElement, SectionProps>(({id, children, ...rest}, ref) => {
  return (
    <section id={id} ref={ref} className="pt-40 pb-5" >
      <div>
        {children}
      </div>
    </section>
  )
});
