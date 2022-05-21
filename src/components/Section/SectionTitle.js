import React from 'react'

export const SectionTitle = ({children}) => {
  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl text-bold select-none">{children}</h1>
  )
}
