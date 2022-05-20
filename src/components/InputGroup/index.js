import React from 'react'

export const InputGroup = ({children, label, error}) => {
  return (
    <div className="mr-5 flex flex-col">
      <label className="flex flex-col">
        {label}
        {children}
      </label>
      <label className="text-red-500 h-6 mb-2">{error}</label>
    </div>
  )
}
