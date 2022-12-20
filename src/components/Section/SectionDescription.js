import React from 'react'

export const SectionDescription = ({children, type}) => {
  if(type === 'full'){
    return (
      <p className="py-5 ml-0 text-lg select-none">{children}</p>
    )
  }
  return (
    <p className="py-5 ml-0 text-lg w-5/5 ms:w-4/5 lg:w-3/5 select-none">{children}</p>
  )
}
