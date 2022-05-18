import React from 'react'

export const SectionWrapper = ({sRef, children}) => {
  return (
    <div className="mt-40" ref={sRef}>
        {children}
    </div>
  )
}
