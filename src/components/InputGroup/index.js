import React from 'react'

export const InputGroup = ({children, label, error}) => {
  return (
    <div className="flex flex-col">
      <label className="flex flex-col text-lg">
        {label}
        {children}
      </label>
      <label className={`text-lg text-red-500 ${!!error?'h-6':'h-0'} duration-300`}>{error}</label>
    </div>
  )
}
