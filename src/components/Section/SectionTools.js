import React from 'react'

export const SectionTools = ({tools}) => {
  return (
    <div className='gap-2 flex flex-wrap'>
      {
        tools.map((tool)=><div key={tool} className='p-2 cursor-pointer rounded-lg bg-slate-100'>{tool}</div>)
      }
    </div>
  )
}
