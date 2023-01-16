import React from 'react';

export const SectionWrapper = ({id, sRef, children}) => {

  return (
    <section id={id} ref={sRef} className="pt-40 pb-5">
      <div>
        {children}
      </div>
    </section>
  )
}
