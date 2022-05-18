import React from 'react'

export const SectionWrapper = ({hRef, children}) => {
  return (
    <div className="mt-40" ref={hRef}>
        {children}
    </div>
  )
}
