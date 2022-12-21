import React from 'react'

export const SectionWrapper = ({id, sRef, children}) => {

  return (
    <section id={id} className="pt-40 pb-5" ref={sRef}>
      <div>
        {children}
      </div>
    </section>
  )
}
