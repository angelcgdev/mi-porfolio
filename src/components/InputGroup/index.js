import React from 'react'

export const InputGroup = ({child, label, error}) => {
  console.log(error);
  return (
    <div className="flex flex-col">
      <label className="mr-5">{label}</label>
      {child}
      <div className="h-6 mb-2">{error}</div>
    </div>
  )
}
