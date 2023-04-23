import { forwardRef, HtmlHTMLAttributes } from 'react';
import { NextSection } from '../LinkButton/NextSection';

// eslint-disable-next-line react/display-name
export const SectionWrapper = forwardRef<HTMLElement, HtmlHTMLAttributes<HTMLElement>>(({id, children, ...rest}, ref) => {
  return (
    <section id={id} ref={ref} className="pt-4 pb-4 md:pb-40 relative flex flex-col gap-20" {...rest}>
      <div>
        {children}
      </div>
      <NextSection href={id} className='self-center sticky bottom-0 z-[5]'/>
    </section>
  )
});
