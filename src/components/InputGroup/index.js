import React from 'react'

export const InputGroup = ({children, label, error}) => {
  return (
    <div className="flex flex-col">
      <label className="flex flex-col">
        {label}
        {children}
      </label>
      <label className="text-red-500 h-6 mb-2">{error}</label>
    </div>
  )
}
