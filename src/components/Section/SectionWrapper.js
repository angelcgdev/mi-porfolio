import React from 'react'

export const SectionWrapper = ({sRef, children}) => {
  return (
    <section className="pt-40 pb-5" ref={sRef}>
      <div>
        {children}
      </div>
    </section>
  )
}
