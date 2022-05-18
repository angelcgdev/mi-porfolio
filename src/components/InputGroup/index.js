import React from 'react'

export const InputGroup = ({children, label, error}) => {
  return (
    <div className="flex flex-col">
      <label className="mr-5">{label}</label>
      {children}
      <label className="text-red-500 h-6 mb-2">{error}</label>
    </div>
  )
}
